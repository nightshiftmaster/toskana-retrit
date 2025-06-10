"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="py-16 text-center md:text-left bg-stone-700 text-white relative overflow-hidden flex flex-col justify-center items-center">
      <motion.div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: "linear-gradient(90deg, #0BCEBC, #FF9E2C)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="text-4xl font-heading font-bold tracking-wider"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center justify-center md:justify-start"
              >
                <span className="text-xl text-center text-stone-300 font-medium tracking-wide font-serif">
                  ТОСКАНА Ретрит
                </span>
              </motion.div>
            </Link>
            <h2 className="text-lg md:text-2xl lg:text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              КРАСОТА ТЕЛА И ДУШИ
            </h2>
            <p className="mt-3 text-sm text-white/60 max-w-xs tracking-wider font-light">
              Tel: +1 613 7699591
            </p>
            <p className="mt-3 text-sm text-white/60 max-w-xs tracking-wider font-light">
              Email: YYglevel@gmail.com
            </p>
          </motion.div>
          <Socials />

          <motion.div
            className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {["home", "about", "gallery", "courses", "contact"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Link
                      href={`#${item}`}
                      className="text-sm hover:text-teal transition-colors capitalize tracking-widest relative group font-light"
                    >
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-teal transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 p-8 border-t border-white/10 text-center flex justify-center items-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm opacity-60 tracking-widest font-light md:mt-10">
            Created by{" "}
            <a
              href="https://vlad-web-developer.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vlad Medvedev
            </a>
            all rights reserved © 2025
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
