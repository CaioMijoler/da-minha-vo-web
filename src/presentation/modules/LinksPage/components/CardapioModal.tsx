import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CardapioOption {
  label: string;
  src: string;
  activeColor?: string;
}

interface CardapioModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: CardapioOption[];
}

export function CardapioModal({
  isOpen,
  onClose,
  options,
}: CardapioModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Reset to first tab when modal opens
  useEffect(() => {
    if (isOpen) setActiveIndex(0);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-5 select-none"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 22, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-sm w-full flex flex-col items-center"
        >
          {/* Close button */}
          <div className="w-full flex justify-end mb-2">
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

          {/* Tabs */}
          <div className="w-full bg-[#faf6ea] rounded-t-2xl overflow-hidden">
            <div className="flex">
              {options.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => setActiveIndex(i)}
                  style={
                    activeIndex === i
                      ? {
                          backgroundColor: opt.activeColor || "#bc4626",
                          color: "#fff",
                        }
                      : undefined
                  }
                  className={`
                    flex-1 py-3 text-xs font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer relative
                    ${
                      activeIndex === i
                        ? "shadow-inner"
                        : "bg-[#faf6ea] text-[#3d1a04]/70 hover:bg-[#f0e6d0]"
                    }
                  `}
                >
                  {opt.label}
                  {activeIndex === i && (
                    <motion.div
                      layoutId="cardapio-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#fbbd08]"
                      transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Image area */}
          <div className="w-full bg-[#1a1a1a] rounded-b-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={options[activeIndex].src}
                alt={options[activeIndex].label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full object-contain"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
