import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import ErrorPage from "../pages/Error/ErrorPage";
import Category from "../pages/Category/Category";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";

export const router =createBrowserRouter(
    [
        {
            path:'/',
            Component:HomeLayout,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    index:true,path:'/',Component:Home
                },
                {
                    path:'/about',Component:About
                },
                {
                    path:'/career',Component:Career
                },
                {
                    hydrateFallbackElement:<Loading></Loading>,
                    path:'/category/:id',
                    Component:Category,
                    loader:()=>fetch("../news.json")
                }
            ]
        },
        {
            path:'/auth',
            Component:AuthLayout,
            children:[
                {
                    path:'/auth/login',
                    Component:Login
                },
                {
                    path:'/auth/register',
                    Component:Register
                }
            ]
            
        },
        {
            path:'/news-details/:id',
            element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            hydrateFallbackElement:<Loading></Loading>,
            loader:()=>fetch('/news.json')
        }
    ]
)