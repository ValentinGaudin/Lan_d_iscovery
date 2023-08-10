import ErrorPage from "../Components/ErrorPage";
import React from "react";
import {
    createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from "react-router-dom";
import Rooter, {rooterLoader} from "./Rooter";
import Show from "../Components/Posts/Show";
import Posts from "../Components/Posts/Posts";
import Home from "../Components/Home/Home";
import WhoIAm from "../Components/Home/WhoIAm";
import Road from "../Components/Road";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Rooter />} loader={rooterLoader} errorElement={<ErrorPage />}>
            <Route element={<Home/>} path={'/'}/>
            <Route element={<Posts />} path='/posts' />
            <Route element={<WhoIAm/>} path={'/whoiam'} />
            <Route element={<Road/>} path={"/road"} />
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