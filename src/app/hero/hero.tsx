"use client";


import Head from "next/head";
import React, { useState } from "react";
import Loading from "../loading/loading";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Get current route

    return (
        <>
            <Head>
                <title>Millenium Toolings and Fabrication Inc.</title>
                <meta name="description" content="Millenium Toolings provides top-quality engineering tools for professionals." />
                <meta name="keywords" content="Millenium Toolings, engineering tools, fabrication, supplier, manufacturing, millenium toolings and fabrication, millenium location, millenium website, millenium toolings.com, Millenium Toolings and Fabrication Services Inc., Millenium Toolings & Fabrication Inc." />
                <meta name="author" content="Millenium Toolings and Fabrication Inc." />
                <meta name="application-name" content="Millenium Toolings & Fabrication Services Inc." />
                <meta property="og:title" content="Millenium Toolings and Fabrication Inc." />
                <meta property="og:description" content="Millenium Toolings provides high-quality engineering tools and fabrication services." />
                <meta property="og:image" content="/Topview.png" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" content="https://milleniumtoolings.vercel.app" />
            </Head>
            <section className="relative flex flex-col min-h-screen bg-[url('/mtfsibackdrop.jpg')] bg-cover bg-center bg-no-repeat w-full overflow-hidden">
                <div className="relative flex-grow bg-contain bg-center bg-no-repeat w-full">
                    {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
                    {loaded && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

                            <div className="relative mx-auto w-full px-6 py-32 sm:px-12 flex flex-col lg:justify-center lg:flex-grow lg:px-16">
                                <div className="max-w-2xl text-center sm:text-left border border-gray-700 rounded-lg p-6 bg-black/40">
                                    <div className="relative">
                                        <img
                                            src="HEXAGON.png"
                                            alt="Millenium Logo"
                                            className="absolute top-0 right-0 w-32 h-auto hidden sm:block"
                                        />
                                    </div>
                                    <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight text-center sm:text-left break-words w-full">
                                        <span className="bg-gradient-to-r from-green-500 via-blue-500 to-red-500 bg-clip-text text-transparent inline-block w-full">
                                            MILLENIUM
                                        </span>
                                    </h1>


                                    <h2 className="text-3xl font-semibold text-gray-300 mt-2">
                                        Toolings & Fabrication Inc.
                                    </h2>

                                    <div className="pt-5">
                                        <h3 className="text-2xl font-semibold text-white text-center">OUR VISION</h3>
                                        <p className="mt-2 text-white">
                                            To be recognized as the most preferred SUPPLIER / PARTNER of our valued
                                            customers in delivering our whole range of products and services beyond our
                                            capacity.
                                        </p>

                                        <h3 className="text-2xl font-semibold text-white text-center">OUR MISSION</h3>
                                        <p className="mt-2 text-white">
                                            To satisfy our valued customers by delivering world-class quality products
                                            and services at the most reasonable cost, in the most appropriate time,
                                            beyond their expectations through reinforced partnership with our own
                                            suppliers and our most valuable resources - our manpower / personnel,
                                            providing a smooth and stimulating working environment with rewarding
                                            benefits coupled with dignity.
                                        </p>

                                        <button
                                            className="md:hidden bg-gradient-to-r from-green-800/40 via-blue-600/80 to-red-700/40 px-4 py-2 mt-4 rounded text-white w-full transition duration-100 hover:bg-blue-500/80 hover:shadow-lg animate-pulse"
                                            onClick={() => setIsMenuOpen(true)}
                                        >
                                            Learn More
                                        </button>


                                        <AnimatePresence>
                                            {isMenuOpen && (
                                                <motion.div
                                                    className="fixed inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white z-50"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    <button
                                                        className="absolute top-6 right-6 text-white text-3xl"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        &times;
                                                    </button>
                                                    <nav className="space-y-6 text-2xl font-medium text-center">
                                                        {[
                                                            { name: "Home", href: "/" },
                                                            { name: "Products", href: "/products" },
                                                            { name: "Machineries", href: "/machineries" },
                                                            { name: "History", href: "/history" },
                                                            { name: "Contact Us", href: "/contactus" },
                                                        ].map((link) => (
                                                            <Link
                                                                key={link.href}
                                                                href={link.href}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className={`block hover:text-gray-400 ${pathname === link.href ? "underline underline-offset-8" : ""
                                                                    }`}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        ))}


                                                        <a
                                                            href="https://maps.app.goo.gl/tgkNZQLVrRqGjPav5"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block hover:text-gray-400"
                                                        >
                                                            Find Us
                                                        </a>
                                                    </nav>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>


            </section>

        </>
    );
};

export default Hero;
