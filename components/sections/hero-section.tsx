"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-20 md:py-32 px-4 bg-stone-200  text-center"
    >
      <div className="max-w-[1500px] mx-auto flex flex-col  items-center justify-center relative -mt-14">
        <div className="w-full h-[80vh] relative rounded-xl overflow-hidden">
          <img
            src="images/photo_5872867903672535142_y.jpg"
            className="w-full h-full object-cover object-top"
            alt="Фон"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute md:top-12 mt-20 text-white   flex flex-col items-center justify-center md:gap-[4vh] w-full p-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-5xl font-serif font-light mb-6 tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.65)]"
          >
            ДЕВИЧНИК В ТОСКАНЕ
          </motion.h1>

          <h2 className="text-md md:text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            КРАСОТА ТЕЛА И ДУШИ
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-sm md:text-lg leading-relaxed font-light mt-6 px-4 md:px-14 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Йога, эстетика, танец, искусство, фотосессия и итальянская любовь к
            жизни — в уникальном путешествии для женщин, которые хотят больше,
            чем просто отпуск.
          </motion.p>

          <div className="mt-8">
            <h1 className="text-xl md:text-5xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              10 - 17 Августа
            </h1>
          </div>

          <Link
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            offset={100}
            className="md:w-1/4 w-fit cursor-pointer mt-14 bg-green-100 rounded-2xl hover:bg-fuchsia-100 text-amber-950 px-7 py-2 text-sm font-medium tracking-wider uppercase transition-transform hover:scale-105"
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
