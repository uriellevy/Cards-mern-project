import { Button, Label, TextInput, Flowbite } from 'flowbite-react';
import { Blockquote } from "flowbite-react";
import { Consts } from '../../consts/Consts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContextType, IAuth } from '../../interfaces/interfaces';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { register, handleSubmit/* , formState: { errors } */ } = useForm<IAuth>();
  const { handleLogin } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAuth> = async (data) => {
    const isSuccess = await handleLogin(data);
    if(isSuccess) navigate("/");
  };

  return (
    <Flowbite>
      <div className="flex items-center justify-center ">
        <div className=" p-4 border rounded-lg shadow-md max-w-xl w-full">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Blockquote className="text-2xl font-bold py-3 border-b border-gray-500 mb-2">{Consts.LOGIN_HEADER}</Blockquote>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="text"
                placeholder="Email..."
                required
                className="mt-1 block w-full"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="text"
                placeholder="Password..."
                required={false}
                className="mt-1 mb-2 block w-full"
                {...register("password", { required: "Middle Name is required" })}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </Flowbite>
  )
}

export default LoginPage