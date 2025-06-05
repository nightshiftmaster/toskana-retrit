"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const TestimonialsSection = forwardRef<HTMLElement>((props, ref) => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const testimonials = [
    {
      avatar: "./avatars/alena.png",
      name: "Алёна Шеремет",
      text: `Юля,хочу сказать тебе спасибо ! Девичник в Риме -это прям магия ! Я так зарядилась и наполнилась ) столько хороших ,веселых ,добрых воспоминаний !
Такие все девочки классные были)
А сама идея ,что это йога девичник прям добавила смысла поездке 
Каждое утро начинить с практики совместной ,заряжаться энергий ! 
Самая Италия -уже зажигает тебя ,а когда это времяпровождения с пользой и весело ,среди близких по духу -это совершено другой опыт !
Мне очень понравилось 😻 
Я обязательно хочу еще 🙏🏼❤️
Еще раз спасибо !`,
    },
    {
      avatar: "./avatars/tatiana-kotikovskaya.jpeg",
      name: "Татьяна Котиковская",
      text: `Юлечка , я благодарна тебе за потрясающий опыт проведения и участие в моем первом йога ретрите. Твоя Йога практика на рассвете была чудесной и наполняла меня энергией на весь день. комфортное проживание  и полезное питание , а главное- Душевная атмосфера сделали этот ретрит незабываемым. `,
    },
    {
      avatar: "./avatars/lada.jpeg",
      name: "Лада Шедер",
      text: `Хочу поделиться своим глубоким впечатлением от ретрита, который проводила Юля и Тата в пустыне Мицпе-Рамон. Это были несколько дней, наполненных трансформацией, тишиной, силой и настоящим соприкосновением с собой.
Было создано невероятное поле чуткое, поддерживающее, глубокое. Оно позволяло нам погружаться в практики, открываться, отпускать, исцеляться. Я почувствовала огромную отдачу от девочек, их нежность, эмпатию, безоценочное принятие и мудрое сопровождение. Они тонко чувствовали каждого, направляли с заботой и мягкостью, создавая пространство, где можно по-настоящему раскрыться.

За эти два дня я прошла через мощные внутренние процессы, прочувствовала, насколько глубоко можно трансформироваться за столь короткое время. Уезжала с ощущением наполненности, ясности и любви.

Благодарю тебя, Юля и Тата, за этот путь. За ваши дары, чувствительность и свет, который вы щедро передаете людям. Это было по-настоящему❤️🙏`,
    },
    {
      avatar: "./avatars/liza.jpeg",
      name: "Елизавета Ашкинази",
      text: `Юля, круто было поехать и не парить себе голову с жильем, с питанием, с атракциями, гидом, подвозками.
У меня получилось просто кайфовать от Рима, от компании, быть в моменте! Спасибо что пригласила в свою мечту! Жду твоих новых идей и предложений!`,
    },
    {
      avatar: "./avatars/oksana.jpeg",
      name: "Оксана Новицкая",
      text: `Юля , благодарю за возможность пройти в невероятное путешествие вглубь себя
Как все таки практики и медитации меняют мышление , духовное состояние , дают возможность побыть с самим собой и услышать себя Ты проводник, который помог прочувствовать наше подсознание , освободится от ощущения тела и потерять счет времени , замедлится . Это сейчас так важно
Спасибо что дала нам почувствовать это новое состояние`,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-stone-100">
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-serif font-light text-stone-800 text-center mb-16 tracking-wider"
        >
          ОТЗЫВЫ С ПРОШЛЫХ ПОЕЗДОК
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-stone-200 py-10 px-6 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 bg-stone-300 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <img
                  src={testimonial.avatar}
                  alt="avatar"
                  className="h-full w-full object-cover rounded-full"
                />
              </motion.div>
              <motion.div
                variants={staggerContainer}
                className="flex justify-center mb-4"
              >
                {/* {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Star className="w-4 h-4 text-stone-600 fill-current" />
                  </motion.div>
                ))} */}
              </motion.div>
              <p className="text-stone-700 mb-4 italic font-light">
                "{testimonial.text}"
              </p>
              <p className="font-serif font-medium text-stone-800 tracking-wider">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
