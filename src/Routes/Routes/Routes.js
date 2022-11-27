import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoute from "../Admin/AdminRoute";
import BuyerRoute from "../Buyer/BuyerRoute";
import SellerRoute from "../Seller/SellerRoute";

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
        element: <Dashboard></Dashboard>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
        ]
    }
])