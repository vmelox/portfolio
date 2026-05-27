"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";

export function Projects() {
  return (
    <section id="projetos" data-section className="px-[5%] py-24 lg:px-[8%]">
      <SectionHeader
        eyebrow="Trabalhos"
        title="Projetos selecionados"
        description="Cada projeto é uma história: aqui estão as que tenho mais orgulho de contar até agora."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            data-reveal
            whileHover={{ y: -12, scale: 1.018 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group overflow-hidden rounded-3xl border border-rose-200/60 bg-white transition-colors duration-500 hover:border-rose-300 hover:shadow-[0_24px_50px_rgba(0,0,0,0.10)]"
          >
            {project.title === "Yumi" ? (
              <div className="relative h-56 overflow-hidden bg-[#160f36]">
                <Image
                  src="/yumi.png.jpeg"
                  alt="Banner do projeto Yumi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ) : project.title === "Assistente Médico com IA" ? (
              <div className="relative h-56 overflow-hidden bg-[#edf5ee]">
                <Image
                  src="/png.1.png"
                  alt="Banner do projeto Assistente Médico IA"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <div
                className={`flex h-44 items-center justify-center ${
                  project.tone === "rose"
                    ? "bg-[linear-gradient(135deg,#fce4ec,#f8bbd0)]"
                    : "bg-[linear-gradient(135deg,#e8f5e9,#c8e6c9)]"
                }`}
              >
                <span className="font-serif text-5xl font-semibold italic text-[#c2185b] transition duration-500 group-hover:scale-110">
                  {project.mark}
                </span>
              </div>
            )}
            <div className="p-7">
              <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#e6578f]">
                {project.number}
              </span>
              <h3 className="mb-3 font-serif text-2xl font-semibold text-[#1a1018]">
                {project.title}
              </h3>
              <p className="mb-6 text-sm font-light leading-7 text-[#4a3f47]">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#fce4ec] px-3 py-1 text-[11px] font-medium text-[#c2185b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[#c2185b] opacity-80 transition hover:translate-x-1 hover:opacity-100"
                >
                  {project.title === "Assistente Médico com IA"
                    ? "Triagem ->"
                    : "GitHub ->"}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
