"use client";

import React, { useState } from "react";
import Header from "../header/header";
import Loading from "../loading/loading";
import Footer from "../footer/footer";

const History = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
            {loaded && (
                <>
                    <Header />
                    <section className="relative bg-[url('/Topview.png')] bg-cover bg-center bg-no-repeat">
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative flex flex-col items-center justify-center h-screen text-center text-white px-6">
                            <h1 className="text-5xl font-extrabold text-green-500 sm:text-6xl">
                                Our <span className="text-red-500">History</span>
                            </h1>
                            <h1 className="mt-4 max-w-10x5 text-2xl sm:text-4xl">
                                A journey of excellence and innovation, shaping industries and creating a lasting impact.
                            </h1>

                        </div>
                    </section>
                    <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl text-center">
                                Our Journey Through Time
                            </h2>
                            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
                            <div className="mt-10 space-y-8">
                                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500">
                                    <h3 className="text-2xl font-semibold text-gray-700">Started in January 15, 2008</h3>
                                    <p className="mt-2 text-gray-600">
                                        In Mabuhay, Cabuyao, Laguna with a plant
                                        area of 80 sq. meter (residential type) with not more than 10 employees. The
                                        company started with only two (2) machines. 

                                        Due to additional machines, and operators, the plant was transferred to Real,
                                        Calamba City, Laguna in 2012 with plant area 360 sq.meter. Total number of
                                        employees are 50 and total no. of machines are 20. 
                                    </p>
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
                                    <h3 className="text-2xl font-semibold text-gray-700">Expansion & Growth</h3>
                                    <p className="mt-2 text-gray-600">
                                        Additional machines means additional manpower and additional clients made
                                        its relocation to Hi-lon, Bgy. Paciano, Calamba City, Laguna sometime in 2nd
                                        quarter 2013 with plant area of 1000 sq. meter area. No of machines, 30 and
                                        total number of employees, 80. Due to high demand of products, the plant needs additional area for proper
                                        machine lay-out and space for stocks. With the same location at Hi-lon,
                                        Paciano, Calamba City, Laguna but this time; plant area from 1000 sq.meters
                                        expanded to 2,200 sq.meters. No. of machines, aside from existing, there is an
                                        additional 3 units conventional machines and 2 units CNC Milling (March
                                        2016). <br/>
                                        Applied as corporation November 20, 2017 from Millenium Toolings &
                                        Fabrication Services to Millenium Toolings and Fabrication Services Inc. By 2019, MTFSI has been catering and accepting inquiries and works
                                        from various clients/companies of CIVIL WORKS, CONSTRUCTION
                                        and FACILITY WORKS. Please check image from this profile of some
                                        of our accomplishments done from our contracts awarded to MTFSI. 
                                    </p>
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
                                    <h3 className="text-2xl font-semibold text-gray-700">Present</h3>
                                    <p className="mt-2 text-gray-600">
                                        At present a total of forty seven (47) machineries and is engaged in CNC ma
                                        production items, precision jigs and fixture, tools and dies, machine parts and
                                        moulds as major products. 
                                    </p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </section>
                    <section className="py-16 bg-white px-6 sm:px-12 lg:px-20">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl text-center">
                                Meet Our Pioneers
                            </h2>
                            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="text-center">
                                    <img src="/pawel-rafael.jpg" alt="Founder 1" className="w-48 h-48 object-cover mx-auto rounded-full shadow-lg" />
                                    <h3 className="mt-4 text-xl font-semibold text-gray-700">PAWEL RAFAEL</h3>
                                    <p className="text-gray-500">President</p>
                                </div>
                                <div className="text-center">
                                    <img src="/erenio-wance.jpg" alt="Founder 2" className="w-48 h-48 object-cover mx-auto rounded-full shadow-lg" />
                                    <h3 className="mt-4 text-xl font-semibold text-gray-700">ERENIO WANCE</h3>
                                    <p className="text-gray-500">Operations Manager</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default History;
