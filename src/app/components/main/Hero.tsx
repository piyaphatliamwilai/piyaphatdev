'use client'
import SlideText from "../SlideText";
import Carousel from "../Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion" 
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex h-screen w-screen p-64">
            <div className="flex justify-between w-full">
                <div className="space-y-16 max-w-[720px]">
                    <div className="space-y-4">
                        <div className="flex font-sans text-5xl space-x-4">
                            <h1 className="font-medium">Hello, I am </h1>
                            <div className="hover:rotate-12 hover:scale-125 transition-all duration-500">
                                <SlideText text="Piyaphat Liamwilai." className="text-[#6EACDA]"></SlideText>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/piyaphatliamwilai">
                                <FontAwesomeIcon icon={faGithub} size="2xl"></FontAwesomeIcon>
                            </Link>
                            <Link href="https://instagram.com/autpiyaphat">
                                <FontAwesomeIcon icon={faInstagram} size="2xl"></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    <SlideText text="I am a high school student from Thailand. I am currently studying in the Computer Science program of Assumption College Sriracha. Currently, I am pursuing my studies in Robotics and AI. Additionally, I am also a contestant in the MakeX Thailand competition." className="text-3xl font-normal font-sans" delay={0.5}></SlideText>
                </div>
                <motion.img drag dragConstraints={{
                    top: -10, left: -10, right: 10, bottom: 10
                }} src="https://avatars.githubusercontent.com/u/82884260?v=4" alt="github pfp" className="rounded-md w-fit h-fit"></motion.img>
            </div>
        </div>
    );
}