"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- DATA ---

const skills = [
  "Content & Branding",
  "Growth Marketing",
  "Social Media & Strategy",
  "Analytics",
  "Marketing Strategy",
  "Brand Management",
  "Creative Campaign",
];

const toolsCategories = [
  {
    title: "Marketing Strategy",
    tools: [
      { name: "Google Analytics", src: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
      { name: "Google Trends", src: "https://cdn.prod.website-files.com/68de64a5121739ae493c912e/68f4f120e79b0cfee0c1193f_66d8e0f3ea31e1eab60cdb49_google-trends_%2525281%252529.webp" },
      { name: "Search Console", src: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg" },
    ],
  },
  {
    title: "Branding & Social Media",
    tools: [
      { name: "Adobe Creative Cloud", src: "https://static.vecteezy.com/system/resources/previews/046/861/637/non_2x/adobe-creative-cloud-logo-free-png.png" },
      { name: "CapCut", src: "https://img.freepik.com/premium-vector/capcut-circle-flat-icon_1144164-263.jpg" },
      { name: "Figma", src: "https://cdn.jim-nielsen.com/macos/512/figma-2021-05-05.png?rf=1024" },
    ],
  },
  {
    title: "Analytics & Insight",
    tools: [
      { name: "Power BI", src: "https://cdn.worldvectorlogo.com/logos/power-bi-1.svg" },
      { name: "Google Data", src: "https://cdn.worldvectorlogo.com/logos/google-data-studio.svg" },
      { name: "Microsoft 365", src: "https://cdn.worldvectorlogo.com/logos/microsoft-office-2013.svg" },
    ],
  },
  {
    title: "Ads & Growth",
    tools: [
      { name: "Meta Ads", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/meta-color.png" },
      { name: "Google Ads", src: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" },
    ],
  },
];

export default function SkillsExperienceSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: customDelay },
    }),
  };

  return (
    <section className="min-h-screen bg-[#FFF8F3] py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================== */}
        {/* 1. TOP SECTION: SKILLS     */}
        {/* ========================== */}
        <motion.div 
          className="text-center mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.1}
        >
            
             
          {/* Header with decorative elements */}
          <div className="relative font-sans inline-block mb-8">
            <Image src="/star.png" width={40} height={40} alt="decor" className="absolute top-2 -left-10" />
             <h2 className="text-6xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter">
               skills.
             </h2>
          </div>

          {/* Pills Layout */}
          <div className="flex relative flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
             {/* Left Decoration stroke */}
             <div className="absolute -left-6 rotate-y-180  -top-4 w-8 h-8 ">
                <Image src="/whisks.webp" width={40} height={40} alt="decor" className="rotate-[-45deg] scale-150" />
             </div>
             
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white border-2 border-[#1A1A1A] px-4 py-1 rounded-full text-[#1A1A1A] font-bold text-xs md:text-sm shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-y-1 hover:shadow-none  transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
              {/* Right Decoration stroke */}
             <div className="absolute -right-4 rotate-x-180 -top-4 w-8 h-8">
                <Image src="/whisks.webp" width={40} height={40} alt="decor" className=" scale-150 " />
             </div>
          </div>
        </motion.div>


       
        {/* 2. MAIN GRID LAYOUT        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: TOOLS                    */}
          <div className="lg:col-span-7 h-full">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} custom={0.5}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 h-full"
            >
              <h3 className="text-5xl font-black text-[#1A1A1A] mb-10 tracking-tight">
                tools.
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {toolsCategories.map((cat, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    
                    {/* Tool Icons Grid */}
                    <div className="flex gap-4">
                      {cat.tools.map((tool, tIdx) => (
                        <div 
                          key={tIdx} 
                          className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-2xl flex items-center justify-center p-3 shadow-sm hover:scale-110 transition-transform duration-300 border border-gray-100"
                          title={tool.name}
                        >
                          <img 
                            src={tool.src} 
                            alt={tool.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Category Title & List */}
                    <div>
                      <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2 bg-gray-100 inline-block px-2 py-1 rounded-md">
                        {cat.title}
                      </h5>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {cat.tools.map((tool, tIdx) => (
                          <div key={tIdx} className="flex items-center gap-1.5">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#FFAB5E]"></span>
                             <span className="text-sm font-bold text-gray-600">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          </div>
          
          {/* -------------------------------------- */}
          {/* RIGHT COLUMN: EXPERIENCE & EDUCATION    */}
          {/* -------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* --- EXPERIENCE CARD --- */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} custom={0.3}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <h3 className="text-5xl font-black text-[#1A1A1A] mb-8 tracking-tight">
                experience.
              </h3>

              {/* Timeline Item (Single) */}
              <div className="relative pl-8 border-l-4 border-blue-100/50">
                {/* Timeline Dot/Logo Placeholder */}
                <div className="absolute -left-[26px] top-0 bg-white p-1 rounded-xl border border-gray-100 shadow-md">
                   {/* Placeholder for Company Logo */}
                   <Image src="https://media.licdn.com/dms/image/v2/C4D0BAQGMCaceN-9RIQ/company-logo_200_200/company-logo_200_200/0/1662545356948/peaceinfotech_logo?e=2147483647&v=beta&t=Cz7uXtjapJmrQRpPJJr68WvftFBJH0XEDSbXF0FSEkk" width={32} height={32} alt="company logo" className="w-full h-full rounded-lg" />
                </div>

                <div className="flex flex-col gap-1 mb-2">
                  <h4 className="text-xl font-bold text-[#1A1A1A] leading-tight">Social Media Specialist</h4>
                  <span className="text-sm font-semibold text-gray-500">2025</span>
                </div>
                
                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                  Managed end-to-end strategy & several brand activations and optimized social media campaigns, driving sales growth and engagement across platforms.
                </p>
              </div>
            </motion.div>

            {/* --- EDUCATION CARD --- */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} custom={0.4}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <h3 className="text-5xl font-black text-[#1A1A1A] mb-8 tracking-tight">
                education.
              </h3>

              <div className="flex items-start gap-4">
                 <div className="w-14 h-14 bg-blue-900 p-1 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl">
                   <Image src="https://cache.careers360.mobi/media/colleges/social-media/logo/Logo_of_Anand_Vishwa_Gurukul_Thane_Logo.png" width={32} height={32} alt="university logo" className="w-full h-full rounded-lg" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-[#1A1A1A]">BSc IT</h4>
                    <span className="inline-block bg-[#FFAB5E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
                       Bachelor's Degree
                    </span>
                    <p className="text-sm text-gray-500 font-medium">Mumbai University • 2022 - 2025</p>
                 </div>
              </div>
            </motion.div>

          </div>


    

        </div>
      </div>
    </section>
  );
}