"use client"

import React from "react";
import Loading from "../loading/loading";
import { useState } from "react";
import Footer from "../footer/footer";
const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    return (

        <section className="relative bg-[url('/Topview.png')] bg-cover bg-center bg-no-repeat">
            {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
            {loaded && (
                <>
                    {/* Overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Hero Content */}
                    <div className="relative mx-auto max-w-screen-xl px-6 py-32 sm:px-12 lg:flex lg:h-screen lg:items-center lg:px-16">
                        <div className="max-w-2xl text-center sm:text-left">

                            <h1 className="text-6xl font-extrabold text-white sm:text-7xl leading-tight">
                                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
                                    MILLENIUM
                                </span>
                            </h1>

                            <h2 className="text-3xl font-semibold text-gray-300 mt-2">
                                Toolings & Fabrication Inc.
                            </h2>


                            <p className="mt-6 text-lg text-gray-200 sm:text-xl leading-relaxed">
                                Delivering precision engineering & top-tier fabrication solutions to
                                industries. Innovation meets craftsmanship.
                            </p>
                            <div className="flex items-center">
                                <a className="flex flex-col">
                                    <span className="sr-only">Home</span>
                                    <img src="/HEXAGON.png" alt="Millenium Logo" className="h-45 opacity-60 flex" />
                                </a>
                            </div>

                        </div>
                        
                    </div>
                </>
            )}
            
        </section>


    );
};

export default Hero;
