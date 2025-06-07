"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-scroll";

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavigationProps) {
  const navigationItems = [
    { label: "ГЛАВНАЯ", to: "hero" },
    { label: "О РЕТРИТЕ", to: "about" },
    { label: "ПРОГРАММА", to: "programm" },
    { label: "РАСПИСАНИЕ", to: "schedule" },
    { label: "ДЕТАЛИ", to: "details" },
    { label: "ОТЗЫВЫ", to: "reviews" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-stone-100 sticky top-0 z-50 border-b border-stone-200"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center"
          >
            <span className="text-xl text-stone-800 font-medium tracking-wide font-serif">
              ТОСКАНА{" "}
              <span className="font-dancing text-2xl text-stone-700 ml-1">
                Ретрит
              </span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={0}
                className="text-stone-600 whitespace-nowrap cursor-pointer hover:text-stone-800 transition-colors duration-200 text-sm font-medium tracking-wider uppercase font-sans"
              >
                {item.label}
              </Link>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-600 hover:text-stone-800 transition-colors duration-200 p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : -2,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-current block h-0.5 w-6 rounded-sm"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-current block h-0.5 w-6 rounded-sm my-0.5"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 2,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-current block h-0.5 w-6 rounded-sm"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isMobileMenuOpen ? "visible" : "hidden"}
            className="px-2 pt-2 pb-6 space-y-1 bg-stone-100 border-t border-stone-200"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={0}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full cursor-pointer text-left px-4 py-3 text-stone-600 hover:text-stone-800 hover:bg-stone-50 transition-colors duration-200 text-sm font-medium tracking-wider uppercase font-sans"
              >
                {item.label}
              </Link>
            ))}
            <motion.div variants={staggerItem} className="pt-4 px-4">
              <Link
                to="booking"
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-stone-600 hover:bg-stone-700 text-white px-6 py-3 text-sm font-medium tracking-wider uppercase font-sans"
              >
                ЗАБРОНИРОВАТЬ
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
