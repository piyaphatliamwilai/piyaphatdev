'use client'
import { AnimatePresence, motion } from "framer-motion"

export default function Hero() {
    return (
        <div className="py-10">
            <AnimatePresence>
                <motion.div className="px-24 py-5"
                    initial={{
                        x: -1000
                    }} animate={{
                        x: 0
                    }}  transition={{
                        duration: 1
                    }}
                >
                    <h1 className="text-3xl px-0.5">hey, my name is</h1>            
                    <h1 className="text-9xl font-bold">piyaphat liamwilai</h1>            
                </motion.div>
                <motion.div className="px-24 py-5" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}}>
                    <h1 className="text-3xl px-0.5">a computer science student who specialised in backend development.</h1>      
                </motion.div>
            </AnimatePresence>
        </div>
    )
}