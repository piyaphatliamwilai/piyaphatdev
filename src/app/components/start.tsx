'use client'
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
export default function StartPage() {
    return (
        <AnimatePresence>
            <motion.div className="flex min-h-screen min-w-screen" initial={"hidden"} animate={"visible"}>
                <motion.div className="min-h-screen w-[100%] space-y-5 bg-gradient-to-tr from-blue-700 to-pink-700" variants={{
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1
                    }
                }} transition={{
                    duration: 2
                }}>
                    <motion.h1 className="font-bold text-9xl h-max w-max" variants={{
                        hidden: {
                            x: -1000,
                            y: 72
                        },
                        visible: {
                            x: 72,
                            y: 72
                        }
                    }} transition={{
                        delay: 2.5,
                        duration: 1
                    }}>
                        STRIVE
                    </motion.h1>
                    <motion.h1 className="font-bold text-9xl h-max w-max" variants={{
                        hidden: {
                            x: -1000,
                            y: 72
                        },
                        visible: {
                            x: 72,
                            y: 72
                        }
                    }} transition={{
                        delay: 3,
                        duration: 1
                    }}>
                        TO
                    </motion.h1>
                    <motion.h1 className="font-bold text-9xl h-max w-max" variants={{
                        hidden: {
                            x: -1000,
                            y: 72
                        },
                        visible: {
                            x: 72,
                            y: 72
                        }
                    }} transition={{
                        delay: 3.5,
                        duration: 1
                    }}>
                        BE
                    </motion.h1>
                    <motion.h1 className="font-bold text-9xl h-max w-max" variants={{
                        hidden: {
                            x: -1000,
                            y: 72
                        },
                        visible: {
                            x: 72,
                            y: 72
                        }
                    }} transition={{
                        delay: 4,
                        duration: 1
                    }}>
                        BETTER
                    </motion.h1>
                    <motion.h1 className="font-bold text-3xl h-max w-max" variants={{
                        hidden: {
                            x: -1000,
                            y: 72
                        },
                        visible: {
                            x: 72,
                            y: 90
                        }
                    }} transition={{
                        delay: 4.5,
                        duration: 1
                    }}>
                        Piyaphat Liamwilai
                    </motion.h1>
                    <motion.div className="h-max w-max px-[72] py-[90] text-2xl space-y-3" variants={{
                        hidden: {
                            x: -1000,
                            y: 72
                        },
                        visible: {
                            x: 72,
                            y: 90
                        }
                    }} transition={{
                        delay: 5.5,
                        duration: 1
                    }}>
                        <div className="flex space-x-5">
                            <Link href="/projects">
                                <h1 className="hover:text-3xl">projects</h1>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}