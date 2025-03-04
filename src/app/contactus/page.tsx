"use client";

import React, { useState } from "react";
import Header from "../header/header";
import Loading from "../loading/loading";
import Footer from "../footer/footer";

interface ContactItemProps {
    href: string;
    label: string;
    iconPath: string;
}

const contactItems: ContactItemProps[] = [
    {
        href: "https://www.facebook.com/milleniumtoolings",
        label: "Our Facebook Page",
        iconPath: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
        href: "mailto: milleniumtoolings@gmail.com",
        label: "Click to Email Us",
        iconPath: "M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v16h16V4H4zm8 7.5L4 6h16l-8 5.5z",
    },
    {
        href: "tel:(049)536-4886 ",
        label: "Click to Call Us",
        iconPath: "M6.6 2a2 2 0 00-2 2c0 10.493 8.507 19 19 19a2 2 0 002-2v-3.6a2 2 0 00-1.85-2c-1.343-.098-2.84-.472-3.75-1.38-.907-.907-1.28-2.407-1.38-3.75a2 2 0 00-2-1.85H10a2 2 0 00-2 2v2c0 .552-.448 1-1 1H6a2 2 0 01-2-2V4a2 2 0 012-2h.6z",
    },
    {
        href: "fax:+63495364886",
        label: "Send a Fax",
        iconPath: "M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V6l-4-4H6zm10 2l2 2h-2V4zm-4 14h-4v-2h4v2zm2 0v-2h4v2h-4zM6 12h12v2H6v-2zm0-4h12v2H6V8z",
    },
];

const ContactItem: React.FC<ContactItemProps> = ({ href, label, iconPath }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center text-gray-100 hover:text-green-400 transition p-4 bg-white/10 rounded-lg shadow-md hover:bg-white/20 w-28 sm:w-36 h-28 sm:h-36"
    >
        <svg className="w-10 h-10 sm:w-12 sm:h-12 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
        </svg>
        <span className="text-sm sm:text-base text-center font-medium">{label}</span>
    </a>
);

const ContactUs: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <div className="absolute top-0 w-full z-50">
                <Header />
            </div>
            <div className="relative flex-grow bg-[url('/Topview.png')] bg-cover bg-center bg-no-repeat w-full h-screen">
            {!loaded && <Loading onLoaded={() => setLoaded(true)} />}
            {loaded && (
                <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-[url('/HEXAGON.png')] bg-contain bg-center bg-no-repeat">
                    
                    <div className="absolute inset-0 bg-black/75"></div>
                    <div className="relative flex flex-col items-center">
                        <h1 className="text-5xl font-bold text-green-500 sm:text-6xl">
                            Contact <span className="text-red-500">Us!</span>
                        </h1>
                        <p className="mt-3 text-xl sm:text-2xl text-gray-300">
                            Millenium Toolings & Fabrication Inc.
                        </p>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                        {contactItems.map((item, index) => (
                            <ContactItem key={index} {...item} />
                        ))}
                    </div>
                </section>
            )}
            </div>
        </div>
    );
};

export default ContactUs;
