// app/components/HeroCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Card = ({
  title,
  subtitle,
  image,
  cta,
}: {
  title: string;
  subtitle: string;
  image: string;
  cta?: string;
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden w-full h-96 md:h-[22rem] shadow-md">
      {/* Background image */}
      <Image src={image} alt={title} fill className="object-cover" priority />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {title}
        </h2>
        <p className="mt-2 text-sm max-w-xl">{subtitle}</p>
        {cta && (
          <div className="mt-4">
            <button className="px-4 py-2 bg-white text-slate-900 rounded-full font-semibold shadow-sm hover:-translate-y-0.5 transition-transform">
              {cta}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function HeroCarousel() {
  const cards = [
    { title: "WAN 2.2", subtitle: "Generate complex images with brand news and powerful WAN 2.2 model. Exceptional prompt adherance and ultra realistic textures.", image: "/image1.jpg", cta: "Try WAN 2.2" },
    { title: "FLUX.1 Krea", subtitle: "Open Source model weights Exceptional prompt adherance and ultra realistic textures.", image: "/image2.jpg", cta: "Try WAN 2.2" },
    { title: "WAN 2.2", subtitle: "Generate complex images with brand news and powerful WAN 2.2 model. Exceptional prompt adherance and ultra realistic textures.", image: "/image3.jpg", cta: "Try WAN 2.2" },
    { title: "WAN 2.2", subtitle: "Generate complex images with brand news and powerful WAN 2.2 model. Exceptional prompt adherance and ultra realistic textures.", image: "/image4.jpg", cta: "Try WAN 2.2" },
    { title: "WAN 2.2", subtitle: "Generate complex images with brand news and powerful WAN 2.2 model. Exceptional prompt adherance and ultra realistic textures.", image: "/image5.jpg", cta: "Try WAN 2.2" },
    { title: "WAN 2.2", subtitle: "Generate complex images with brand news and powerful WAN 2.2 model. Exceptional prompt adherance and ultra realistic textures.", image: "/image6.jpg", cta: "Try WAN 2.2" },
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = forward, -1 = backward

  const [slideWidthPx, setSlideWidthPx] = useState<number | null>(null);
  const [gapPx, setGapPx] = useState<number>(0);
  const gapClass = "gap-10";

  // measure slide width
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const first = trackRef.current.querySelector<HTMLElement>(".slide");
      if (!first) return;
      const rect = first.getBoundingClientRect();
      setSlideWidthPx(Math.round(rect.width));
      const styles = window.getComputedStyle(trackRef.current);
      const cg = parseFloat(styles.columnGap || styles.gap || "0") || 0;
      setGapPx(cg);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // auto slide with ping-pong effect
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => {
        if (i === cards.length - 1) {
          setDirection(-1);
          return i - 1;
        }
        if (i === 0) {
          setDirection(1);
          return i + 1;
        }
        return i + direction;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [cards.length, direction]);

  const prevSlide = () => {
    setIndex((i) => Math.max(0, i - 1));
    setDirection(-1);
  };

  const nextSlide = () => {
    setIndex((i) => Math.min(cards.length - 1, i + 1));
    setDirection(1);
  };

  const transformStyle = slideWidthPx
    ? { transform: `translateX(-${index * (slideWidthPx + gapPx)}px)` }
    : { transform: `translateX(-${index * 65}%)` };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 overflow-hidden relative">
      {/* Track */}
      <div
        ref={trackRef}
        className={`flex items-stretch transition-transform duration-700 ease-in-out ${gapClass}`}
        style={transformStyle}
      >
        {cards.map((card, i) => (
          <div key={i} className="slide shrink-0 w-[65%] md:w-[50%]">
            <Card {...card} />
          </div>
        ))}
      </div>

      {/* Controls: dots + arrows */}
      <div className="flex justify-center items-center gap-96 mt-6">
        <div className="flex justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-slate-800" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-9 h-9 flex items-center justify-center bg-white/85 hover:bg-white text-slate-900 rounded-sm shadow-md font-bold"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 flex items-center justify-center bg-white/85 hover:bg-white text-slate-900 rounded-sm shadow-md font-bold"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
