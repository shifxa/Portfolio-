"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  Linkedin, 
  Instagram, 
  Facebook 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF8F3] px-4 md:px-8 pb-8 pt-0 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-16 text-[#FFF8F3] relative overflow-hidden"
        >
          
          {/* Decorative Background Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFAB5E] opacity-10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Column: CTA */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-[0.9]">
                  Let's <span className="text-[#FFAB5E]">Connect.</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md">
                  Always open to discussing new opportunities, collaborations, or just sharing ideas about digital marketing and strategy.
                </p>
              </div>

              {/* Email Button */}
              <div>
                <a 
                  href="mailto:khanshifa122004@gmail.com" 
                  className="group inline-flex items-center gap-3 bg-[#FFAB5E] text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send me an Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Social Links */}
            <div className="flex flex-col md:items-end gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm w-full md:w-auto min-w-[300px]">
                <h4 className="text-[#FFAB5E] font-bold uppercase tracking-widest text-xs mb-6">Socials</h4>
                <ul className="space-y-4 font-medium text-xl">
                  <li>
                    <a 
                      href="https://www.linkedin.com/in/shifakhan0912/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between hover:text-[#FFAB5E] transition-colors"
                    >
                      <span className="flex items-center gap-3"><Linkedin className="w-5 h-5"/> LinkedIn</span>
                      <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.instagram.com/shifakofficial?igsh=MWkzcms0Nm5hNmtoag==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between hover:text-[#FFAB5E] transition-colors"
                    >
                      <span className="flex items-center gap-3"><Instagram className="w-5 h-5"/> Instagram</span>
                      <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.facebook.com/share/1GihcP3RTj/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between hover:text-[#FFAB5E] transition-colors"
                    >
                      <span className="flex items-center gap-3"><Facebook className="w-5 h-5"/> Facebook</span>
                      <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Area */}
          <div className="pt-8 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
            <p>&copy; {currentYear} Shifa Khan. All rights reserved.</p>
            <p>Designed with ❤️</p>
          </div>

        </motion.div>
      </div>
    </footer>
  );
}