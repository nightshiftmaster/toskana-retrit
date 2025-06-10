"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-16 md:py-30 px-4 bg-stone-200   text-center"
    >
      <div className="max-w-[1500px] mx-auto flex flex-col   items-center justify-center relative -mt-14">
        <div className="w-full h-[90vh] relative rounded-xl overflow-hidden">
          <img
            src="/bg2.jpg"
            className="w-full h-[135vh] object-cover "
            alt="Фон"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="absolute md:top-12 mt-4 text-white   flex flex-col items-center justify-center md:gap-[4vh] gap-[1vh] w-full py-5">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl  md:text-6xl lg:text-8xl font-serif font-light
           mb-6  drop-shadow-[0_0_12px_rgba(255,255,255,0.65)]"
          >
            Девичник в Италии
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-xl  md:text-2xl lg:text-6xl font-serif font-light
           mb-6  drop-shadow-[0_0_12px_rgba(255,255,255,0.65)]"
          >
            📍Тоскана
          </motion.h1>

          <h2 className="text-xl font-playfair md:text-2xl lg:text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            КРАСОТА ТЕЛА И ДУШИ
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl  font-cormorant md:text-3xl leading-relaxed font-light mt-6 px-4 md:px-14 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Йога, эстетика, танец, искусство, фотосессия и итальянская любовь к
            жизни — в уникальном путешествии для женщин, которые хотят больше,
            чем просто отпуск.
          </motion.p>

          <div className="mt-8 flex flex-col justify-center items-center gap-3 md:gap-10">
            <h1 className="text-xl font-montserrat md:text-5xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              10 - 17 Августа
            </h1>
            <h1 className="text-xl  font-montserrat  md:text-5xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              1 - 10 Октября
            </h1>
          </div>

          <Link
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            offset={100}
            className="md:w-1/4 w-fit  cursor-pointer mt-5 md:mt-14 bg-green-100 rounded-2xl hover:bg-fuchsia-100 text-amber-950 px-7 py-2 text-sm font-medium tracking-wider uppercase transition-transform hover:scale-105"
          >
            Узнать больше
          </Link>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
