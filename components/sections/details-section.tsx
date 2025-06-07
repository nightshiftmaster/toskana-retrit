"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const DetailsSection = forwardRef<HTMLElement>((props, ref) => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const details = [
    {
      icon: "./programm/villa.jpg",
      title: "Проживание на тосканской вилле",
      content:
        "Вы будете жить в сердце Тосканы, на уютной вилле с частным бассейном и потрясающим видом на холмы, залитые солнцем. Каждая спальня рассчитана на двоих — идеально для отдыха с подругой или новой подругой, с которой вы только познакомитесь. Общая гостиная наполнена светом и теплом, а просторная кухня вдохновляет на неспешные разговоры и чашечки ароматного итальянского чая. Это место, где всё дышит покоем, природой и красотой.",
    },
    {
      icon: "./programm/breakfest.jpg",
      title: "Вегетарианские завтраки в итальянском стиле",
      content:
        "Каждое утро начинается со свежести и вкуса: спелые фрукты, хрустящий хлеб, ореховые пасты, оливки, томаты, сыр из местной лавки, ароматный травяной чай или кофе — всё это под открытым небом, с видом на просыпающуюся Тоскану. Питание будет лёгким, полезным и вкусным, чтобы поддерживать твою энергию и красоту в течение дня.",
    },
    {
      icon: "./programm/florence.jpg",
      title: "Поездка во Флоренцию — город искусства и вдохновения",
      content:
        "Один из дней мы проведем во Флоренции — в городе, где рождается искусство. Вас ждёт посещение знаменитой художественной галереи, где хранятся бессмертные шедевры эпохи Возрождения. Это прикосновение к вечному — к свету, форме, истории, где каждая деталь вдохновляет. Экскурсия будет сопровождаться гидом, влюбленным в своё дело.",
    },
    {
      icon: "./programm/cheese.jpg",
      title: "Посещение сыроварни",
      content:
        "Мы заглянем в местную сыроварню, где традиции и любовь к продукту ощущаются в каждом движении мастера. Вы узнаете, как рождаются настоящие итальянские сыры, попробуете свежайшие продукты, услышите истории о тосканской земле, козах, травах и секретах зрелости вкуса. Это не просто дегустация — это встреча с живым наследием.",
    },
    {
      icon: "./programm/art.jpeg",
      title: "Арт-класс по натюрморту",
      content:
        "Под руководством профессионального художника мы создадим свой собственный натюрморт в лучах тосканского солнца. Вы научитесь видеть красоту в деталях, выразите своё настроение на холсте и сохраните этот день не только в сердце, но и в картине, созданной своими руками. Даже если вы никогда не рисовали — этот процесс станет для вас источником радости и самовыражения.",
    },
    {
      icon: "./programm/hills.jpg",
      title: "Фотосессия среди тосканских холмов",
      content:
        "Вы станете героиней своей итальянской сказки. Стилизованная фотосессия на фоне золотых полей, кипарисов и закатного света. Мы предоставим образ и наряд — вы принесёте только своё сияние. Фотограф поможет вам раскрыться, поймать внутреннюю красоту и сохранить её в кадре. Эти фото станут воспоминанием о самой красивой версии себя.",
    },
    {
      icon: "./programm/yoga.jpg",
      title: "Йога и ТДТ — прикосновение к своей женской природе",
      content:
        "Каждое утро мы будем встречать с практиками йоги, направленными на пробуждение молодости тела и внутреннего сияния. Йога наполнит вас лёгкостью, грацией и ощущением «Я — дома». А практики танцевально-двигательной терапии помогут соединиться с телом как с источником силы, чувств, любви. Через движение — к себе, к памяти о том, какая вы на самом деле: чувственная, мягкая, свободная.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-stone-200 ">
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-6xl mx-auto "
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-serif font-light text-stone-800 text-center mb-16 tracking-wider"
        >
          ДЕТАЛИ ПРОГРАММЫ
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {details.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-stone-100 gap-3 p-6 py-6  flex cursor-pointer rounded-2xl shadow-lg shadow-slate-400 transition-transform duration-300"
            >
              <div className="flex items-center relative w-[90%] h-full rounded-lg overflow-hidden">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <h3 className="text-xl font-serif font-medium text-stone-800 tracking-wider">
                  {item.title}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed font-light">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
});

DetailsSection.displayName = "DetailsSection";

export default DetailsSection;
