import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BrandLogo } from "../../../shared/components/BrandLogo";
import { PromoBanner } from "./components/PromoBanner";
import { Gallery } from "./components/Gallery";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Lightbox } from "./components/Lightbox";
import { CopaPromoModal } from "./components/CopaPromoModal";
import { CopaCarouselModal } from "./components/CopaCarouselModal";
import { LINKS } from "../../../data/links";
import imgCardapio from "../../../assets/images/cardapio/cardapio-tradicional.jpeg";

const CARDAPIO_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export function LinksPage() {
  const [cardapioOpen, setCardapioOpen] = useState(false);
  const [copaPromoOpen, setCopaPromoOpen] = useState(false);
  const [copaCarouselOpen, setCopaCarouselOpen] = useState(false);
  const SHOW_COPA = import.meta.env.VITE_SHOW_COPA === true;

  useEffect(() => {
    if (!SHOW_COPA) return;
    const timer = setTimeout(() => setCopaPromoOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#bc4626] flex flex-col items-center font-sans select-none overflow-x-hidden relative">
      <PromoBanner />

      <div className="absolute top-0 left-0 right-0 h-52 z-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="#faf6ea"
        >
          <path d="M0,0 L1440,0 L1440,110 Q1080,165 720,148 Q360,130 0,165 Z" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.05] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-sm px-4 flex flex-col items-center pb-6 pt-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 18,
            stiffness: 120,
            delay: 0.05,
          }}
          className="w-40 h-40 bg-[#faf6ea] rounded-3xl p-2.5 shadow-2xl border border-[#e8d9bb]/40 flex items-center justify-center mb-6 hover:rotate-1 transition-transform duration-500 cursor-default"
        >
          <BrandLogo />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-center mb-8 space-y-1"
        >
          <div className="flex items-center justify-center gap-2 text-[#fbbd08] font-display text-[11px] font-bold tracking-[0.28em] uppercase">
            <span>✦✦✦</span>
            <span>FAÇA O SEU PEDIDO</span>
            <span>✦✦✦</span>
          </div>
          <p className="text-[#faf6ea]/85 font-serif text-sm tracking-wide">
            Unidade Franca · SP
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col gap-3 mb-8"
        >
          {/* Cardápio */}
          <motion.button
            onClick={() => setCardapioOpen(true)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.22,
              type: "spring",
              damping: 20,
              stiffness: 220,
            }}
            whileHover={{
              scale: 1.025,
              y: -2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#fbbd08] hover:bg-[#ffc924] text-[#3d1a04] py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 shadow-lg transition-colors duration-200 font-bold text-sm tracking-wide border border-black/[0.04] cursor-pointer"
          >
            <span className="opacity-80">{CARDAPIO_ICON}</span>
            <span>Cardápio</span>
          </motion.button>

          {/* Copa 2026 */}
          {SHOW_COPA && (
            <motion.button
              onClick={() => setCopaCarouselOpen(true)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.29,
                type: "spring",
                damping: 20,
                stiffness: 220,
              }}
              whileHover={{
                scale: 1.025,
                y: -2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#2d423b] hover:bg-[#1f2e29] text-[#faf6ea] py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 shadow-lg transition-colors duration-200 font-bold text-sm tracking-wide border border-black/[0.04] cursor-pointer"
            >
              <span className="text-[#fbbd08]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              </span>
              <span>Promoção Copa 2026</span>
              <span className="text-[#fbbd08] text-[10px] font-black tracking-widest ml-1">
                🏆
              </span>
            </motion.button>
          )}
          {/* Redes sociais */}
          {LINKS.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.36 + i * 0.07,
                type: "spring",
                damping: 20,
                stiffness: 220,
              }}
              whileHover={{
                scale: 1.025,
                y: -2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#fbbd08] hover:bg-[#ffc924] text-[#3d1a04] py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 shadow-lg transition-colors duration-200 font-bold text-sm tracking-wide border border-black/[0.04]"
            >
              <span className="opacity-80">{link.icon}</span>
              <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {cardapioOpen && (
          <Lightbox
            src={imgCardapio}
            alt="Cardápio Da Minha Vó"
            onClose={() => setCardapioOpen(false)}
          />
        )}

        <CopaPromoModal
          isOpen={copaPromoOpen}
          onClose={() => setCopaPromoOpen(false)}
          onOpenCarousel={() => {
            setCopaPromoOpen(false);
            setCopaCarouselOpen(true);
          }}
        />
        <CopaCarouselModal
          isOpen={copaCarouselOpen}
          onClose={() => setCopaCarouselOpen(false)}
        />

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="w-full"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-[#faf6ea]/20" />
            <span className="text-[#fbbd08] font-display text-[10px] font-bold tracking-[0.22em] uppercase whitespace-nowrap">
              Nossas Delícias Artesanais
            </span>
            <div className="flex-1 h-px bg-[#faf6ea]/20" />
          </div>
          <Gallery />
          <p className="text-center text-[#faf6ea]/40 text-[10px] mt-3 tracking-wide">
            Toque para ampliar · desliza automaticamente
          </p>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center space-y-1"
        >
          <div className="flex items-center justify-center gap-2 text-[#faf6ea]/30">
            <div className="h-px w-8 bg-[#faf6ea]/20" />
            <span className="text-[#fbbd08] text-[9px] font-display tracking-[0.3em] uppercase">
              Da Minha Vó
            </span>
            <div className="h-px w-8 bg-[#faf6ea]/20" />
          </div>
          <p className="text-[#fbbd08] text-[9px] tracking-widest uppercase font-mono">
            Massas Artesanais · Franca SP
          </p>
        </motion.footer>
      </div>

      <FloatingWhatsApp />
    </div>
  );
}
