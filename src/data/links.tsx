import imgAgnolotti from "../assets/images/AGNOLOTTI.png";
import imgCannelloni from "../assets/images/CANNELLONI.png";
import imgCappelletti from "../assets/images/CAPPELLETTI.png";
import imgConchiglioni from "../assets/images/CONCHIGLIONI.png";
import imgGnocchiR from "../assets/images/GNOCCHI RECHEADO.png";
import imgGnocchi from "../assets/images/GNOCCHI.png";
import imgMolhos from "../assets/images/MOLHOS.png";
import imgRavioli from "../assets/images/RAVIOLI.png";
import imgRondelli from "../assets/images/RONDELLI.png";
import imgSofiatelli from "../assets/images/SOFIATELLI.png";
import imgTortellini from "../assets/images/TORTELLINI.png";
import imgLasagna from "../assets/images/LASAGNA.png";

// Premium imports
import imgBomboloni from "../assets/images/premium/BOMBOLONI.png";
import imgCappellettoni from "../assets/images/premium/CAPPELLETTONI.png";
import imgFagottini from "../assets/images/premium/FAGOTTINI.png";
import imgFiori from "../assets/images/premium/FIORI.png";
import imgMezzelune from "../assets/images/premium/MEZZELUNE.png";
import imgPansoti from "../assets/images/premium/PANSOTI.png";
import imgRavioloni from "../assets/images/premium/RAVIOLONI.png";
import imgSacottini from "../assets/images/premium/SACOTTINI.png";
import imgSorrentino from "../assets/images/premium/SORRENTINO.png";
import imgTortelloni from "../assets/images/premium/TORTELLONI.png";

import type { GalleryImage } from "../domain/types";
import { LinkType } from "@/domain/enum/LinkType";

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: imgAgnolotti,
    label: "Agnolotti",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgCannelloni,
    label: "Cannelloni",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgCappelletti,
    label: "Cappelletti",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgConchiglioni,
    label: "Conchiglioni",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgGnocchiR,
    label: "Gnocchi Recheado",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgGnocchi,
    label: "Gnocchi",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgMolhos,
    label: "Molhos",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgRavioli,
    label: "Ravioli",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgRondelli,
    label: "Rondelli",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgSofiatelli,
    label: "Sofiatelli",
    visible: true,
    type: LinkType.Tradicional,
  },
  {
    src: imgTortellini,
    label: "Tortellini",
    visible: false,
    type: LinkType.Tradicional,
  },
  {
    src: imgLasagna,
    label: "Lasagna",
    visible: true,
    type: LinkType.Arte_Al_Forno,
  },

  // Premium options
  {
    src: imgBomboloni,
    label: "Bomboloni",
    visible: true,
    type: LinkType.Premium,
  },
  {
    src: imgCappellettoni,
    label: "Cappellettoni",
    visible: true,
    type: LinkType.Premium,
  },
  {
    src: imgFagottini,
    label: "Fagottini",
    visible: true,
    type: LinkType.Premium,
  },
  { src: imgFiori, label: "Fiori", visible: true, type: LinkType.Premium },
  {
    src: imgMezzelune,
    label: "Mezzelune",
    visible: false,
    type: LinkType.Premium,
  },
  { src: imgPansoti, label: "Pansoti", visible: true, type: LinkType.Premium },
  {
    src: imgRavioloni,
    label: "Ravioloni",
    visible: true,
    type: LinkType.Premium,
  },
  {
    src: imgSacottini,
    label: "Sacottini",
    visible: false,
    type: LinkType.Premium,
  },
  {
    src: imgSorrentino,
    label: "Sorrentino",
    visible: true,
    type: LinkType.Premium,
  },
  {
    src: imgTortelloni,
    label: "Tortelloni",
    visible: true,
    type: LinkType.Premium,
  },
];

export const LINKS = [
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

export const COPA_IMAGES: GalleryImage[] = []; // preenchido no componente com os imports de copa
