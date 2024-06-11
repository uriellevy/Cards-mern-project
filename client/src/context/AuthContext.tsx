import * as React from "react";
import { AuthContextType, ErrorMessage, IAuth, IUser, IUserInput } from "../interfaces/interfaces";
import useToastNotification from "../hooks/useToastNotification";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<IUser | null>(null);
  const [error, setError] = React.useState("");
  const { showToastSuccess, showToastError } = useToastNotification();

  React.useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const loggedUser = JSON.parse(userString);
      setUser(loggedUser);
    }
  }, [])

  const handleLogin = async (auth: IAuth) => {
    if (!auth.email || !auth.password) return;

    const res = await fetch("http://localhost:4005/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      showToastError(data.message);
      return false;
    }
    if (res.ok) {
      setUser(data);
      setError("");
      showToastSuccess("Logged in successfully");
      localStorage.setItem("user", JSON.stringify(data));
      return true;
    }
  };

  const handleLogout = async () => {
    try {
      setUser(null);
      localStorage.removeItem("user");
      setError("");
      showToastSuccess("Logged out successfully");
    } catch (error) {
      console.log(error);
      setError((error as ErrorMessage).message);
    }
  };

  const handleSignup = async (userData: IUserInput) => {
    const res = await fetch("http://localhost:4005/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      showToastError(data.message);
      return false;
    }
    if (res.ok) {
      setUser(data);
      setError("");
      showToastSuccess("signup successfully");
      // localStorage.setItem("user", JSON.stringify(data));
      return true;
    }
  };

  return (
    <AuthContext.Provider
      value={{ error, user, handleLogin, handleSignup, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
