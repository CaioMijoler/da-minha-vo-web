import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const IS_WEDNESDAY = new Date().getDay() === 3;

export function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!IS_WEDNESDAY || !visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 180, delay: 0.4 }}
        className="w-full bg-[#a83d20] border-b border-[#8c3219] z-[2] relative"
      >
        <div className="overflow-hidden py-0.5 bg-[#8c3219]">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-[#fbbd08] text-[9px] font-bold tracking-[0.2em] uppercase"
              >
                ✦ Quarta-feira de Desconto · Na compra de 2 massas, leve o molho
                com 10% OFF &nbsp;&nbsp;
              </span>
            ))}
          </motion.div>
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-[#fbbd08] flex-shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42z" />
                <circle cx="6.5" cy="6.5" r="1.5" fill="#a83d20" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-white font-bold text-sm tracking-wide leading-tight">
                PROMOÇÃO ESPECIAL
              </p>
              <p className="text-[#fbbd08] text-[11px] font-medium leading-tight truncate">
                Na compra de 2 massas, leve o molho com 10% DE DESCONTO!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://wa.me/5516993048907?text=Olá!%20Quero%20aproveitar%20a%20promoção%3A%202%20massas%20%2B%201%20molho%20com%205%210%20OFF!%20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbbd08] hover:bg-[#ffc924] text-[#3d1a04] text-[11px] font-bold px-3 py-1.5 rounded-md whitespace-nowrap transition-colors shadow-md"
            >
              APROVEITAR AGORA
            </a>
            <button
              onClick={() => setVisible(false)}
              aria-label="Fechar promoção"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg
                width="14"
                height="14"
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
