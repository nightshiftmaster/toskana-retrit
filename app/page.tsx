"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Cormorant_Garamond, Inter, Dancing_Script } from "next/font/google";

import LoadingScreen from "@/components/sections/loading-screen";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProgramSection from "@/components/sections/program-section";
import ScheduleSection from "@/components/sections/schedule-section";
import DetailsSection from "@/components/sections/details-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import BookingSection from "@/components/sections/booking-section";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

export const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function TuscanyRetreat() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for smooth scrolling

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LoadingScreen
        fonts={`${inter.variable} ${cormorant.variable} ${dancing.variable}`}
      />
    );
  }

  return (
    <div
      className={`min-h-screen bg-stone-100 overflow-x-hidden ${inter.variable} ${cormorant.variable} ${dancing.variable} font-sans`}
    >
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <ScheduleSection />
      <DetailsSection />
      <TestimonialsSection />
      <BookingSection />
    </div>
  );
}
