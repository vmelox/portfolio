"use client";

import { skills } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  SiBurpsuite,
  SiDocker,
  SiGit,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiOwasp,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiWireshark,
} from "react-icons/si";

const stackIcons: Record<string, IconType> = {
  aiintegration: SiReact,
  burpsuite: SiBurpsuite,
  docker: SiDocker,
  git: SiGit,
  javascript: SiJavascript,
  linux: SiLinux,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  owasp: SiOwasp,
  postgresql: SiPostgresql,
  pytorch: SiPytorch,
  python: SiPython,
  react: SiReact,
  scikitlearn: SiScikitlearn,
  tailwind: SiTailwindcss,
  tensorflow: SiTensorflow,
  typescript: SiTypescript,
  wireshark: SiWireshark,
};

export function Skills() {
  return (
    <section
      id="skills"
      data-section
      className="bg-[#fce4ec] bg-[radial-gradient(rgba(255,255,255,0.8)_1.5px,transparent_1.5px)] bg-[length:22px_22px] px-[5%] py-24 lg:px-[8%]"
    >
      <SectionHeader
        eyebrow="Stack"
        title="Tecnologias que uso"
        description="Focada no desenvolvimento de aplicações seguras, automações inteligentes e boas práticas de segurança."
      />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.label} skill={skill} />
        ))}
      </div>
    </section>
  );
}

type Skill = (typeof skills)[number];

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = stackIcons[skill.icon];

  return (
    <motion.div
      data-reveal
      whileHover={{ y: -9, scale: 1.035 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
      className="group relative min-h-[142px] cursor-default overflow-hidden rounded-[22px] border border-rose-300/45 bg-white/88 px-4 py-5 text-sm font-medium text-[#4a3f47] shadow-[0_14px_34px_rgba(194,24,91,0.08)] backdrop-blur transition-colors duration-300 hover:border-[#c2185b] hover:bg-[#c2185b] hover:text-white hover:shadow-[0_20px_42px_rgba(194,24,91,0.26)]"
    >
      <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#e6578f]/70 to-transparent" />
      <span className="absolute -right-6 -top-8 size-20 rounded-full bg-[#fce4ec] opacity-80 transition group-hover:bg-white/15" />
      <span className="relative mb-4 flex size-12 items-center justify-center rounded-2xl border border-rose-200 bg-[#fdf8f5] text-[#c2185b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)] transition group-hover:border-white/20 group-hover:bg-white/15 group-hover:text-white">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <span className="relative block text-left leading-tight">{skill.label}</span>
      <span className="relative mt-3 block h-px w-8 bg-[#e6578f]/35 transition group-hover:bg-white/45" />
    </motion.div>
  );
}
