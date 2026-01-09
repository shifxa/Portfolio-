"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Target,
  BarChart3,
  PenTool,
  Instagram,
  Linkedin,
  Share2,
  Sparkles,
} from "lucide-react";

// --- 1. INFINITE MARQUEE COMPONENT ---
const MarqueeItem = () => (
  <div className="flex items-center gap-4 md:gap-8 mx-2 md:mx-4">
    <span className="text-xl md:text-3xl font-semibold text-[#1A1A1A] capitalize tracking-wider">
      Strategy
    </span>
    <Sparkles fill="#FFAB5E" className="text-[#FFAB5E]" size={24} />
    <span className="text-xl md:text-3xl font-semibold text-[#1A1A1A] capitalize tracking-wider">
      Marketing
    </span>
    <Sparkles fill="#FFAB5E" className="text-[#FFAB5E]" size={24} />
    <span className="text-xl md:text-3xl font-semibold text-[#1A1A1A] capitalize tracking-wider">
      Brand
    </span>
    <Sparkles fill="#FFAB5E" className="text-[#FFAB5E]" size={24} />
    <span className="text-xl md:text-3xl font-semibold text-[#1A1A1A] capitalize tracking-wider">
      Social Media
    </span>
    <Sparkles fill="#FFAB5E" className="text-[#FFAB5E]" size={24} />
    <span className="text-xl md:text-3xl font-semibold text-[#1A1A1A] capitalize tracking-wider">
      Development
    </span>
    <Sparkles fill="#FFAB5E" className="text-[#FFAB5E]" size={24} />
    <span className="text-xl md:text-3xl font-semibold text-[#1A1A1A] capitalize tracking-wider">
      Design
    </span>
    <Sparkles fill="#FFAB5E" className="text-[#FFAB5E]" size={24} />
  </div>
);

const Marquee = () => {
  return (
    <div className="relative w-full font-sans overflow-hidden bg-white py-3 md:py-3 rotate-[-2deg] scale-105 z-10 mb-8 md:mb-6 shadow-sm">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, 
          }}
        >
          
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </motion.div>
      </div>
    </div>
  );
};

// --- 2. FLOATING SKILL ICON COMPONENT ---
const SkillIcon = ({ icon: Icon, delay, className, size = 32 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      className={`absolute bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center scale-75 md:scale-100 ${className}`}
    >
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{
          repeat: Infinity,
          duration: 3 + Math.random() * 2, 
          ease: "easeInOut",
        }}
      >
        <Icon size={size} className="text-[#FFAB5E]" />
      </motion.div>
    </motion.div>
  );
};

// --- MAIN ABOUT SECTION ---
export default function AboutSection() {
  return (
    <section className="relative bg-slate-100 min-h-fit pt-6 overflow-hidden flex flex-col items-center">
      <Marquee />
      
      <div className="bg-slate-50 w-full">
        <div className="container mx-auto py-8 md:py-16 px-6 md:px-12 max-w-7xl font-sans grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 relative z-20"
          >
          
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tight ml-0 lg:-ml-10 text-center lg:text-left">
              about.
            </h2>

            <div className="space-y-4 text-gray-700 text-justify font-medium text-base md:text-lg leading-relaxed  lg:text-left">
              <p>
                Hi,{" "}
                <span className="font-bold">
                  I’m Shifa Khan, a Social Media Marketing Specialist
                </span>{" "}
                with a strong foundation in content strategy, Meta Ads, and
                performance-driven brand growth.
              </p>
              <p>
                I specialize in creating data-backed social media strategies
                that help brands increase visibility, engagement, and
                conversions across platforms like Instagram, Facebook, and
                LinkedIn. With hands-on experience in managing campaigns,
                audience targeting, content planning, and analytics, I focus on
                turning social media presence into measurable business results.
              </p>
              <p>
                My background in BSc IT allows me to approach marketing with a
                technical and analytical mindset, helping me understand user
                behavior, platform algorithms, and performance metrics more
                effectively. I have worked on real-world projects and mock
                campaigns across industries such as e-commerce, service-based
                businesses, and personal brands.
              </p>
              <p>
                I’m passionate about building brands through strategic content,
                paid advertising, and continuous optimization, and I’m always
                focused on learning, testing, and improving results in a
                fast-changing digital landscape.
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: ICON CLUSTER --- */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Large Orange Background Blob */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              // Responsive fix: Smaller blob on mobile (300px) -> Original size on Desktop (450px)
              className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#FFAB5E] rounded-full opacity-90 relative"
            >
              {/* Centerpiece - Strategy */}
              <SkillIcon
                icon={Target}
                size={50}
                delay={0.2}
                className="top-[40%] left-[40%] w-20 h-20 md:w-24 md:h-24 z-20"
              />

              {/* Top Left - Marketing */}
              <SkillIcon
                icon={Megaphone}
                size={32}
                delay={0.4}
                className="top-[10%] left-[20%]"
              />

              {/* Top Right - Analytics */}
              <SkillIcon
                icon={BarChart3}
                size={36}
                delay={0.5}
                className="top-[15%] right-[15%]"
              />

              {/* Bottom Left - Social */}
              <SkillIcon
                icon={Share2}
                size={28}
                delay={0.6}
                className="bottom-[20%] left-[10%]"
              />

              {/* Bottom Right - Content */}
              <SkillIcon
                icon={PenTool}
                size={34}
                delay={0.7}
                className="bottom-[15%] right-[25%]"
              />

              {/* Far Left Floater - Platforms */}
              <SkillIcon
                icon={Instagram}
                size={24}
                delay={0.8}
                className="top-[50%] -left-[5%] md:-left-[10%]"
              />

              {/* Far Right Floater - Professional */}
              <SkillIcon
                icon={Linkedin}
                size={24}
                delay={0.9}
                className="top-[40%] -right-[5%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}