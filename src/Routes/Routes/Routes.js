import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])