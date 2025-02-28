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

    // Product data
    const products = [
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
        { name: "SEMICON MACHINE PARTS", image: "/p25.png" },
        { name: "SEMICON MACHINE PARTS", image: "/p26.png" },
        { name: "SEMICON MACHINE PARTS", image: "/p27.png" },
        { name: "SEMICON MACHINE PARTS", image: "/p28.png" },
        { name: "SEMICON MACHINE PARTS ", image: "/p29.png" },
        { name: "SEMICON MACHINE PARTS", image: "/p30.png" },
        { name: "SEMICON MACHINE PARTS", image: "/p31.png" },
        { name: "SEMICON MACHINE PARTS ", image: "/p32.png" },
        { name: "SEMICON MACHINE PARTS ", image: "/p33.png" },
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
                                    Product <span className="text-yellow-400">Samples</span>
                                </h1>
                                <p className="text-white mt-2 text-lg drop-shadow-md">
                                    High-quality precision parts designed for performance.
                                </p>
                            </div>

                            {/* Swiper Container */}
                            <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-8">
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
                                    className="w-full pb-12" // Added padding to prevent overlap
                                >
                                    {products.map((product, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-col justify-center items-center">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-[50vh] object-contain rounded-lg shadow-md"
                                                />
                                                <h3 className="text-2xl font-semibold text-white mt-4 drop-shadow-md">
                                                    {product.name}
                                                </h3>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                
                                <div className="custom-pagination absolute bottom-4 w-full flex justify-center space-x-2 pb-0.5 pt-0.5"></div>

                                
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
