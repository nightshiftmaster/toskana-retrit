"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Define ImagesCollectionType or import it from the correct module
type ImagesCollectionType = any; // Replace 'any' with the actual type definition

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((data) => setImages(data));
  }, []);

  if (images.length === 0) return <p>Loading...</p>;
  return (
    <motion.div className="flex flex-row justify-center gap-2 w-full h-full">
      <div className="flex flex-wrap justify-center flex-row gap-3 w-full">
        <div
          key="3"
          className="w-full shadow-2xl shadow-gray-500 h-full relative rounded-2xl overflow-hidden sh"
        >
          <Image
            src="/programm/yoga.jpg"
            alt="image"
            fill // соотношение 300x192 примерно как 16:10
            className="w-full h-full object-cover   relative cursor-pointer hover:border-solid hover:border-4 hover:scale-150 hover:z-20 transition-transform duration-300 "
          />
        </div>
        {/* {images.slice(0, 12).map((image, index) => (
          <div
            key={index}
            className="w-[170px] shadow-2xl shadow-fuchsia-200 h-[350px] relative "
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={250} // соотношение 300x192 примерно как 16:10
              className="w-full h-full object-cover  relative cursor-pointer hover:border-solid hover:border-4 hover:scale-150 hover:z-20 transition-transform duration-300 "
            />
          </div>
        ))} */}
      </div>
    </motion.div>
  );
}
