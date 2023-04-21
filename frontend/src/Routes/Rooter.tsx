import {Outlet} from "react-router-dom";
import {Post} from "../@types/Post";
import React, {useState} from "react";
import {useUserContext} from "../Provider/AuthProvider";
import HomeForm from '../Components/Form/HomeForm';
import {fetchPosts} from "../Api/Posts/Posts";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export const rooterLoader = async (): Promise<{ posts: Post[] }> => {
    const posts = await fetchPosts();
    return { posts };
}

const Rooter = () => {

    const sideNavToggle = () => {
        const sidebar = document.getElementById('sidebar');
        const view = document.getElementById('view');
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const detail = document.getElementById('detail');

        view?.classList.add('duration-300')
        sidebarToggle?.classList.toggle('duration-300')

        if (sidebar && view && sidebarToggle && detail) {
            sidebar.classList.toggle('block');
            sidebar.classList.toggle('hidden');
            sidebarToggle.classList.toggle('translate-x-1/2');
        }
    }


    return (
        <>
            <section id="page" className="flex flex-col">
                <section className="flex justify-center items-center mx-auto w-full">
                    {/*<button
                        id="sidebar-toggle"
                        onClick={sideNavToggle}
                        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-amber-500 focus:outline-none focus:text-white absolute top-1/2 left-50 -translate-x-1/2 block md:hidden z-50 transition-transform duration-300 ease-in-out"
                    >
                        <svg
                            className="w-5 h-5 fill-current"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>*/}
                    <section
                        className="min-w-2/12 min-h-screen md:block hidden px-3 min-w-fit overflow-x-hidden transition-transform duration-300 ease-in-out z-20"
                        data-show="sidenav"
                        id="nav"
                    >
                        <Nav />
                    </section>

                    <section
                        id="detail"
                        className="container justify-center items-center mx-auto transition-transform duration-300 ease-in-out"
                    >
                        <Outlet/>
                    </section>
                </section>
                {/*<Footer />*/}
            </section>

        </>
    );
}

export default Rooter;