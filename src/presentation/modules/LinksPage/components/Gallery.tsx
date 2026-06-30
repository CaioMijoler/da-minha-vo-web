import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_IMAGES } from "../../../../data/links";
import { Lightbox } from "./Lightbox";
import { LinkColor, LinkType } from "@/domain/enum/LinkType";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const galleryView = GALLERY_IMAGES.filter((item) => item.visible);

  const ITEMS_PER_PAGE = 2;
  const totalPages = Math.ceil(galleryView.length / ITEMS_PER_PAGE);

  const goNext = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(goNext, 4500);
    return () => clearInterval(interval);
  }, [goNext, paused]);

  // Pause briefly after manual nav
  const handleManualNav = (dir: "prev" | "next") => {
    if (dir === "prev") goPrev();
    else goNext();
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  };

  const startIdx = page * ITEMS_PER_PAGE;
  const visibleItems = galleryView.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <>
      <div className="relative">
        {/* Arrow left */}
        <button
          onClick={() => handleManualNav("prev")}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
        >
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
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Cards */}
        <div className="mx-6 overflow-x-clip px-1 py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="flex gap-2.5"
            >
              {visibleItems.map((item, i) => (
                <motion.button
                  key={startIdx + i}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActive(startIdx + i)}
                  className="flex-1 rounded-xl overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-[#fbbd08] transition-colors relative"
                  style={{ height: 240 }}
                >
                  <span
                    style={{
                      background:
                        item.type !== LinkType.Premium
                          ? LinkColor[item.type]
                          : LinkColor[LinkType.Premium],
                    }}
                    className="flex justify-center text-white font-bold text-sm"
                  >
                    {item.type}
                  </span>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 py-2">
                    <span className="text-white text-[10px] font-bold tracking-wide uppercase block truncate">
                      {item.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow right */}
        <button
          onClick={() => handleManualNav("next")}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
        >
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
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage(i);
                setPaused(true);
                setTimeout(() => setPaused(false), 6000);
              }}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === page
                  ? "w-5 h-1.5 bg-[#fbbd08]"
                  : "w-1.5 h-1.5 bg-[#faf6ea]/30 hover:bg-[#faf6ea]/50"
              }`}
            />
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          src={galleryView[active].src}
          alt={galleryView[active].label}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
