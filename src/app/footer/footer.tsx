"use client"

import { div } from 'framer-motion/client'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900/40">
            <footer className="bg-gray-900/60 text-white py-6 mt-10 flex flex-col items-center justify-center">
                <p className="text-sm text-center">© {new Date().getFullYear()} Millenium Toolings & Fabrication Inc. All Rights Reserved.</p>
            </footer>
        </footer>
        


    )
}

export default Footer