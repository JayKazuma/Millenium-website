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

    const machines = [
        { name: "9 UNITS CNC VERTICAL MACHINING CENTER", image: "/M1.png" },
        { name: "1 UNIT MAZAK QT 6T QUICK TURN", image: "/M2.png" },
        { name: "2 UNITS DOOSAN LYNX 200 W/ TAIL STOCK", image: "/M3.png" },
        { name: "1 UNIT CITIZEN CINCOM 2 AXIS with back spindle", image: "/M4.png" },
        { name: "1 UNIT HANWHA TechM", image: "/M5.png" },
        { name: "2 UNITS CHMER CNC WIRE EDM", image: "/M6.png" },
        { name: "1 UNIT EDM DIE SINK", image: "/M7.png" },
        { name: "1 UNIT EDM DRILL", image: "/M8.png" },
        { name: "3 UNITS SISMA BIGSMARK 200F LASER MARKING / ENGRAVING", image: "/M9.png" },
        { name: "2 UNITS SURFACE GRINDER", image: "/M10.png" },
        { name: "1 UNIT CONVENTIONAL LATHE MACHINE", image: "/M11.png" },
        { name: "1 UNIT NABERTHERN N40 ELECTRIC FURNACE", image: "/M12.png" },
        { name: "4 UNITS RUBBER HOT PRESS MACHINE", image: "/M13.png" },
        { name: "1 UNIT HYDRAULIC GUILLOTINE SHEARING MACHINE", image: "/M14.png" },
        { name: "INSIZE PROFILE PROJECTOR", image: "/M15.png" },
    ];

    return (
        <div className="relative bg-[url('/Topview.png')] bg-cover bg-center bg-no-repeat min-h-screen h-screen overflow-hidden">
            {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
            {loaded && (
                <>
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <Header />

                        <div className="flex flex-col justify-center items-center text-center h-full px-4">
                            {/* Title Section */}
                            <div className="mt-24">
                                <h1 className="text-5xl font-bold text-white drop-shadow-md">
                                    Our <span className="text-yellow-400">Machines</span>
                                </h1>
                                
                            </div>

                            {/* Swiper Container */}
                            <div className="relative w-165 max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-0.5">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    pagination={{
                                        el: ".custom-pagination",
                                        clickable: true,
                                    }}
                                    className="w-full pb-12" 
                                >
                                    {machines.map((machine, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-col justify-center items-center">
                                                <img
                                                    src={machine.image}
                                                    alt={machine.name}
                                                    className="w-full h-[50vh] object-contain rounded-lg shadow-md"
                                                />
                                                <h3 className="text-2xl font-semibold text-white mt-4 drop-shadow-md">
                                                    {machine.name}
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* ✅ Fixed Pagination Styling */}
                                <div className="custom-pagination absolute bottom-4 w-full flex justify-center space-x-2 pb-0.5 pt-0.5"></div>

                                {/* ✅ Improved Navigation Buttons */}
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

export default Machineries;
