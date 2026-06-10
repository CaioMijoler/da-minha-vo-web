import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { GALLERY_IMAGES } from "../../../../data/links";
import { Lightbox } from "./Lightbox";

const CARD_W = 140;

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const galleryView = GALLERY_IMAGES.filter((item) => item.visible);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const maxOffset = (galleryView.length - 2) * CARD_W;
        return prev >= maxOffset ? 0 : prev + CARD_W;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ height: 160 }}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-2 absolute"
          animate={{ x: -offset }}
          transition={{ type: "spring", damping: 50, stiffness: 180 }}
        >
          {galleryView.map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(i)}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-[#fbbd08] transition-colors relative"
              style={{ width: 128, height: 156 }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                <span className="text-white text-[9px] font-bold tracking-wide uppercase block truncate">
                  {item.label}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
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
