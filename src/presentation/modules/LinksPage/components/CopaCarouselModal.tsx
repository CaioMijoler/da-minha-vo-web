import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { ModalProps } from "../../../../domain/types";

import imgCopaMenu from "../../../../assets/images/copa-mundo/MENU-COPA.png";
import imgCopaCannelloni from "../../../../assets/images/copa-mundo/CANNELLONI.png";
import imgCopaCappelletti from "../../../../assets/images/copa-mundo/CAPPELLETTI.png";
import imgCopaConchiglioni from "../../../../assets/images/copa-mundo/CONCHIGLIONI.png";
import imgCopaGnocchiR from "../../../../assets/images/copa-mundo/GNOCCHI RECHEADO.png";
import imgCopaRavioli from "../../../../assets/images/copa-mundo/RAVIOLI.png";
import imgCopaRondelli from "../../../../assets/images/copa-mundo/RONDELLI.png";
import imgCopaSofiatelli from "../../../../assets/images/copa-mundo/SOFIATELLI.png";

const COPA_IMAGES = [
  { src: imgCopaMenu, label: "Menu Copa" },
  { src: imgCopaCannelloni, label: "Cannelloni" },
  { src: imgCopaCappelletti, label: "Cappelletti" },
  { src: imgCopaConchiglioni, label: "Conchiglioni" },
  { src: imgCopaGnocchiR, label: "Gnocchi Recheado" },
  { src: imgCopaRavioli, label: "Ravioli" },
  { src: imgCopaRondelli, label: "Rondelli" },
  { src: imgCopaSofiatelli, label: "Sofiatelli" },
];

export function CopaCarouselModal({ isOpen, onClose }: ModalProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % COPA_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % COPA_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + COPA_IMAGES.length) % COPA_IMAGES.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 select-none"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-sm w-full flex flex-col items-center"
        >
          <div className="w-full flex justify-between items-center mb-4 px-2">
            <div>
              <h3 className="text-white font-serif text-lg font-bold">
                Menu Copa do Mundo 2026
              </h3>
              <p className="text-[#fbbd08] text-xs font-semibold uppercase tracking-wider">
                {COPA_IMAGES[index].label}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="relative w-full bg-[#faf6ea] rounded-3xl overflow-hidden shadow-2xl border border-[#e8d9bb]/40">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.img
                key={index}
                src={COPA_IMAGES[index].src}
                alt={COPA_IMAGES[index].label}
                custom={direction}
                initial={{ x: direction * 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 150, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="w-full flex items-center justify-center gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 shadow-lg cursor-pointer"
              aria-label="Anterior"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="flex gap-1.5 items-center">
              {COPA_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[#fbbd08]" : "w-2 bg-white/30"}`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 shadow-lg cursor-pointer"
              aria-label="Próximo"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <span className="text-white/40 text-xs font-mono font-bold tracking-wider mt-1">
            {index + 1} / {COPA_IMAGES.length}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
