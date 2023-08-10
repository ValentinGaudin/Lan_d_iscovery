import React from 'react';
import {NavLink} from "react-router-dom";

import {BsSignpostSplit} from "react-icons/all";

type props = {
    title: String,
    path: String
}
const NavigationLink = ({title, path}: props) => {
    return (
        <>
            <NavLink
                to={`/${path}`}
                className="flex items-center text-sm font-medium text-gray-700 py-2 px-3 hover:bg-amber-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
                <span className="w-6 h-6 fill-current inline-block">
                    <BsSignpostSplit color="black dark:white" size="2em" />
                </span>
                <span className="dark:text-white duration-500 ml-2">
                    {title}
                </span>
            </NavLink>
        </>
    );
};

export default NavigationLink;