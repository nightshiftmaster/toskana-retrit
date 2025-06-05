"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";
import Gallery from "@/components/sections/gallery";

const AboutSection = forwardRef<HTMLElement>((ref, images) => {
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
    <section className="py-20 md:py-32 px-4 bg-stone-200 mt-20">
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
            className="bg-stone-100 shadow-lg shadow-slate-600 p-8 md:p-12"
          >
            <motion.div
              variants={staggerContainer}
              className="text-stone-700 leading-relaxed space-y-6 font-light"
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
          </motion.div>

          {/* Right Column - Image */}
          {/* <motion.div
            variants={fadeInRight}
            className="flex flex-col justify-center gap-2 bg-green-300 w-full h-full"
          >
            <div className="flex flex-row gap-2">
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="images/photo_5872867903672535137_y.jpg"
                  alt="Retreat leader in Tuscany"
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
            </div>
          </motion.div> */}
          <Gallery />
        </div>
      </motion.div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
