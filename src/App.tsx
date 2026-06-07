import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Image imports ────────────────────────────────────────────────────────────
import imgAgnolotti from "./assets/images/AGNOLOTTI.png";
import imgCannelloni from "./assets/images/CANNELLONI.png";
import imgCappelletti from "./assets/images/CAPPELLETTI.png";
import imgConchiglioni from "./assets/images/CONCHIGLIONI.png";
import imgGnocchiR from "./assets/images/GNOCCHI RECHEADO.png";
import imgGnocchi from "./assets/images/GNOCCHI.png";
import imgMolhos from "./assets/images/MOLHOS.png";
import imgRavioli from "./assets/images/RAVIOLI.png";
import imgRondelli from "./assets/images/RONDELLI.png";
import imgSofiatelli from "./assets/images/SOFIATELLI (1).png";
import imgTortellini from "./assets/images/TORTELLINI.png";
import imgCardapio from "./assets/images/cardapio/cardapio-tradicional.jpeg";

// ─── Data ─────────────────────────────────────────────────────────────────────
const GALLERY_IMAGES = [
  { src: imgAgnolotti, label: "Agnolotti" },
  { src: imgCannelloni, label: "Cannelloni" },
  { src: imgCappelletti, label: "Cappelletti" },
  { src: imgConchiglioni, label: "Conchiglioni" },
  { src: imgGnocchiR, label: "Gnocchi Recheado" },
  { src: imgGnocchi, label: "Gnocchi" },
  { src: imgMolhos, label: "Molhos" },
  { src: imgRavioli, label: "Ravioli" },
  { src: imgRondelli, label: "Rondelli" },
  { src: imgSofiatelli, label: "Sofiatelli" },
  { src: imgTortellini, label: "Tortellini" },
];

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

const LINKS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/message/CN67LT2AFS5XP1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
        <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.563 5.404L2 22l4.744-1.544A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2Zm.001 18.182a8.178 8.178 0 0 1-4.162-1.136l-.299-.177-3.097 1.009.808-3.019-.195-.309A8.164 8.164 0 0 1 3.818 12C3.818 7.479 7.479 3.818 12 3.818c4.522 0 8.182 3.661 8.182 8.182 0 4.522-3.66 8.182-8.182 8.182Z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/daminhavo.francasp?igsh=MmloOTllb3o1aGM2",
    icon: (
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
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1J2DKibXFH/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
      </svg>
    ),
  },
];

// ─── Logo SVG Component ───────────────────────────────────────────────────────
function BrandLogo() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full select-none"
      style={{ background: "transparent" }}
    >
      <text
        x="100"
        y="28"
        textAnchor="middle"
        fill="#2d423b"
        fontFamily="Cinzel, serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="3"
      >
        DESDE
      </text>
      <text
        x="100"
        y="38"
        textAnchor="middle"
        fill="#2d423b"
        fontFamily="Cinzel, serif"
        fontSize="8"
        fontWeight="600"
        letterSpacing="4"
      >
        1894
      </text>
      <defs>
        <path id="arch" d="M 20,88 A 142,112 0 0,1 180,88" fill="none" />
      </defs>
      <text
        fontFamily="Cinzel, serif"
        fontWeight="900"
        fontSize="23"
        fill="#bc4626"
        letterSpacing="-0.5"
      >
        <textPath href="#arch" startOffset="50%" textAnchor="middle">
          DA MINHA VÓ
        </textPath>
      </text>
      <g transform="translate(0, 104)">
        <line
          x1="18"
          y1="6"
          x2="60"
          y2="6"
          stroke="#c0b9a8"
          strokeWidth="0.7"
        />
        <text
          x="100"
          y="9.5"
          textAnchor="middle"
          fill="#2d423b"
          fontFamily="Cinzel, serif"
          fontSize="7.5"
          fontWeight="600"
          letterSpacing="2.5"
        >
          MASSAS AFETIVAS
        </text>
        <line
          x1="140"
          y1="6"
          x2="182"
          y2="6"
          stroke="#c0b9a8"
          strokeWidth="0.7"
        />
      </g>
      {/* Folk rosette */}
      <g transform="translate(100, 158)">
        {[0, 90, 180, 270].map((r) => (
          <g key={r} transform={`rotate(${r})`}>
            <path
              d="M 0,-1 C -2.2,-4.5 -5,-6 -5,-9.5 C -5,-13 -1.8,-14 0,-10.5 C 1.8,-14 5,-13 5,-9.5 C 5,-6 2.2,-4.5 0,-1 Z"
              fill="#bc4626"
            />
          </g>
        ))}
        {[45, 135, 225, 315].map((r) => (
          <g key={r} transform={`rotate(${r})`}>
            <circle cx="0" cy="-11.5" r="1.8" fill="#2d423b" />
            <line
              x1="0"
              y1="-1"
              x2="0"
              y2="-9.5"
              stroke="#2d423b"
              strokeWidth="0.8"
            />
          </g>
        ))}
        <circle cx="0" cy="0" r="3" fill="#2d423b" />
        <circle cx="0" cy="0" r="1.2" fill="#faf6ea" />
      </g>
    </svg>
  );
}

