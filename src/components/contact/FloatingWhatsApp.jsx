import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            style={{
              background: "var(--surface-2, #18181b)",
              color: "var(--chalk, #ffffff)",
              padding: "8px 16px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              border: "1px solid var(--border, rgba(255,255,255,0.1))",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        aria-label="Chat on WhatsApp" href="https://wa.me/8801981381383"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 23,
          boxShadow: "none",
          cursor: "pointer",
          textDecoration: "none",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 6px 24px rgba(37, 211, 102, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
