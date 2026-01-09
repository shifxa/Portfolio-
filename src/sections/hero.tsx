"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Megaphone,
  TrendingUp,
  Rocket,
  Instagram,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const languages = [
  "Hello", "Bonjour", "Hola", "नमस्ते", "Ciao", "سلام", "こんにちは",
  "안녕하세요", "你好", "Olá", "Hallo", "Привет", "Γειά σου", "Merhaba",
  "สวัสดี", "Xin chào", "Selam", "Hej", "Halo",
];

const LanguageTicker = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mb-3 relative z-50">
      <Image
        src={"/whisks.webp"}
        height={20}
        width={20}
        className="object-contain h-12 w-12 absolute -right-[2.4rem] rotate-[-35deg] -top-3 z-10"
        alt="whisks"
      />
      <div className="border-2 overflow-hidden border-gray-400 min-w-[8.5rem] rounded-full py-1.5 px-6 z-10 relative shadow-sm">
        <AnimatePresence mode="wait">
          <motion.span
            key={languages[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="block font-medium text-gray-800 mx-auto text-sm text-center"
          >
            {languages[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- 2. FLOATING CAPSULE COMPONENT ---
const FloatingCapsule = ({
  icon: Icon,
  text,
  className,
  delay,
  duration,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: delay, ease: "backOut" }}
      className={`absolute z-40 ${className}`}
    >
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        // Added scale-75 for mobile to make capsules slightly smaller on tiny screens, reverting to scale-100 on desktop
        className="bg-[#1A1A1A] text-white px-4 py-2 md:px-5 md:py-3 rounded-full flex items-center gap-2 md:gap-3 shadow-2xl border border-gray-800 scale-90 md:scale-100"
      >
        <Icon size={18} className="text-[#FFAB5E]" />
        <span className="font-medium text-xs md:text-sm whitespace-nowrap">{text}</span>
      </motion.div>
    </motion.div>
  );
};

// --- 3. THE NEW TOGGLE SWITCH COMPONENT ---
const ActionSwitch = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const handleHireMeClick = () => {
    setActiveTab("hire");
    setTimeout(() => {
      window.location.href = "mailto:khanshifa122004@gmail.com";
    }, 300);
  };

  return (
    <div className="bg-[#1A1A1A] p-1.5 scale-90 md:scale-75 rounded-full flex items-center shadow-2xl border border-gray-800 pointer-events-auto">
      <button
        onClick={() => setActiveTab("projects")}
        className="relative px-6 md:px-8 py-2 md:py-3 rounded-full cursor-pointer font-bold text-sm md:text-base transition-colors"
      >
        {activeTab === "projects" && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-[#FFAB5E] rounded-full shadow-lg"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span
          className={`relative z-10 flex items-center gap-2 ${
            activeTab === "projects"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Projects <ArrowDownRight size={16} />
        </span>
      </button>

      <button
        onClick={handleHireMeClick}
        className="relative px-6 md:px-8 py-2 md:py-3 rounded-full font-bold cursor-pointer text-sm md:text-base transition-colors"
      >
        {activeTab === "hire" && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-[#FFAB5E] rounded-full shadow-lg"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span
          className={`relative z-10 flex items-center gap-2 ${
            activeTab === "hire"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Hire Me <ArrowUpRight size={16} />
        </span>
      </button>
    </div>
  );
};

// --- MAIN PAGE ---

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: customDelay },
    }),
  };

  return (
    <main className="min-h-screen bg-[#FFF8F3] flex flex-col items-center justify-between pt-8 px-4 relative overflow-x-hidden">
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col items-center justify-center">
      
      <LanguageTicker />

      <motion.div
        className="flex flex-row relative z-10 items-baseline"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.2}
      >
        <h1 className="text-4xl md:text-5xl font-sans font-semibold text-[#1A1A1A] leading-tight">
          I'm <span className="text-[#f39238]">Shifa</span>
        </h1>
        <div className="relative w-12 h-12 md:w-12 md:h-12 ml-4 mr-2">
          <Image
            src={"/waving-hand.webp"}
            fill
            alt="Hand_wave"
            className="object-contain wave"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-sans font-bold text-[#1A1A1A] leading-tight">
          ,
        </h1>
      </motion.div>

      <motion.div
        className="relative z-10 mt-2 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.3}
      >
        <h1 className="text-3xl md:text-4xl font-sans font-semibold text-[#1A1A1A] leading-tight text-center relative inline-block">
          A Social Media Marketing Specialist
          {/* Decorative Whisk Bottom Left - Hidden on small mobile */}
          <div className="absolute -left-12 -bottom-8 w-16 h-16 hidden md:block">
            <Image
              src={"/whisks.webp"}
              fill
              className="object-contain rotate-y-180 scale-105 opacity-50"
              alt="whisks"
            />
          </div>
        </h1>
      </motion.div>
</div>
      {/* --- MAIN GRID SECTION --- */}
      {/* Responsive Height: Auto on mobile, fixed 600px on desktop to preserve original layout */}
      <div className="relative w-full flex flex-col lg:flex-row justify-center items-center lg:items-baseline mt-8 lg:mt-0">
        {/* 1. LEFT TEXT (Bio) - Visible only on Desktop per original design */}
        <motion.div
          className="absolute left-[2%] top-[30%] max-w-xs text-gray-600 text-lg hidden lg:block z-20"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.6}
        >
          <span className="text-6xl text-[#FFAB5E] opacity-50 absolute -top-10 -left-6 font-serif">
            “
          </span>
          <p className="leading-relaxed text-sm font-sans font-medium">
            Passionate Social Media Marketing Specialist with hands-on
            experience in Meta Ads, content strategy, and brand growth across
            Instagram and Facebook.
          </p>
        </motion.div>

        {/* 2. CENTER IMAGE & PLANETS (CAPSULES) */}
        <motion.div
          className="relative flex justify-center items-center h-[450px] md:h-[550px] lg:h-full w-full lg:w-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* The "Sun" (Image) Wrapper */}
          {/* Responsive Width: 320px (Mobile) -> 500px (Desktop) */}
          <div className="relative w-[320px] lg:scale-95 h-[440px] md:w-[420px] md:h-[500px] lg:w-[380px] lg:h-[480px] z-10 transition-all duration-300 ease-in-out">
            {/* Orange Blob Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] md:w-[140%] h-[50%] bg-[#FFAB5E] rounded-t-full -z-10"></div>

            {/* Main Photo */}
            <Image
              src="/shifzz-removebg-preview.png"
              alt="Shifa Khan"
              fill
              className="object-cover object-top"
              priority
            />

            {/* --- FLOATING CAPSULES (THE PLANETS) --- */}
            {/* RESPONSIVE STRATEGY:
                - Mobile: Positioned closer to center (e.g. -left-2) to avoid overflow.
                - Tablet (md): Positioned slightly further out.
                - Desktop (lg): Uses the EXACT original values (-left-[35%]) to maintain perfect layout.
            */}
            
            {/* Top Left: Marketing */}
            <FloatingCapsule
              icon={Megaphone}
              text="Marketing"
              className="top-4 -left-2 md:top-[10%] md:-left-12 lg:top-[15%] lg:-left-[35%]"
              delay={0.2}
              duration={4}
            />

            {/* Top Right: Ads */}
            <FloatingCapsule
              icon={Rocket}
              text="Ads"
              className="top-12 -right-2 md:top-[15%] md:-right-8 lg:top-[20%] lg:-right-[30%]"
              delay={0.5}
              duration={5}
            />

            {/* Bottom Left: Brand */}
            <FloatingCapsule
              icon={TrendingUp}
              text="Brand"
              className="bottom-[35%] -left-8 md:bottom-[30%] md:-left-[20%] lg:bottom-[35%] lg:-left-[40%]"
              delay={0.8}
              duration={4.5}
            />

            {/* Bottom Right: Social Media */}
            <FloatingCapsule
              icon={Instagram}
              text="Social Media"
              className="bottom-[25%] -right-10 md:bottom-[20%] md:-right-[25%] lg:bottom-[25%] lg:-right-[40%]"
              delay={1.1}
              duration={3.8}
            />
          </div>
        </motion.div>

        {/* 3. RIGHT CONTENT (Stats) - Visible only on Desktop per original design */}
        <div className="absolute right-[3%] top-[25%] max-w-xs flex flex-col h-[50%] justify-between hidden lg:flex z-20">
          <motion.div
            className="text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.6}
          >
            <h2 className="text-2xl text-center font-bold text-[#1A1A1A]">
              Real-World
            </h2>
            <p className="text-gray-600  font-medium mt-1 text-center">
              Brand & Marketing Experience
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile Stacked Layout - Content visible only on mobile/tablet */}
      <div className="lg:hidden w-full max-w-md mt-6 md:mt-12 flex flex-col gap-8 text-center px-4 pb-24">
        <p className="text-gray-600 font-medium leading-relaxed">
          Passionate Social Media Marketing Specialist with hands-on experience
          in Meta Ads, content strategy, and brand growth.
        </p>

        {/* Switch for Mobile Flow */}
        <div className="flex justify-center w-full">
          <ActionSwitch />
        </div>
      </div>

      {/* Desktop Floating Switch - HIDDEN on mobile to prevent overlapping */}
      <motion.div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-max"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <ActionSwitch />
      </motion.div>
    </main>
  );
}