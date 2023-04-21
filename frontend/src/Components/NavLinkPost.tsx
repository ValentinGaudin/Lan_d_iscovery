import React from 'react';
import {GiRoad} from "react-icons/all";
import {NavLink} from "react-router-dom";
import {Post} from "../@types/Post";
import Spinner from "./Spinner";

type Props = {
    posts: Post[];
}
const NavLinkPost = ({posts}: Props) => {
    return (
        <div>
            <ul>
                {posts.length > 0
                    ? posts.map((post) => (
                        <li
                            key={post.id}
                            className="flex items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-amber-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                        {
                            post ?
                                <NavLink
                                    to={`posts/${post.id}`}
                                >
                                    <span className="w-6 h-6 fill-current inline-block">
                                        <GiRoad color="black dark:white" size="2em"/>
                                    </span>
                                    <span className="ml-4 text-gray-800 dark:text-white hover:text-white transition duration-500">
                                        {post.title}
                                    </span>
                                </NavLink>
                                :
                                <i>
                                    Pas de post
                                </i>
                        }
                        </li>
                    ))
                    : <Spinner/>
                }
            </ul>
        </div>
    );
};

export default NavLinkPost;