import About from "@/sections/about";
import Home from "@/sections/hero";
import SkillsExperienceSection from "@/sections/skills-experience";
import Image from "next/image";

export default function Main() {
  return (
    <main>
      <Home />
      <About />
      <SkillsExperienceSection/>
    </main>
  );
}
