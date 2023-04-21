import React, {useEffect, useState} from 'react';
import homeVideo from "../../Assets/Videos/home.mp4";
import ReactPlayer  from "react-player";
import HomeVideo from "./HomeVideo";
import WhoIAm from "./WhoIAm";

const Home = () => {

    return (
        <>
            <div className="relative">
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                    <h2 className="text-4xl">The First Title</h2>
                    <HomeVideo />
                    <p>Scroll Down</p>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center text-white">
                    <h2 className="text-4xl">The Second Title</h2>
                    <WhoIAm />
                    <p>Scroll Down</p>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center text-white">
                    <h2 className="text-4xl">The Third Title</h2>
                    <p>Scroll Down</p>
                </div>
                <div
                    className="sticky top-0 h-screen flex flex-col items-center justify-center text-white">
                    <h2 className="text-4xl">The Fourth Title</h2>
                </div>
            </div>
        </>
    );
};

export default Home;