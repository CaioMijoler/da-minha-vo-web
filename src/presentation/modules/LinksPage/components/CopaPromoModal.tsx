import { motion, AnimatePresence } from "motion/react";
import imgCopaMenu from "../../../../assets/images/copa-mundo/MENU-COPA.png";
import type { PromoModalProps } from "../../../../domain/types";

export function CopaPromoModal({
  isOpen,
  onClose,
  onOpenCarousel,
}: PromoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[#faf6ea] rounded-3xl overflow-hidden shadow-2xl border border-[#e8d9bb]/40 flex flex-col my-4"
        >
          <div className="bg-[#bc4626] py-4 px-6 text-center border-b border-[#a83d20] relative">
            <h2 className="text-[#fbbd08] font-display text-base font-black tracking-widest uppercase leading-tight select-none">
              🏆 PROMOÇÃO COPA 2026 🏆
            </h2>
            <p className="text-white/80 text-[10px] uppercase font-bold tracking-wider mt-1 select-none">
              Massas Especiais para Torcer Juntos
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/25 text-white flex items-center justify-center hover:bg-black/40 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="p-2 sm:p-4 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden border border-black/5 shadow-md">
              <img
                src={imgCopaMenu}
                alt="Promoção Copa do Mundo 2026 Menu"
                className="w-full h-auto object-contain max-h-[60vh]"
              />
            </div>
          </div>
          <div className="px-4 pb-5 flex flex-col items-center">
            <button
              onClick={onOpenCarousel}
              className="w-full bg-[#2d423b] hover:bg-[#1f2e29] text-[#faf6ea] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 font-bold text-sm tracking-wide shadow-md transition-colors duration-200 cursor-pointer"
            >
              <span>Conferir o Menu</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
