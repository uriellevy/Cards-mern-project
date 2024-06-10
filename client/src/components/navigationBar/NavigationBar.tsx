import { DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react'
import { NavLink, useNavigate } from 'react-router-dom'
import classes from "./NavigationBar.module.scss";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AuthContextType } from '../../interfaces/interfaces';

const NavigationBar = () => {
    const { user, handleLogout } = useContext(AuthContext) as AuthContextType;
    const navigate = useNavigate();

    const onLogout = () => {
        handleLogout();
        navigate("/");
    }

    return (
        <Navbar fluid rounded className={`${classes.nav_container} bg-red`}>
            <Flowbite>
                <DarkThemeToggle />
            </Flowbite>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link as="span">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `${classes.nav_link} ${isActive ? classes.active : ''}`}
                    >
                        Home
                    </NavLink>
                </Navbar.Link>
                {user ?
                    <>
                        <Navbar.Link as="span">
                            <NavLink
                                to="/myCards"
                                className={({ isActive }) => `${classes.nav_link} ${isActive ? classes.active : ''}`}
                            >
                                My Cards
                            </NavLink>
                        </Navbar.Link>
                        <Navbar.Link as="span">
                            <NavLink
                                to="/addCard"
                                className={({ isActive }) => `${classes.nav_link} ${isActive ? classes.active : ''}`}
                            >
                                New Card
                            </NavLink>
                        </Navbar.Link>
                        <Navbar.Link as="span">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `${classes.nav_link} ${isActive ? classes.active : ''}`}
                                onClick={onLogout}
                            >
                                Logout
                            </NavLink>
                        </Navbar.Link>
                    </>
                    :
                    <>
                        <Navbar.Link as="span">
                            <NavLink
                                to="/login"
                                className={({ isActive }) => `${classes.nav_link} ${isActive ? classes.active : ''}`}
                            >
                                Login
                            </NavLink>
                        </Navbar.Link>
                        <Navbar.Link as="span">
                            <NavLink
                                to="/signup"
                                className={({ isActive }) => `${classes.nav_link} ${isActive ? classes.active : ''}`}
                            >
                                Signup
                            </NavLink>
                        </Navbar.Link>
                    </>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar