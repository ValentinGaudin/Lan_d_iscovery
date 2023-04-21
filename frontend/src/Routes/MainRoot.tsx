import ErrorPage from "../Components/ErrorPage";
import React from "react";
import {
    createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider
} from "react-router-dom";
import Rooter, {rooterLoader} from "./Rooter";
import Show from "../Components/Posts/Show";
import Projects from "../Components/Posts/Posts";
import Home from "../Components/Home/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Rooter />} loader={rooterLoader} errorElement={<ErrorPage />}>
            <Route element={<Home/>} path={'/'}/>
            <Route element={<Projects />} path='/posts' />
            <Route element={<Show />} path='posts/:postId' />
        </Route>
    )
)
const MainRoot = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default MainRoot;