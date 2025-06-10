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
    <>
      Я встречаю вас в аэропорту Милан-Мальпенса, где нас будет ждать трансфер
      до уютной виллы в сердце Тосканы.
      <br />
      По приезде — заселение и отдых.
      <br />
      Вечером — приветственный ужин: познакомимся, поделимся ожиданиями и просто
      насладимся атмосферой начала нашего особенного пути.
    </>,

    <div className="flex flex-col gap-3">
      <strong className="font-semibold">Каждый наш день включает:</strong>

      <p>
        • Утреннюю практику йоги для молодости, красоты и энергии тела, под моим
        руководством.
      </p>
      <p>• Коллективную медитацию.</p>

      <p>• Здоровый и вкусный завтрак, приготовленный с любовью.</p>

      <p>
        • Свободное время у бассейна или участие в запланированной программе дня
        (экскурсия, мастер-класс, пешие прогулки и т.д.)
      </p>

      <p>• Танцевальная терапия на закате в тёплой, дружеской атмосфере.</p>

      <p>• Бокал вина, смех и искренние разговоры под звёздами.</p>

      <p>
        • И, конечно, фотосессия, чтобы сохранить яркие воспоминания о
        путешествии и нашей невероятной женской энергии.
      </p>
    </div>,

    <>
      <strong className="font-bold">Особенные дни ретрита:</strong>
      <br />
      <br />
      <strong className="font-semibold">День во Флоренции</strong>
      <br />
      Поездка в культурную столицу Италии — Флоренцию.
      <br />
      Прогулка по старинным улочкам, кофе с видом на Дуомо и, конечно, посещение
      галереи Уффици, где хранятся шедевры Боттичелли, да Винчи, Микеланджело.
      Вдохновляющий и незабываемый день искусства.
      <br />
      <br />
      <strong className="font-semibold">
        Арт-класс с итальянским художником
      </strong>
      <br />
      Мы погрузимся в мир цвета и творчества, создавая собственную картину под
      руководством местного мастера.
      <br />
      Даже если вы никогда не держали кисть — это будет волшебный опыт выражения
      себя через искусство.
      <br />
      <br />
      <strong className="font-semibold">Гастрономический день</strong>
      <br />
      Поездка на местную сыроварню и в винный погреб: узнаем секреты тосканского
      производства, продегустируем сыры и вина, наполним себя вкусом и ароматом
      настоящей Италии.
      <br />
      <br />
      <strong className="font-semibold">
        Это будет больше, чем путешествие.
      </strong>
      <br />
      <strong className="font-semibold">
        Это ваша внутренняя перезагрузка, наполнение, женская сила, красота и
        легкость! Мы вернемся домой не просто с фотографиями — мы вернемся с
        сиянием в глазах и новыми смыслами в сердце.
      </strong>
    </>,
  ];

  return (
    <section
      className="py-16 px-4 shadow-lg bg-stone-100 shadow-slate-600 rounded-2xl"
      id="schedule"
    >
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-serif font-light text-stone-800 tracking-wider"
        >
          В Программе нашего путешествия ✨
        </motion.h2>

        <motion.div
          variants={scaleIn}
          className="p-8 md:p-12 text-left rounded-2xl"
        >
          <motion.div
            variants={staggerContainer}
            className="text-stone-700  md:text-left leading-relaxed space-y-12 font-light whitespace-pre-line"
          >
            {scheduleItems.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                {item}
              </motion.div>
            ))}

            <motion.p
              variants={staggerItem}
              className="text-center font-medium text-stone-800 pt-4"
            >
              17 августа — отъезд.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-8 p-6 bg-stone-300 ">
            <p className="text-stone-800 font-medium text-center tracking-wider">
              ЗАБРОНИРОВАТЬ МЕСТО ВОЗМОЖНО ТОЛЬКО ПРИ ПРЕДОПЛАТЕ 50%!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="flex justify-center mt-10">
        <Link
          to="booking"
          smooth={true}
          spy={true}
          duration={500}
          offset={-70}
          className="bg-stone-600 cursor-pointer rounded-2xl hover:bg-stone-700 text-white px-7 py-2 text-sm font-medium tracking-wider uppercase font-sans"
        >
          ЗАБРОНИРОВАТЬ
        </Link>
      </div>
    </section>
  );
};

ScheduleSection.displayName = "ScheduleSection";

export default ScheduleSection;
