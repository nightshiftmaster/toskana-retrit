"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  scaleIn,
} from "@/lib/animations";

const ScheduleSection = forwardRef<HTMLElement>((props, ref) => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const scheduleItems = [
    "Мы встречаемся в аэропорту Милана 1 августа, там нас будет ждать трансфер в нашу Виллу. Заселение. Приветственный Ужин.",
    "Далее каждый день мы будем начинать с бодрящей практики Йоги для молодости и красоты тела. Здоровый Завтрак, отдых у бассейна или запланированная программа данного дня.",
    "Танцы на закате в теплой и дружеской обстановке, бокал Вина и душевные истории из жизни каждой из нас.",
    "Фотосессия на память о прекрасном путешествии в Италию в окружении не менее прекрасных нас.",
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-stone-100 ">
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center "
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-serif font-light text-stone-800 mb-16 tracking-wider"
        >
          КАК ВСЁ БУДЕТ?
        </motion.h2>

        <motion.div
          variants={scaleIn}
          className="bg-stone-200 p-8 md:p-12 text-left rounded-2xl"
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

          <motion.div
            variants={staggerContainer}
            className="mt-8 text-stone-700 leading-relaxed space-y-4 font-light"
          >
            <motion.p variants={staggerItem}>
              <strong>В стоимость входит:</strong> проживание, трансфер,
              завтраки, экскурсия на Сыроварню, практики Йоги, медитации и
              Танцевально-двигательной терапии, арт-класс от Итальянского
              художника, поездка во Флоренцию с посещением Галереи УФФИЦИ,
              профессиональная фотосессия.
            </motion.p>
            <motion.p variants={staggerItem}>
              <strong>В стоимость НЕ входит:</strong> авиабилеты.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
});

ScheduleSection.displayName = "ScheduleSection";

export default ScheduleSection;
