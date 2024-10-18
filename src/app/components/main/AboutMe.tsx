'use client'
import React from 'react';
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import SlideText from '../SlideText';
import Card from '../Card';
import act from '../../images/act.jpg'
import hackathon from '../../images/hackathon.jpg'
import makex from '../../images/makex.jpg'
import InfiniteScrollingCarousel from '../InfiniteScrollingCarousel';
import InfiniteScrollingManga from '../InfiniteScrollingManga';


const AboutMe: React.FC = () => {

    let texts = [ "ABOUT ME", "AWARDS" ]

    let songs = [ 
        { picture: "https://i.scdn.co/image/ab67616d0000b273c9e725e1cf08de47e16c6f4b", author: "Paradox", song: "คนบนฟ้า" },
        { picture: "https://i.scdn.co/image/ab67616d0000b2733a0017ae34f20d6224cdc62b", author: "Bodyslam", song: "วิชาตัวเบา" },
        { picture: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/de/b3/66/deb36678-8225-a554-d122-e05e11cb1524/888332289160.jpg/1200x1200bb.jpg", author: "Cocktail", song: "ความทรงจำในค่ำฤดูร้อน" },
        { picture: "https://i.redd.it/ztdel7mvtzsa1.jpg", author: "The Strokes", song: "The Adults Are Talking" },
        { picture: "https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc", author: "Clairo", song: "Sofia" }
    ]

    let mangas = [
        { picture: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg/220px-Kaguya-sama_-_Love_is_War%2C_volume_1.jpg", author: "Aka Akasaka", mangaName: "Kaguya-sama: Love is War"},
        { picture: "https://jumpg-assets.tokyo-cdn.com/secure/title/300006/title_thumbnail_portrait_list/311608.jpg?hash=Bl2ThzruMYX6k3VC7bgWfg&expires=2145884400", author: "Aka Akasaka", mangaName: "Oshi no Ko"},
        { picture: "https://pictures.abebooks.com/isbn/9784048662529-us.jpg", author: "Aka Akasaka", mangaName: "Instant Bullet"},
        { picture: "https://upload.wikimedia.org/wikipedia/en/d/de/Your_Lie_in_April_Manga_cover.png", author: "Naoshi Arakawa", mangaName: "Your Lie in April"},
        { picture: "https://m.media-amazon.com/images/I/71hsNIpmdZL._AC_UF1000,1000_QL80_.jpg", author: "HERO, Hagiwara Daisuke", mangaName: "Horimiya"},
    ]

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
                    <aside className='space-y-8 border-b-2 border-white pb-8'>
                        <SlideText className="font-sans text-5xl font-medium" text="My name is Aut. I am an amateur programmer, a manga addict and a computer science student from Thailand."></SlideText>
                        <SlideText className="font-sans font-medium text-5xl" text="I'm currently pursuing Robotics and AI as my main studies, but I am interested in various fields such as web development, game development and just passion projects!"></SlideText>
                        <h1 className="font-sans text-3xl font-light">Here are some of my favourite songs!</h1>
                        <InfiniteScrollingCarousel items={songs}></InfiniteScrollingCarousel>
                        <h1 className="font-sans text-3xl font-light">Here are also some of my favourite mangas!</h1>
                        <InfiniteScrollingManga items={mangas}></InfiniteScrollingManga>
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