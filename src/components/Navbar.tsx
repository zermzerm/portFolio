"use client";
import {motion, AnimatePresence} from "framer-motion";

const NavElement = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <AnimatePresence>
      <motion.nav
        key="navbar"
        initial={{y: -80, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.4, ease: "easeInOut"}}
        className="fixed top-0 left-0 w-full h-[50px] bg-white/30 backdrop-blur shadow-header z-[9999] flex justify-between items-center px-8"
      >
        <div>
          <span onClick={() => handleScroll("about")} className="cursor-pointer">
            PKS
          </span>
        </div>
        <div className="flex gap-[24px]">
          {NavElement.map((el, idx) => (
            <span onClick={() => handleScroll(`${el}`)} className="cursor-pointer" key={idx}>
              {el}
            </span>
          ))}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
