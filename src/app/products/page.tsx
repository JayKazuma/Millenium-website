"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "../header/header";
import Loading from "../loading/loading";
import Footer from "../footer/footer";

const SampleProducts = () => {
    const [loaded, setLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState("product"); // Track which tab is selected

    // Product Samples Data
    const productSamples = [
        { name: "INSPECTION JIG", image: "/p1.png" },
        { name: "DEFLASH PUNCH", image: "/p2.png" },
        { name: "PRECISION & SEMI-PRECISION PARTS", image: "/p3.png" },
        { name: "CRIMPING DIE", image: "/p4.png" },
        { name: "MACHINE PARTS", image: "/p5.png" },
        { name: "CUTTER BLADES", image: "/p6.png" },
        { name: "CUT PUNCH", image: "/p7.png" },
        { name: "ANVIL & BLADES", image: "/p8.png" },
        { name: "DEFLASH CUT PUNCHES", image: "/p9.png" },
        { name: "POLYETHYLENE PLASTICS", image: "/p10.png" },
        { name: "FORMING & CUT DIES ", image: "/p11.png" },
        { name: "POLY-URETHANE PARTS ENG'G PLASTICS ", image: "/p12.png" },
        { name: "CARBIDE PUNCHES/PARTS ", image: "/p13.png" },
        { name: "CARBIDE PUNCHES/PARTS  ", image: "/p14.png" },
        { name: "MECHANICAL INSPECTION JIG  ", image: "/p15.png" },
        { name: "LEADFRAME FORMING/TRIMMING JIG ", image: "/p16.png" },
        { name: "DIE & BACKING PLATE (DIE SET PARTS)", image: "/p17.png" },
        { name: "ELECTRONICS/SEMICON TRACKS & JIGS ", image: "/p18.png" },
        { name: "ELECTRONICS/SEMICON TRACKS & JIGS ", image: "/p19.png" },
        { name: "NECKING DIE ", image: "/p20.png" },
        { name: "MACHINE PARTS ", image: "/p21.png" },
        { name: "PULLEYS ", image: "/p22.png" },
        { name: "POLISHING OF DIE ", image: "/p23.png" },
        { name: "SEMICON MACHINE PARTS ", image: "/p24.png" },
        { name: "", image: "/p25.png" },
        { name: "", image: "/p26.png" },
        { name: "", image: "/p27.png" },
        { name: "", image: "/p28.png" },
        { name: "", image: "/p29.png" },
        { name: "", image: "/p30.png" },
        { name: "", image: "/p31.png" },
        { name: "", image: "/p32.png" },
        { name: " ", image: "/p33.png" },
        { name: "", image: "/p34.png" },
        { name: "", image: "/p35.png" },
        { name: "", image: "/p36.png" },
        { name: "", image: "/p37.png" },
        { name: "", image: "/p38.png" },
        
    ];

    // Fabrication Samples Data
    const fabricationSamples = [
        { name: "", image: "/f1.png" },
        { name: "", image: "/f2.png" },
        { name: "", image: "/f3.png" },
        { name: "", image: "/f4.png" },
        { name: "", image: "/f5.png" },
        { name: "", image: "/f6.png" },
        { name: "", image: "/f7.png" },
        { name: "", image: "/f8.png" },
        { name: "", image: "/f9.png" },
        { name: "", image: "/f10.png" },
        { name: "", image: "/f11.png" },
        { name: "", image: "/f12.png" },
        { name: "", image: "/f13.png" },
        { name: "", image: "/f14.png" },
        { name: "", image: "/f15.png" },
        { name: "", image: "/f16.png" },
        { name: "", image: "/f17.png" },
        { name: "", image: "/f18.png" },
        { name: "", image: "/f19.png" },
        { name: "", image: "/f20.png" },
    ];

    const rubberSamples = [
        { name: "Silicon Rubber Fixture", image: "/r1.png" },
        { name: "Silicon Ferule Gasket", image: "/r2.png" },
        { name: "Rubber Seal & Seal Ring", image: "/r3.png" },
        { name: "Silicon Suction Cup w/ Bronze", image: "/r4.png" },
        { name: "Silicon O-Ring Rubber", image: "/r5.png" },
        { name: "Silicon Suction Cup", image: "/r6.png" },
        { name: "Silicon D-Rubber", image: "/r7.png" },
        { name: "Rubber Spacer", image: "/r8.png" },
    ];

    // Determine which set of images to display
    const samples = activeTab === "product"
        ? productSamples
        : activeTab === "fabrication"
            ? fabricationSamples
            : rubberSamples; 
 

    return (
        <div className="relative bg-[url('/Topview.png')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col">
            {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
            {loaded && (
                <>
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <Header />

                        <div className="flex flex-col items-center text-center px-4 flex-grow">
                            <h1 className="text-5xl font-bold text-white mt-20 drop-shadow-md">
                                Sample <span className="text-yellow-400">Gallery</span>
                            </h1>

                            {/* Tab Navigation */}
                            <div className="flex space-x-2 mt-0.5 bg-white/10 backdrop-blur-md p-0.5 rounded-xl shadow-lg">
                                {[
                                    { key: "product", label: "Product Samples" },
                                    { key: "fabrication", label: "Fabrication Samples" },
                                    { key: "rubber", label: "Rubber Samples" },
                                ].map(({ key, label }) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`px-6 py-2 text-lg font-semibold rounded-lg transition ${activeTab === key ? "bg-yellow-400 text-black" : "bg-white/20 text-white"
                                            }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* Swiper Container */}
                            <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl p-1 shadow-lg mt-6">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    pagination={{ el: ".custom-pagination", clickable: true }}
                                    className="w-full pb-12"
                                >
                                    {samples.map((sample, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-col justify-center items-center">
                                                <img
                                                    src={sample.image}
                                                    alt={sample.name}
                                                    className="w-full h-[50vh] object-contain rounded-lg shadow-md"
                                                />
                                                <h3 className="text-2xl font-semibold text-white mt-4 drop-shadow-md">
                                                    {sample.name}
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                
                                <div className="custom-pagination absolute bottom-0.5 w-full flex justify-center space-x-2 pb-0 pt-2"></div>

                                
                                <button className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-4 rounded-full shadow-lg hover:bg-white/60 hover:text-black transition duration-300 ease-in-out">
                                    ❮
                                </button>
                                <button className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-4 rounded-full shadow-lg hover:bg-white/60 hover:text-black transition duration-300 ease-in-out">
                                    ❯
                                </button>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
};

export default SampleProducts;
