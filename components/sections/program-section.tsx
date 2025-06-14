"use client";

import { motion } from "framer-motion";
import {
  Home,
  Coffee,
  Flower2,
  Users,
  Palette,
  Building2,
  ChefHat,
  Camera,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  fadeInRight,
  scaleIn,
} from "@/lib/animations";
import { Link } from "react-scroll";
import ScheduleSection from "./schedule-section";

const ProgramSection = () => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const inclusions = [
    {
      icon: <Home className="w-5 h-5" />,
      text: "Проживание на ВИЛЛЕ с частным бассейном и парковкой (по 2 человека в спальне)",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      text: "Итальянские Вегетарианские завтраки",
    },
    {
      icon: <Flower2 className="w-5 h-5" />,
      text: "Практики Йоги и медитации",
    },
    { icon: <Users className="w-5 h-5" />, text: "Танцевальная терапия" },
    {
      icon: <Palette className="w-5 h-5" />,
      text: "AR*-класс по созданию натюрморта",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      text: "Поездка во Флоренцию с посещением Galleria degli Uffizi",
    },
    {
      icon: <ChefHat className="w-5 h-5" />,
      text: "Экскурсия на старинную Сыроварню",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      text: "Фотосессия на тосканских просторах",
    },
  ];

  const prices1 = [
    "До 21 июня – 2600$",
    "До 14 июля – 2780$",
    "До 1 августа – 3100$",
  ];
  const prices2 = [
    "До 21 августа – 2600$",
    "До 5 сентября – 2780$",
    "До 20 сентября – 3100$",
  ];

  return (
    <section
      id="programm"
      className="py-20 md:py-32 px-4 bg-stone-200 overflow-hidden"
    >
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-serif font-light text-stone-800 mb-16 tracking-wider break-words"
        >
          ПРОГРАММА И СТОИМОСТЬ
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-5 w-full">
            <motion.div
              variants={scaleIn}
              className="bg-stone-100 p-8 rounded-2xl text-center shadow-lg shadow-slate-600 w-full max-w-full"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="text-6xl mt-8 md:text-7xl font-serif font-light text-stone-800 mb-4 break-words"
              >
                2600$
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="text-2xl md:text-3xl font-serif my-10 font-light text-stone-800 tracking-wider break-words"
              >
                ТОСКАНА
              </motion.div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
                <motion.div
                  variants={staggerItem}
                  className="text-xl md:text-2xl text-stone-600 mb-2 tracking-wider font-light break-words"
                >
                  10–17 АВГУСТА
                </motion.div>
                <motion.div
                  variants={staggerItem}
                  className="text-xl md:text-2xl text-stone-600 mb-2 tracking-wider font-light break-words"
                >
                  1–7 ОКТЯБРЯ
                </motion.div>
              </div>

              <motion.div
                variants={staggerItem}
                className="text-2xl md:text-3xl my-8 font-serif font-light text-stone-800 tracking-wider"
              >
                СТОИМОСТЬ
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-10 mb-10  justify-center md:items-start items-center text-left">
                <div className="space-y-2 text-sm text-stone-600 font-light break-words">
                  {prices1.map((price, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="py-2"
                    >
                      {price}
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2 text-sm text-stone-600 font-light break-words">
                  {prices2.map((price, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="py-2"
                    >
                      {price}
                    </motion.div>
                  ))}
                </div>
              </div>

              <Link
                to="details"
                smooth
                spy
                duration={500}
                offset={-130}
                className="bg-stone-600 mt-10 w-full sm:w-[80%] cursor-pointer rounded-2xl hover:bg-stone-700 text-white px-7 py-2 text-sm font-medium tracking-wider uppercase font-sans max-w-full text-center"
              >
                ПОДРОБНЕЕ О ПРОГРАММЕ
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="flex flex-col justify-center items-center bg-stone-100 rounded-2xl shadow-lg shadow-slate-600 py-16 px-4 w-full"
            >
              <motion.h3
                variants={staggerItem}
                className="text-3xl font-serif font-light text-stone-800 mb-8 tracking-wider text-center break-words"
              >
                В СТОИМОСТЬ ВКЛЮЧЕНО:
              </motion.h3>

              <motion.div
                variants={staggerContainer}
                className="space-y-4 w-full"
              >
                {inclusions.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex text-left items-start gap-4 p-4 sm:p-6 bg-stone-100 w-full break-words"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-stone-600 mt-1 flex-shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-stone-700 font-light">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="mt-8 p-6 bg-stone-300 w-full text-center"
              >
                <p className="text-stone-800 font-medium tracking-wider">
                  В СТОИМОСТЬ НЕ ВКЛЮЧЕНЫ АВИАБИЛЕТЫ
                </p>
              </motion.div>

              <Link
                to="details"
                smooth
                spy
                duration={500}
                offset={-130}
                className="bg-stone-600 mt-10 w-full sm:w-[80%] cursor-pointer rounded-2xl hover:bg-stone-700 text-white px-7 py-2 text-sm font-medium tracking-wider uppercase font-sans max-w-full text-center"
              >
                ПОДРОБНЕЕ О ПРОГРАММЕ
              </Link>
            </motion.div>
          </div>

          {/* Schedule Section */}
          <ScheduleSection />
        </div>
      </motion.div>
    </section>
  );
};

ProgramSection.displayName = "ProgramSection";

export default ProgramSection;
