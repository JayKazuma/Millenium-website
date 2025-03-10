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

const Machineries = () => {
    const [loaded, setLoaded] = useState(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
 // State for zoomed image

    const machines = [
        { name: "", image: "/g1.gif" },
        { name: "", image: "/m1.jpg" },
        { name: "", image: "/m2.jpg" },
        { name: "", image: "/m3.jpg" },
        { name: "", image: "/m4.jpg" },
        { name: "", image: "/m5.jpg" },
        { name: "", image: "/m6.jpg" },
        { name: "", image: "/m8.jpg" },
        { name: "", image: "/m7.jpg" },
        { name: "", image: "/g2.gif" },
        { name: "", image: "/g3.gif" },
        { name: "", image: "/m9.jpg" },
        { name: "", image: "/m10.jpg" },
        { name: "", image: "/m11.jpg" },
        { name: "", image: "/m12.jpg" },
        { name: "", image: "/m13.jpg" },
        { name: "", image: "/m14.jpg" },
        { name: "", image: "/m15.jpg" },
        { name: "", image: "/m16.jpg" },
        { name: "", image: "/m17.jpg" },
        { name: "", image: "/m18.jpg" },
        { name: "", image: "/m19.jpg" },
        { name: "", image: "/m20.jpg" },
        { name: "", image: "/m21.jpg" },
        { name: "", image: "/m22.jpg" },
        { name: "", image: "/m23.jpg" },
        { name: "", image: "/m24.jpg" },
        { name: "", image: "/m25.jpg" },
        { name: "", image: "/m26.jpg" },
        { name: "", image: "/m27.jpg" },
        { name: "", image: "/m28.jpg" },
        { name: "", image: "/m29.jpg" },
        { name: "", image: "/m30.jpg" },
        { name: "", image: "/m31.jpg" },
        { name: "", image: "/m32.jpg" },
        { name: "", image: "/m33.jpg" },
        { name: "", image: "/m34.jpg" },
    ];

    return (
        <div className="relative bg-[url('/mtfsibackdrop.jpg')] bg-cover bg-center bg-no-repeat min-h-screen overflow-hidden">
            {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
            {loaded && (
                <>
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative z-10 flex flex-col justify-between min-h-screen">
                        <Header />

                        <div className="flex flex-col justify-center items-center text-center h-full px-4">
                            <div className="mt-24">
                                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                                    Our <span className="text-yellow-400">Machines</span>
                                </h1>
                            </div>

                            
                            <div className="relative w-full max-w-5xl md:w-165 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-0.5">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    className="w-full pb-12"
                                    loop={true}
                                >
                                    {machines.map((machine, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-col justify-center items-center">
                                                
                                                <img
                                                    src={machine.image}
                                                    alt={machine.name}
                                                    className="w-full max-w-[90%] h-auto md:h-[50vh] object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                                                    onClick={() => setZoomedImage(machine.image)}
                                                />
                                                <h3 className="text-lg md:text-2xl font-semibold text-white mt-4 drop-shadow-md">
                                                    {machine.name}
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="custom-pagination absolute bottom-0.5 w-full flex justify-center space-x-2 pb-0 pt-2"></div>

                                
                            </div>
                        </div>

                        <Footer />
                    </div>
                </>
            )}

            
            {zoomedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setZoomedImage(null)} 
                >
                    <img
                        src={zoomedImage}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </div>
    );
};

export default Machineries;
