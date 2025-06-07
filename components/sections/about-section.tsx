"use client";

import { motion } from "framer-motion";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { staggerContainer, staggerItem, fadeInLeft } from "@/lib/animations";
import Gallery from "@/components/sections/gallery";
import { Link } from "react-scroll";

const AboutSection = () => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const paragraphs = [
    "Приветствую тебя, дорогая, и благодарю за проявленный интерес к Моему Йога-девичнику в Потрясающей Италии, р-н Тоскана.",
    "Основной целью данного путешествия является создание легкой, красивой и интересной атмосферы в очаровательном женском пространстве, где каждая из нас проникнется Итальянской открытостью, любовью и почувствует созвучие своей Души с этим Прекрасным Миром!",
    "Италия - это прежде всего Настроение! Наполненность эмоциями и Восхищением! Поток Неиссякаемой Творческой энергии!",
    "Именно в сопровождении с практиками Йоги и Медитациями мы сможем глубже наблюдать свою женскую природу и трансформировать ее в сопутствующей атмосфере.",
    "Практики Танцевально-двигательной терапии помогут тебе расслабиться и отпустить весь эмоциональный хлам, накопленный за последние годы.",
    "Мы будем учиться наслаждаться каждым глотком жизни, как бокалом выдержанного Кьянти. Танцевать под звездным небом Тосканы и вспоминать о своей Женской природе.",
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-stone-200 mt-20" id="about">
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-[1500px] mx-auto"
      >
        <h2 className="text-3xl md:text-4xl  font-serif font-light text-stone-800 text-center mb-20 tracking-wider">
          Добро пожаловать в мир женской гармонии и красоты
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <motion.div
            variants={fadeInLeft}
            className="bg-stone-100 flex flex-col justify-center items-center rounded-2xl shadow-lg shadow-slate-600 p-8 md:p-12"
          >
            <motion.div
              variants={staggerContainer}
              className="text-stone-700 leading-relaxed space-y-6 font-light mb-10"
            >
              {paragraphs.map((text, index) => (
                <motion.p key={index} variants={staggerItem}>
                  {text}
                </motion.p>
              ))}

              <motion.p
                variants={staggerItem}
                className="text-center font-medium text-stone-800 pt-4"
              >
                Этот девичник - о празднике, который ты даришь себе. Без спешки.
                Без масок. Только ты, женское окружение, Италия и ощущение, что
                ты в самой красивой главе своей жизни.
              </motion.p>
            </motion.div>
            <Link
              to="programm"
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="bg-stone-600 text-center  w-[80%] cursor-pointer rounded-2xl hover:bg-stone-700 text-white px-7 py-2 text-sm font-medium tracking-wider uppercase font-sans"
            >
              ПРОГРАММА И СТОИМОСТЬ
            </Link>
          </motion.div>

          <Gallery />
        </div>
      </motion.div>
    </section>
  );
};

AboutSection.displayName = "AboutSection";

export default AboutSection;