// ─── Gallery Lightbox ─────────────────────────────────────────────────────────
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-12"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full"
        >
          <img
            src={src}
            alt={alt}
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-8 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            aria-label="Fechar"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Auto-sliding gallery ─────────────────────────────────────────────────────
function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const CARD_W = 140; // px (card width + gap)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const maxOffset = (GALLERY_IMAGES.length - 2) * CARD_W;
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
          transition={{ type: "spring", damping: 32, stiffness: 180 }}
        >
          {GALLERY_IMAGES.map((item, i) => (
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
          src={GALLERY_IMAGES[active].src}
          alt={GALLERY_IMAGES[active].label}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

// ─── Wednesday Promo Banner ────────────────────────────────────────────────────────────────
const IS_WEDNESDAY = new Date().getDay() === 3;

function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!IS_WEDNESDAY || !visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 180, delay: 0.4 }}
        className="w-full bg-[#a83d20] border-b border-[#8c3219] z-20 relative"
        id="promo-banner"
      >
        {/* Scrolling ticker text */}
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
                com 15% OFF &nbsp;&nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main banner */}
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Tag icon */}
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
                Na compra de 2 massas, leve o molho com 15% DE DESCONTO!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://wa.me/message/CN67LT2AFS5XP1"
              target="_blank"
              rel="noopener noreferrer"
              id="promo-cta"
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

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [cardapioOpen, setCardapioOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#bc4626] flex flex-col items-center font-sans select-none overflow-x-hidden relative">
      {/* ── Wednesday Promo Banner ── */}
      <PromoBanner />

      {/* ── Wavy cream header ── */}
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

      {/* ── Dot texture overlay ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.05] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-sm px-4 flex flex-col items-center pb-16 pt-10">
        {/* ── Brand logo card ── */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 18,
            stiffness: 120,
            delay: 0.05,
          }}
          className="w-40 h-40 bg-[#fdfaf2] rounded-3xl p-3 shadow-2xl border border-[#e8d9bb]/40 flex items-center justify-center mb-6 hover:rotate-1 transition-transform duration-500 cursor-default"
          id="brand-logo"
        >
          <BrandLogo />
        </motion.div>

        {/* ── Tagline ── */}
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

        {/* ── Link pills ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col gap-3 mb-10"
        >
          {/* Cardápio – opens local image */}
          <motion.button
            id="link-cardapio"
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

          {/* Social links */}
          {LINKS.map((link, i) => (
            <motion.a
              key={link.id}
              id={`link-${link.id}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.29 + i * 0.07,
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

        {/* Cardápio lightbox */}
        {cardapioOpen && (
          <Lightbox
            src={imgCardapio}
            alt="Cardápio Da Minha Vó"
            onClose={() => setCardapioOpen(false)}
          />
        )}

        {/* ── Gallery section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="w-full"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-[#faf6ea]/20" />
            <span className="text-[#fbbd08] font-display text-[10px] font-bold tracking-[0.22em] uppercase whitespace-nowrap">
              Nossas Delícias Artesanais
            </span>
            <div className="flex-1 h-px bg-[#faf6ea]/20" />
          </div>

          {/* Sliding gallery */}
          <Gallery />

          {/* Gallery hint */}
          <p className="text-center text-[#faf6ea]/40 text-[10px] mt-3 tracking-wide">
            Toque para ampliar · desliza automaticamente
          </p>
        </motion.div>

        {/* ── Footer ── */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center space-y-1"
        >
          <div className="flex items-center justify-center gap-2 text-[#faf6ea]/30">
            <div className="h-px w-8 bg-[#faf6ea]/20" />
            <span className="text-[9px] font-display tracking-[0.3em] uppercase">
              Da Minha Vó
            </span>
            <div className="h-px w-8 bg-[#faf6ea]/20" />
          </div>
          <p className="text-[#faf6ea]/25 text-[9px] tracking-widest uppercase font-mono">
            Massas Artesanais · Franca SP
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
