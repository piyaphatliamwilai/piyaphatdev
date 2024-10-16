'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hackathon from './img/hackathon.jpg';
import act from './img/act.jpg';
import makex from './img/makex.jpg';
import Awards from "./components/Awards";

export default function Home() {
  const texts = [
    "a computer science student", "an amateur programmer", "a robotics competitor", "a manga addict"
  ];

  const backgroundImages = [
    hackathon, act, makex
  ];

  const [displayText, setDisplayText] = useState("");
  const [toShow, setToShow] = useState("a computer science student");
  const [iterations, setIterations] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  function makeText(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const generateEffectText = () => {
    let effect = makeText(toShow.length);
    if (iterations >= toShow.length) {
      setDisplayText(toShow);
    } else {
      setDisplayText(toShow.substring(0, iterations) + effect.substring(iterations, toShow.length));
      setIterations(iterations + 1);
    }
  };

  const rollText = () => {
    let index = currentIndex + 1 >= texts.length ? 0 : currentIndex + 1;
    setToShow(texts[index]);
    setCurrentIndex(index);
    setIterations(0);
  };

  const changeBackground = () => {
    const nextIndex = (backgroundIndex + 1) % backgroundImages.length;
    setBackgroundIndex(nextIndex);
  };

  useEffect(() => {
    const effectInterval = setInterval(generateEffectText, 50);
    const rollInterval = setInterval(rollText, 5000);
    const backgroundInterval = setInterval(changeBackground, 5000);

    return () => {
      clearInterval(effectInterval);
      clearInterval(rollInterval);
      clearInterval(backgroundInterval);
    };
  }, [toShow, iterations, backgroundIndex]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Background Image with Animation */}
      <AnimatePresence>
        <motion.div
          key={backgroundImages[backgroundIndex].src} // Unique key for each image to trigger animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${backgroundImages[backgroundIndex].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            filter: 'blur(12px)',
          }}
        />
      </AnimatePresence>

      {/* Foreground Content */}
      <motion.div
        className="p-24 w-screen h-screen font-sans font-medium flex-row text-white space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-9xl">piyaphat liamwilai</h1>
        <h1 className="text-6xl">{displayText}</h1>
      </motion.div>
      <div className="w-screen h-screen flex-row px-96 py-72 space-y-32 pb-96">
        <div className="flex flex-row space-x-[172px]">
          <div className="space-y-4 max-w-[450px]">
            <h1 className="text-7xl font-sans font-bold">HELLO!</h1>
            <h1 className="text-5xl">สวัสดีครับ</h1>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-sans leading-[4rem]">
              Hello, my name is Aut. I'm 16 years old. I am currently a grade 10 student, studying at Assumption College Sriracha. Computer Science Program. I have been coding ever since I am in 6th grade and have been improving ever since. Currently, I am a participant of the MakeX Challenger competition.
            </h1>
            <h1 className="text-3xl font-sans leading-[4rem]">
              สวัสดีครับ ผมชื่ออัท ตอนนี้อายุ 16 ปี ศึกษาอยู่ที่โรงเรียนอัสสัมชัญศรีราชา สายการเรียนวิทยาศาสตร์คอมพิวเตอร์ ผมเริ่มเขียนโค้ดครั้งแรกตั้งแต่ป.6 และกำลังพัฒนามาเรื่อยๆ จนถึงตอนนี้ ตอนนี้ผมเป็นผู้เข้าแข่งขันในรายการ MakeX Challenger
            </h1>
          </div>
        </div>
        <div className="flex flex-row space-x-32">
          <div className="space-y-4 max-w-[450px]">
            <h1 className="text-7xl font-sans font-bold">AWARDS</h1>
            <h1 className="text-5xl">รางวัลต่างๆ</h1>
          </div>
          <Awards></Awards>
        </div>
      </div>
    </div>
  );
}
