"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set("[data-section], [data-reveal]", { clearProps: "all", opacity: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from("[data-hero-bg]", {
          autoAlpha: 0,
          duration: 0.7,
        })
        .from(
          "[data-hero-title] > span",
          {
            yPercent: 110,
            duration: 0.82,
            stagger: 0.1,
          },
          "-=0.32",
        )
        .from(
          "[data-hero-item]",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.72,
            stagger: 0.09,
          },
          "-=0.48",
        );

      gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
        const header = section.querySelector("[data-section-header]");
        const revealItems = section.querySelectorAll("[data-reveal]");

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        });

        if (header) {
          timeline.from(header, {
            autoAlpha: 0,
            y: 34,
            duration: 0.8,
          });
        }

        if (revealItems.length) {
          timeline.from(
            revealItems,
            {
              autoAlpha: 0,
              y: 28,
              scale: 0.98,
              duration: 0.72,
              stagger: 0.08,
            },
            header ? "-=0.38" : 0,
          );
        }
      });

    });

    return () => context.revert();
  }, []);

  return null;
}
