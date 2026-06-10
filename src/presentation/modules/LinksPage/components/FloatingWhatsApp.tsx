import { motion } from "motion/react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/message/CN67LT2AFS5XP1"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] flex items-center justify-center transition-colors duration-300 group border border-white/10"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-45 animate-ping pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
      <div className="absolute right-full mr-3 bg-white text-[#2a2a2a] text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Fale Conosco!
        <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-white" />
      </div>
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-10"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
        <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.989.574 3.842 1.563 5.404L2 22l4.744-1.544A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2Zm.001 18.182a8.178 8.178 0 0 1-4.162-1.136l-.299-.177-3.097 1.009.808-3.019-.195-.309A8.164 8.164 0 0 1 3.818 12C3.818 7.479 7.479 3.818 12 3.818c4.522 0 8.182 3.661 8.182 8.182 0 4.522-3.66 8.182-8.182 8.182Z" />
      </svg>
    </motion.a>
  );
}
