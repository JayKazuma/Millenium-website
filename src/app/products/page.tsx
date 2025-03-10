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
    const [activeTab, setActiveTab] = useState("product"); 
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

   
    const productSamples = [
        { name: "", image: "/p1.jfif" },
        { name: " ", image: "/p2.jfif" },
        { name: " ", image: "/p3.jfif" },
        { name: " ", image: "/p4.jfif" },
        { name: " ", image: "/p5.jfif" },
        { name: " ", image: "/p6.jfif" },
        { name: " ", image: "/p7.jfif" },
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
        { name: "", image: "/p37.jfif" },
        { name: "", image: "/p38.jfif" },

    ];

   
    const fabricationSamples = [
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
        { name: "", image: "/f21.png" },
        { name: "", image: "/f22.png" },
        { name: "", image: "/f23.png" },
        { name: "", image: "/f24.png" },
        { name: "", image: "/f25.png" },
        { name: "", image: "/f26.png" },
        { name: "", image: "/f27.png" },
        { name: "", image: "/f28.png" },
        { name: "", image: "/f29.png" },
        { name: "", image: "/f30.png" },

    ];

    const rubberSamples = [
        { name: "", image: "/r1.jpg" },
        { name: "", image: "/r2.jpg" },
        { name: "", image: "/r3.jpg" },
        { name: "", image: "/r4.png" },
        { name: "", image: "/r5.jpg" },
        { name: "", image: "/r6.png" },
        { name: "", image: "/r7.jpg" },
        { name: "", image: "/r8.jpg" },
    ];

    
    const civilServices = [
        { name: "", image: "/c1.png" },
        { name: "", image: "/c2.png" },
        { name: "", image: "/c3.png" },
        { name: "", image: "/c4.png" },
        { name: "", image: "/c5.png" },
        { name: "", image: "/c6.png" },
        { name: "", image: "/c7.png" },
        { name: "", image: "/c8.png" },
        { name: "", image: "/c9.png" },
        { name: "", image: "/c10.png" },
        { name: "", image: "/c11.png" },
        { name: "", image: "/c12.png" },
        { name: "", image: "/c13.png" },
        { name: "", image: "/c14.png" },
        { name: "", image: "/c15.png" },
        { name: "", image: "/c16.png" },
        { name: "", image: "/c17.png" },
        { name: "", image: "/c18.png" },
        { name: "", image: "/c19.png" },
        { name: "", image: "/c20.png" },
        { name: "", image: "/c21.png" },
        { name: "", image: "/c22.png" },
        { name: "", image: "/c23.png" },
        { name: "", image: "/c24.png" },
        { name: "", image: "/c25.png" },
        { name: "", image: "/c26.png" },
        { name: "", image: "/c27.png" },
        { name: "", image: "/c28.png" },
        { name: "", image: "/c29.png" },
    ];

  
    const samples = activeTab === "product"
        ? productSamples
        : activeTab === "fabrication"
            ? fabricationSamples
            : activeTab === "rubber"
            ? rubberSamples
            : activeTab === "civil"
            ? civilServices
            : [];


    return (
        <div className="relative bg-[url('/mtfsibackdrop.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col overflow-hidden">
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

                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 p-2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
                                {[
                                    { key: "product", label: "Product Samples" },
                                    { key: "fabrication", label: "Fabrication/Facilities" },
                                    { key: "rubber", label: "Rubber Samples" },
                                    { key: "civil", label: "Civil/Construction Services" },
                                ].map(({ key, label }) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`w-full sm:w-auto px-4 py-2 text-sm sm:text-lg font-semibold rounded-lg transition ${activeTab === key ? "bg-yellow-400 text-black" : "bg-white/20 text-white"
                                            }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            
                            <div className="relative w-full max-w-5xl md:w-165 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-0.5">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    className="w-full pb-12"
                                    loop={true}
                                >
                                    {samples.map((sample, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-col justify-center items-center">
                                                <img
                                                    src={sample.image}
                                                    alt={sample.name}
                                                    className="w-full max-w-[90%] h-auto md:h-[50vh] object-contain rounded-lg shadow-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                                                    onClick={() => setZoomedImage(sample.image)}
                                                />
                                                <h3 className="text-2xl font-semibold text-white mt-4 drop-shadow-md">
                                                    {sample.name}
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

export default SampleProducts;
