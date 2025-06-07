"use client";

import { motion } from "framer-motion";

import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" py-20 md:py-32 px-4 bg-stone-200 text-center"
    >
      <div className=" max-w-[1500px] mx-auto flex flex-col items-center justify-center relative -mt-14">
        <div className="w-full h-[80vh] relative rounded-xl overflow-hidden">
          <img
            src="images/photo_5872867903672535142_y.jpg"
            className=" w-full h-full object-cover object-top"
            alt=""
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="absolute top-12 text-slate-100 flex flex-col items-center justify-center gap-[3vh] w-full p-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl  [text-shadow:_0_4px_12px_rgb(55_65_81_/_0.9)]   md:text-3xl  leading-relaxed w-full text- lg:text-5xl font-serif font-light  mb-6 tracking-wide  transform -translate-x-1/2 "
          >
            ДЕВИЧНИК В ТОСКАНЕ
          </motion.h1>
          <h2 className="text-md md:text-2xl drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(55_65_81_/_0.9)] ">
            КРАСОТА ТЕЛА И ДУШИ
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-lg [text-shadow:_0_4px_10px_rgb(75_85_99_/_0.95)]  leading-relaxed font-light p-14 "
          >
            Йога, эстетика, танец, искусство, фотосессия и итальянская любовь к
            жизни — в уникальном путешествии для женщин, которые хотят больше,
            чем просто отпуск.
          </motion.p>

          <div className="">
            <h1 className="text-5xl [text-shadow:_0_4px_12px_rgb(55_65_81_/_0.9)] font-bold text-slate-100">
              10 - 17 Августа
            </h1>
          </div>
          <Link
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            offset={100}
            className="md:w-1/4 w-fit cursor-pointer mt-14 bg-green-100 rounded-2xl hover:bg-fuchsia-100 text-amber-950 px-7 py-2 text-sm font-medium tracking-wider uppercase "
          >
            УЗНАТЬ БОЛЬШЕ
          </Link>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
