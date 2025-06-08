"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  scaleIn,
} from "@/lib/animations";
import { Link } from "react-scroll";

const ScheduleSection = () => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const scheduleItems = [
    "Мы встречаемся в аэропорту Милана 1 августа, там нас будет ждать трансфер в нашу Виллу. Заселение. Приветственный Ужин.",
    "Далее каждый день мы будем начинать с бодрящей практики Йоги для молодости и красоты тела. Здоровый Завтрак, отдых у бассейна или запланированная программа данного дня.",
    "Танцы на закате в теплой и дружеской обстановке, бокал Вина и душевные истории из жизни каждой из нас.",
    "Фотосессия на память о прекрасном путешествии в Италию в окружении не менее прекрасных нас.",
  ];

  return (
    <section
      className="py-16 px-4 shadow-lg bg-stone-100 shadow-slate-600 rounded-2xl  "
      id="schedule"
    >
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center "
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-serif font-light text-stone-800  tracking-wider"
        >
          КАК ВСЁ БУДЕТ?
        </motion.h2>

        <motion.div
          variants={scaleIn}
          className=" p-8 md:p-12 text-left rounded-2xl"
        >
          <motion.div
            variants={staggerContainer}
            className="text-stone-700 leading-relaxed space-y-6 font-light"
          >
            {scheduleItems.map((text, index) => (
              <motion.p key={index} variants={staggerItem}>
                {text}
              </motion.p>
            ))}

            <motion.p
              variants={staggerItem}
              className="text-center font-medium text-stone-800 pt-4"
            >
              17 августа — отъезд.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-8 p-6 bg-stone-300">
            <p className="text-stone-800 font-medium text-center tracking-wider">
              ЗАБРОНИРОВАТЬ МЕСТО ВОЗМОЖНО ТОЛЬКО ПРИ ПРЕДОПЛАТЕ 50%!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <Link
        to="booking"
        smooth={true}
        spy={true}
        duration={500}
        offset={-70}
        className="bg-stone-600 mt-20 cursor-pointer rounded-2xl hover:bg-stone-700 text-white px-7 py-2 text-sm font-medium tracking-wider uppercase font-sans"
      >
        ЗАБРОНИРОВАТЬ
      </Link>
    </section>
  );
};

ScheduleSection.displayName = "ScheduleSection";

export default ScheduleSection;
