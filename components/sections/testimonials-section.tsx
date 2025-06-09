"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const TestimonialsSection = () => {
  const { ref: animationRef, controls } = useScrollAnimation();

  const testimonials = [
    {
      avatar: "./avatars/alena.png",
      link: "https://www.instagram.com/alena_sher_emet/",
      instagram: "@alena_sher_emet",
      name: "Алёна Шеремет",
      text: `Юля,хочу сказать тебе спасибо ! Девичник в Риме -это прям магия ! Я так зарядилась и наполнилась ) столько хороших ,веселых ,добрых воспоминаний !
Такие все девочки классные были)
А сама идея ,что это йога девичник прям добавила смысла поездке 
Каждое утро начинить с практики совместной ,заряжаться энергий ! 
Самая Италия -уже зажигает тебя ,а когда это времяпровождения с пользой и весело ,среди близких по духу -это совершено другой опыт !
Мне очень понравилось 😻 
Я обязательно хочу еще 🙏🏼❤️
Еще раз спасибо !`,
      place: "Девичник в Риме",
    },
    {
      avatar: "./avatars/tatiana-kotikovskaya.jpeg",
      name: "Татьяна Котиковская",
      link: "https://www.instagram.com/_tata_sadhu_",
      instagram: "@_tata_sadhu_",
      text: `Юлечка , я благодарна тебе за потрясающий опыт проведения и участие в моем первом йога ретрите. Твоя Йога практика на рассвете была чудесной и наполняла меня энергией на весь день. комфортное проживание  и полезное питание , а главное- Душевная атмосфера сделали этот ретрит незабываемым. `,
      place: "Йога-ретрит в Израиле",
    },
    {
      link: "https://www.instagram.com/fichkovskay/?igsh=aXViejNlcWd4Zm42#",
      avatar: "./avatars/lada.jpeg",
      instagram: "@fichkovskay",
      name: "Лада Шедер",
      text: `Хочу поделиться своим глубоким впечатлением от ретрита, который проводила Юля и Тата в пустыне Мицпе-Рамон. Это были несколько дней, наполненных трансформацией, тишиной, силой и настоящим соприкосновением с собой.
Было создано невероятное поле чуткое, поддерживающее, глубокое. Оно позволяло нам погружаться в практики, открываться, отпускать, исцеляться. Я почувствовала огромную отдачу от девочек, их нежность, эмпатию, безоценочное принятие и мудрое сопровождение. Они тонко чувствовали каждого, направляли с заботой и мягкостью, создавая пространство, где можно по-настоящему раскрыться.

За эти два дня я прошла через мощные внутренние процессы, прочувствовала, насколько глубоко можно трансформироваться за столь короткое время. Уезжала с ощущением наполненности, ясности и любви.

Благодарю тебя, Юля и Тата, за этот путь. За ваши дары, чувствительность и свет, который вы щедро передаете людям. Это было по-настоящему❤️🙏`,
      place: "Йога-ретрит в Израиле",
    },
    {
      avatar: "./avatars/liza.jpeg",
      link: "https://www.instagram.com/lizachkinazi/",
      instagram: "@lizachkinazi",
      name: "Елизавета Ашкинази",
      text: `Юля, круто было поехать и не парить себе голову с жильем, с питанием, с атракциями, гидом, подвозками.
У меня получилось просто кайфовать от Рима, от компании, быть в моменте! Спасибо что пригласила в свою мечту! Жду твоих новых идей и предложений!`,
      place: "Девичник в Риме",
    },
    {
      avatar: "./avatars/oksana.jpeg",
      link: "https://www.instagram.com/oksi__1502/",
      instagram: "@oksi__1502",
      name: "Оксана Новицкая",
      text: `Юля , благодарю за возможность пройти в невероятное путешествие вглубь себя
Как все таки практики и медитации меняют мышление , духовное состояние , дают возможность побыть с самим собой и услышать себя Ты проводник, который помог прочувствовать наше подсознание , освободится от ощущения тела и потерять счет времени , замедлится . Это сейчас так важно
Спасибо что дала нам почувствовать это новое состояние`,
      place: "Йога-ретрит в Израиле",
    },
    {
      avatar: "./avatars/leila.jpg",
      link: "https://www.facebook.com/leyla.osher?mibextid=wwXIfr&rdid=0hJ54DICY0v1Yyvf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bs5npM8v3%2F%3Fmibextid%3DwwXIfr#",
      instagram: "Leyla Osher ",
      name: "Лейла Ошер",
      text: `Моё знакомство с Римом было спонтанным и в какой-то степени неожиданным даже для меня самой. Поездку я не планировала, но, получив это замечательное предложение от Юлички, не смогла отказаться — точнее, отказать себе в удовольствии: Рим, йога, классная компания и атмосфера Рождества!
Эта поездка стала поистине уникальной возможностью совместить всё это воедино.
Каждое утро начиналось с прекрасной практики йоги, которую вела Юля. Это заряжало нас бодростью и энергией на весь день.
Апартаменты были очень хорошие — светлые, просторные и уютные.
Во время путешествия мы посетили Музей Ватикана с замечательным и очень увлекательным гидом. Мы были впечатлены и вдохновлены одновременно!
Подводя итоги поездки, могу сказать одно: девочки, не упустите свой шанс! Смело отправляйтесь в это путешествие — и не пожалеете ни на секунду.`,
      place: "Девичник в Риме",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-stone-100" id="reviews">
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
          className="grid md:grid-cols-3 gap-8 "
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
              className="bg-stone-200 py-10 px-6 text-center rounded-2xl shadow-md shadow-slate-400"
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
              <p className="font-serif font-medium text-stone-800 tracking-wider">
                {testimonial.name}
              </p>

              <motion.div
                variants={staggerContainer}
                className="flex justify-center mb-4"
              ></motion.div>
              <p className="text-stone-700 mb-4 italic font-light">
                "{testimonial.text}"
              </p>
              <p className="text-stone-500 text-sm my-10">
                "{testimonial.place}"
              </p>
              <a
                href={testimonial.link}
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {testimonial.name !== "Лейла Ошер" ? (
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full overflow-hidden">
                    <img
                      src="./insta.jpg"
                      alt="insta-icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 mx-auto mb-2 rounded-full overflow-hidden">
                    <img
                      src="./facebook.webp"
                      alt="insta-icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {testimonial.instagram}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
