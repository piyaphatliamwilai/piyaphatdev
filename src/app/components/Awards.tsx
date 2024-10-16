"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hackathon from '../img/hackathon.jpg';
import act from '../img/act.jpg';
import makex from '../img/makex.jpg';

export default function Awards() {
    const [index, setIndex] = useState(0);

    const backgroundImages = [
        hackathon, act, makex
    ];

    const text = [
        "Arduino IOT Hackathon 2024", 
        "ACT MakeX Warmup 2024", 
        "MakeX Challenger 2023"
    ];

    const secondaryText = [
        "Honourable 1st Place", "1st Place", "2nd Place"
    ]

    const changeBackground = () => {
        const nextIndex = (index + 1) % backgroundImages.length; // Loop through images
        setIndex(nextIndex);
    };

    useEffect(() => {
        const backgroundInterval = setInterval(changeBackground, 4000);
        return () => {
            clearInterval(backgroundInterval);
        };
    }, [index]);

    return (
        <div className="flex-col w-full min-h-[400px] space-y-8">
            <motion.div 
                key={index} // Use the index as the key for better transition handling
                transition={{ duration: 1 }} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                style={{
                    backgroundImage: `url(${backgroundImages[index].src})`, // Use the image directly
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                }} 
                className="min-w-full h-[400px] rounded-lg backdrop-blur-lg shadow-md shadow-white"
            />
            <h1 className="text-4xl font-sans font-bold">
                {text[index]}
            </h1>
            <h1 className="text-3xl font-sans">
                {secondaryText[index]}
            </h1>
        </div>
    );
}
