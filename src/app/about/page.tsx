"use client";

import Image from "next/image";
import {motion} from "framer-motion";

const sentence = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.012, // 글자마다 0.03초 텀
    },
  },
};

const letter = {
  hidden: {opacity: 0, y: 10},
  visible: {opacity: 1, y: 0},
};

export default function About() {
  const texts = [
    "안녕하세요 프론트엔드 개발자 박경서입니다.",
    "창의력을 바탕으로",
    "좋은 프론트엔드 솔루션을 제공하여",
    "사용자 경험을 향상시키고, 팀의 성과에 기여하는 주도적인 역할을 하겠습니다.",
  ];

  return (
    <section id="about">
      <div className="min-h-[600px] flex justify-center items-center bg-[#bfb9e6]">
        <div className="flex gap-[100px]">
          <motion.div
            initial={{opacity: 0, x: -80}}
            animate={{opacity: 1, x: 0}}
            viewport={{once: false, amount: 0.2}}
            transition={{duration: 0.4, ease: "easeOut"}}
          >
            <Image src="/face.png" width={300} height={500} alt="myFace" className="rounded-lg" />
          </motion.div>

          <div className="flex flex-col justify-center gap-4">
            <motion.h2
              initial={{opacity: 0, y: -80}}
              animate={{opacity: 1, y: 0}}
              viewport={{once: false, amount: 0.2}}
              transition={{duration: 0.4, ease: "easeOut"}}
              className="text-3xl font-bold mb-4 text-[#172626]"
            >
              About me
            </motion.h2>

            {texts.map((line, i) => (
              <motion.p
                key={i}
                variants={sentence}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false}}
                className="text-lg flex flex-wrap"
              >
                {line.split("").map((el, idx) => (
                  <motion.span key={idx} variants={letter}>
                    {el === " " ? "\u00A0" : el}
                  </motion.span>
                ))}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
