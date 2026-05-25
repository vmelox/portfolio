"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-[5%] py-4 transition-all duration-300 lg:px-[8%] ${
        scrolled
          ? "border-b border-rose-200/60 bg-[#fdf8f5]/80 shadow-[0_12px_40px_rgba(74,63,71,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#inicio"
        className="font-serif text-[22px] font-semibold tracking-normal text-[#1a1018] transition duration-300 hover:scale-105 hover:text-[#c2185b]"
      >
        Ana <em className="text-[#e6578f]">Vitória</em>
      </a>

      <nav aria-label="Navegação principal" className="hidden md:block">
        <ul className="flex list-none gap-2">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition ${
                    isActive
                      ? "border-rose-300 bg-rose-500/10 text-[#c2185b]"
                      : "border-transparent text-[#4a3f47] hover:border-rose-200 hover:bg-rose-500/5 hover:text-[#c2185b]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
