"use client";

import { contactLinks } from "@/data/portfolio";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const contactIcons: Record<string, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  mail: MdOutlineMail,
};

export function Contact() {
  return (
    <section
      id="contato"
      data-section
      className="relative overflow-hidden bg-[#1a1018] px-[5%] py-24 text-white before:absolute before:inset-0 before:bg-[radial-gradient(rgba(230,87,143,0.14)_1.5px,transparent_1.5px)] before:bg-[length:28px_28px] lg:px-[8%]"
    >
      <div className="relative z-10">
        <div data-section-header>
          <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.22em] text-[#e6578f]">
            Vamos conversar
          </span>
          <h2 className="mb-4 font-serif text-[clamp(32px,4vw,56px)] font-semibold leading-tight">
            Pronta para o
            <br />
            próximo <em className="text-[#e6578f]">desafio.</em>
          </h2>
          <p className="mb-12 max-w-[430px] text-base font-light leading-7 text-white/55">
            Seja uma oportunidade de estágio, freela, ou só um papo sobre tecnologia: minha caixa de
            entrada está aberta.
          </p>
        </div>

        <div className="flex max-w-xl flex-col gap-4">
          {contactLinks.map((link) => {
            const Icon = contactIcons[link.icon];

            return (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                data-reveal
                whileHover={{ x: 8, scale: 1.012 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group relative flex items-center gap-5 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.055] px-5 py-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-colors duration-300 hover:border-rose-400/60 hover:bg-rose-500/16 sm:px-7"
              >
                <span className="absolute inset-y-3 left-0 w-px bg-gradient-to-b from-transparent via-[#e6578f] to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-rose-400/15 text-[#f8bbd0] transition group-hover:border-rose-300/40 group-hover:bg-rose-400/25 group-hover:text-white">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="mb-1 block text-[11px] uppercase tracking-[0.14em] text-white/40">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm font-normal sm:text-[15px]">
                    {link.value}
                  </span>
                </span>
                <span className="ml-auto text-lg text-white/30 transition group-hover:translate-x-1 group-hover:text-[#e6578f]">
                  -&gt;
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
