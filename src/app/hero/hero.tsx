"use client";

import React, { useState } from "react";
import Loading from "../loading/loading";

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <section className="relative bg-[url('/Topview.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative bg-[url('/HEXAGON.png')] bg-contain bg-center bg-no-repeat">
                {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
                {loaded && (
                    <>
                        {/* Overlay for better contrast */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Hero Content with Border */}
                        <div className="relative mx-auto max-w-screen-xl px-6 py-32 sm:px-12 lg:flex lg:h-screen lg:items-center lg:px-16">
                            <div className="max-w-2xl text-center sm:text-left border border-gray-700 rounded-lg p-6 mt-6 bg-black/40">
                                <h1 className="text-6xl font-extrabold text-white sm:text-7xl leading-tight">
                                    <span className="bg-gradient-to-r from-green-400 via-blue-500 to-red-500 bg-clip-text text-transparent">
                                        MILLENIUM
                                    </span>
                                </h1>
                                <h2 className="text-3xl font-semibold text-gray-300 mt-2">
                                    Toolings & Fabrication Inc.
                                </h2>
                                <div className="pt-5">
                                    <h3 className="text-2xl font-semibold text-white text-center">OUR VISION</h3>
                                    <p className="mt-2 text-white">
                                        To be recognized as most preferred SUPPLIER / PARTNER of our valued
                                        customers in delivering our whole range of products and services beyond our
                                        capacity.
                                    </p>

                                    <h3 className="text-2xl font-semibold text-white text-center">OUR MISSION</h3>
                                    <p className="mt-2 text-white">
                                        To satisfy our valued customer by delivering world class quality products
                                        and services at the most reasonable cost, in the most appropriate time
                                        beyond their expectations through reinforced partnership with our own
                                        suppliers and our most valuable resources - our manpower / personnel ,
                                        providing a smooth and stimulating working environment, rewarding benefits
                                        coupled with dignity,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Hero;
