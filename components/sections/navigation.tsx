"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface NavigationProps {
  refs: {
    heroRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    programRef: React.RefObject<HTMLElement>;
    scheduleRef: React.RefObject<HTMLElement>;
    detailsRef: React.RefObject<HTMLElement>;
    reviewsRef: React.RefObject<HTMLElement>;
    bookingRef: React.RefObject<HTMLElement>;
  };
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({
  refs,
  scrollToSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavigationProps) {
  const {
    heroRef,
    aboutRef,
    programRef,
    scheduleRef,
    detailsRef,
    reviewsRef,
    bookingRef,
  } = refs;

  const navigationItems = [
    { label: "ГЛАВНАЯ", ref: heroRef },
    { label: "О РЕТРИТЕ", ref: aboutRef },
    { label: "ПРОГРАММА", ref: programRef },
    { label: "РАСПИСАНИЕ", ref: scheduleRef },
    { label: "ДЕТАЛИ", ref: detailsRef },
    { label: "ОТЗЫВЫ", ref: reviewsRef },
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
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                onClick={() => scrollToSection(item.ref)}
                className="text-stone-600 hover:text-stone-800 transition-colors duration-200 text-sm font-medium tracking-wider uppercase font-sans"
              >
                {item.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection(bookingRef)}
                className="bg-stone-600 hover:bg-stone-700 text-white px-6 py-2 text-sm font-medium tracking-wider uppercase font-sans"
              >
                ЗАБРОНИРОВАТЬ
              </Button>
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
              <motion.button
                key={item.label}
                variants={staggerItem}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                onClick={() => {
                  scrollToSection(item.ref);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-stone-600 hover:text-stone-800 hover:bg-stone-50 transition-colors duration-200 text-sm font-medium tracking-wider uppercase font-sans"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div variants={staggerItem} className="pt-4 px-4">
              <Button
                onClick={() => {
                  scrollToSection(bookingRef);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-stone-600 hover:bg-stone-700 text-white px-6 py-3 text-sm font-medium tracking-wider uppercase font-sans"
              >
                ЗАБРОНИРОВАТЬ
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
