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
                    hydrateFallbackElement:<p>news data loading...</p>,
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
            Component:NewsDetails,
            loader:()=>fetch('/news.json')
        }
    ]
)