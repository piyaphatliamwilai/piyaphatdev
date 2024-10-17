'use client'
import React from 'react';
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import SlideText from '../SlideText';
import Card from '../Card';
import act from '../../images/act.jpg'
import hackathon from '../../images/hackathon.jpg'
import makex from '../../images/makex.jpg'

const AboutMe: React.FC = () => {

    let texts = [ "ABOUT ME", "AWARDS" ]

    const [ currentText, setCurrentText ] = useState("ABOUT ME")
    const { scrollY } = useScroll() 

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 2000) {
            setCurrentText(texts[1])
        } else {
            setCurrentText(texts[0])
        }
    });

    return (
        <div className="min-h-[140vh] min-w-screen bg-zinc-950 rounded-[64px] border-white border-t-4 border-opacity-20 px-64 pt-64 pb-8"> 
            <div className="grid h-full grid-cols-2 gap-8">
                <div className="relative">
                    <motion.h1 
                        key={currentText}
                        className="sticky top-16 text-9xl font-sans font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {currentText}
                    </motion.h1>
                </div>
                <div className="space-y-16">
                    <aside className='space-y-16 border-b-2 border-white pb-32'>
                        <SlideText className="font-sans text-5xl font-medium" text="My name is Aut. I am an amateur programmer, a manga addict and a computer science student from Thailand."></SlideText>
                        <SlideText className="font-sans font-medium text-5xl" text="I'm currently pursuing Robotics and AI as my main studies, but I am interested in various fields such as web development, game development and just passion projects!"></SlideText>
                    </aside>
                    <aside className='space-y-16 border-b-2 border-white pb-8'>
                        <Card imageUrl={act.src} competitionName={'ACT MakeX Warmup 2024'} placement={'1st Place'}></Card>
                        <Card imageUrl={makex.src} competitionName={'MakeX Challenger 2023'} placement={'2nd Place'}></Card>
                        <Card imageUrl={hackathon.src} competitionName={'Arduino IOT Hackathon 2024'} placement={'Honourable - 1st Place'}></Card>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;