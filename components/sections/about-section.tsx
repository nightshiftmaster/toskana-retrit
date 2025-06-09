"use client";

import { motion } from "framer-motion";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { staggerContainer, staggerItem, fadeInLeft } from "@/lib/animations";
import Gallery from "@/components/sections/gallery";
import { Link } from "react-scroll";

const AboutSection = () => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const paragraphs = [
    `Приветствую тебя, дорогая.
Меня зовут 
Юлия Головин — сертифицированный  инструктор Йоги и Пилатес направлений,организатор Здоровых путешествий, ретритов и девичников.
`,
    " «В каждом движении — любовь. В каждом вдохе — свобода».",
    "Создаю пространства, где женщина может отдохнуть душой и телом, вернуться к себе, наполниться энергией, красотой и лёгкостью.",
    `Мои путешествия — это больше, чем просто поездки. Это мягкое прикосновение к себе через практики йоги, танцевальную терапию, живое движение и глубокое расслабление. Это встречи с природой, с собой, с другими женщинами — в любви, принятии и радости.
`,
    `Каждое мероприятие я наполняю теплом, заботой и эстетикой:
– Йога и утренние ритуалы на природе
– Танец как путь к себе и своему телу
– Пространство женской силы и поддержки
– Вкусная здоровая еда
– Красивые локации, где хочется дышать и жить
– Тишина, смех, искренность и лёгкость.`,
    `Благодарю за проявленный интерес к Моему Йога-девичнику в потрясающей Италии, р-н Тоскана. 
Италия - это прежде всего настроение ! Наполненность! Восхищение! Любовь! 
Поток неиссякаемой творческой энергии !
Именно в сопровождении с практиками Йоги и
Медитациями мы сможем глубже наблюдать свою женскую природу и трансформировать ее в сопутствующей атмосфере.
Практики танцевально двигательной терапии помогут тебе расслабиться и отпустить весь эмоциональный хлам, накопленный за последние годы. `,
    "Мы будем учиться наслаждаться каждым глотком жизни, как бокалом выдержанного Кьянти. Танцевать под звездным небом Тосканы и вспоминать о своей Женской природе.",
    "Этот девичник — о празднике, который ты даришь себе. Без спешки. Без масок. Только ты, женское окружение, Италия и ощущение, что ты в самой красивой главе своей жизни.",
  ];

  return (
    <section
      className="py-20 md:py-32 px-4 "
      id="about"
      style={{ backgroundColor: "#f2f1ed" }}
    >
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
