"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingProps {
    onLoaded: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoaded }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
            onLoaded(); // Notify parent that loading is complete
        }, 1300); // Adjust delay as needed

        return () => clearTimeout(timeout); // Cleanup function
    }, [onLoaded]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <Image
                src="/HEXAGON.png"
                alt="Company Logo"
                width={200}
                height={200}
                className="animate-pulse"
                aria-hidden="true"
            />
        </div>
    );
};

export default Loading;
