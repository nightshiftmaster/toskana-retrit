"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((data) => setImages(Array.isArray(data) ? data : []));
  }, []);

  console.log(images);

  return (
    <section
      id="gallery"
      className="py-28 bg-stone-200 relative overflow-hidden noise-bg "
    >
      <h2 className="text-3xl md:text-4xl  font-serif font-light text-stone-800 text-center mb-20 tracking-wider">
        Фото прошлых путешествий
      </h2>
      <motion.div
        className="absolute top-0 left-0 w-full h-full grid-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          style={{ opacity, scale }}
          className="max-w-[1500px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              loop={true}
              //   effect="coverflow"
              speed={800}
              initialSlide={17}
              spaceBetween={30}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              //   coverflowEffect={{
              //     rotate: 50,
              //     stretch: 0,
              //     depth: 100,
              //     modifier: 1,
              //     slideShadows: true,
              //   }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="gallery-swiper"
            >
              {images?.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "100%", maxWidth: "500px", height: "500px" }}
                >
                  <motion.div
                    className="relative   w-full h-full  group rounded-frame soft-shadow"
                    // whileHover={{ scale: 1.03 }}
                    // transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image}
                      alt="image"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    ></motion.div> */}
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
