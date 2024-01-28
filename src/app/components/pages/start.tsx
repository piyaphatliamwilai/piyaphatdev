'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'

export default function Start() {
    const { scrollY } = useScroll()
    const [ navbarScroll, setNavbarScroll ] = useState(true)
    const [ programmingLangs, setProgrammingLangs ] = useState(false)
    const [ heroText, setHeroText ] = useState(false)
    const [ currentIndex, setCurrentIndex ] = useState(1)
    const array = [
        "makex.jpg", "sawangboriboon.jpg", "acr.jpg"
    ]

    const getPreviewFirst = () => {
        return currentIndex - 1 < 0 ? 2 : currentIndex - 1
    }

    const getPreviewLast = () => {
        return currentIndex + 1 > 2 ? 0 : currentIndex + 1
    }

    useEffect(() => {
        scrollY.on("change", (val) => {
            if (val > 20) {
                setHeroText(true)
            } else {
                setHeroText(false)
            }
            if (val > 100) {
                setProgrammingLangs(true)
            } else {
                setProgrammingLangs(false)
            }
            if (val > 50) {
                setNavbarScroll(false)
            } else {
                setNavbarScroll(true)
            }
            console.log(val)
        })
    }, [scrollY])
    return (
        <AnimatePresence>
            <div className='bg-stone-900 min-h-screen min-w-screen'>
                <div className='p-4 pr-4'>
                    <motion.div className='bg-stone-950 flex fixed top-4 backdrop-blur-sm p-4 w-[98%]' variants={
                        {
                            visible: {
                                y: 0
                            }, hidden: {
                                y: "-150%"
                            }
                        }
                    } animate={navbarScroll ? "visible" : "hidden"} transition={
                        {
                            duration: 0.5, ease: "easeInOut"
                        }
                    }>
                        <h1>piyaphat.xyz</h1>
                    </motion.div>
                </div>
                <div className='space-y-5 min-h-screen min-w-max flex flex-col justify-center items-center'>
                    <motion.h1 className='text-[150px] font-bold' variants={
                        {
                            visible: {
                                y: 0, opacity: 100
                            }, hidden: {
                                y: "110%",
                                opacity: 0
                            }
                        }
                    } animate={heroText ? "visible" : "hidden"} transition={{ease: "easeInOut"}}>HEY, I AM AUT</motion.h1>
                    <motion.h1 className='text-[150px] font-bold'>HEY, I AM AUT</motion.h1>
                    <motion.h1 className='text-[150px] font-bold' variants={
                        {
                            visible: {
                                y: 0,
                                opacity: 100
                            }, hidden: {
                                y: "-110%",
                                opacity: 0
                            }
                        }
                    } animate={heroText ? "visible" : "hidden"} transition={{ease: "easeInOut"}}>HEY, I AM AUT</motion.h1>
                </div>
                <div className='p-4 pr-4 bg-white'>
                    <motion.div className='flex flex-col space-y-6 py-8 px-[330px] w-[98%] text-wrap wrap' variants={
                        {
                            visible: {
                                x: 0,
                                opacity: 100
                            }, hidden: {
                                x: "-10%",
                                opacity: 0
                            }
                        }
                    } animate={programmingLangs ? "visible" : "hidden"} transition={
                        {
                            duration: 0.35
                        }
                    }>
                        <h1 className='text-6xl font-bold text-stone-800'>ABOUT ME</h1>
                        <h1 className='text-3xl  text-stone-800'>Hello, my name is Aut. I am currently studying computer science at Assumption College Sriracha in Thailand. I specialised in backend works but is able to do some front-end works.</h1>
                    </motion.div>
                </div>
                <div className='p-4 pr-4 bg-stone-800 text-right'>
                    <motion.div className='flex flex-col space-y-6 py-8 px-[330px] text-wrap wrap' variants={
                        {
                            visible: {
                                x: 0,
                                opacity: 100
                            }, hidden: {
                                x: "10%",
                                opacity: 0
                            }
                        }
                    } animate={programmingLangs ? "visible" : "hidden"} transition={
                        {
                            duration: 0.35
                        }
                    }>
                        <h1 className='text-6xl font-bold text-white'>TECH STACK</h1>
                        <div className='grid grid-cols-2'>
                            <h1 className='text-4xl font-bold text-white text-left'>FRONTEND</h1>
                            <h1 className='text-4xl font-bold text-white text-right'>BACKEND</h1>
                            <h1 className='text-2xl  text-stone-400 text-left'>CSS, JavaScript, TailwindCSS, Next.js, React</h1>
                            <h1 className='text-2xl  text-stone-400 text-right'>Java, Kotlin, C, Python, Lua</h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    )
}