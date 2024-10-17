"use client";
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export default function SlideText({
  text,
  className = '',
  space = '4',
  delay = 0
}: {
  text: string;
  className?: string;
  space?: string;
  delay?: number;
}) {
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + (i * 0.1),
      },
    }),
  };
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className={`flex flex-wrap gap-4`}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={'inline-block text-center font-bold ' + className}
        >
          {current === '' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
