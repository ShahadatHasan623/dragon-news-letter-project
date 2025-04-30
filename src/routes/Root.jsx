import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import ErrorPage from "../pages/Error/ErrorPage";
import Category from "../pages/Category/Category";

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
                    path:'/category/:id',
                    Component:Category
                }
            ]
        }
    ]
)