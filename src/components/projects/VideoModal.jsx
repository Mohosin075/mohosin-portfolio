import { useEffect } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getEmbedUrl = (url) => {
  if (!url) return null;

  // YouTube
  const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const ytMatch = url.match(ytRegex);
  if (ytMatch && ytMatch[1]) {
    return {
      type: "iframe",
      url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`
    };
  }

  // Loom
  const loomRegex = /loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/;
  const loomMatch = url.match(loomRegex);
  if (loomMatch && loomMatch[1]) {
    return {
      type: "iframe",
      url: `https://www.loom.com/embed/${loomMatch[1]}?autoplay=true`
    };
  }

  // Vimeo
  const vimeoRegex = /vimeo\.com\/(?:video\/)?([0-9]+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: "iframe",
      url: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
    };
  }

  // Direct video link (mp4, webm, ogg)
  if (url.match(/\.(mp4|webm|ogg)(?:\?.*)?$/i)) {
    return {
      type: "video",
      url: url
    };
  }

  // Fallback to standard link
  return {
    type: "iframe",
    url: url
  };
};

const VideoModal = ({ isOpen, onClose, videoUrl, projectTitle }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const media = getEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && media && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="video-modal-overlay"
          onClick={onClose}
        >
          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="video-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="video-modal-header">
              <div>
                <span className="code-label" style={{ fontSize: 10, color: "var(--vermillion)", display: "block", marginBottom: 2 }}>
                  Video Walkthrough
                </span>
                <h3 className="font-display" style={{ color: "var(--chalk)", margin: 0 }}>
                  {projectTitle}
                </h3>
              </div>

              <button
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--muted)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--vermillion)";
                  e.currentTarget.style.color = "var(--chalk)";
                  e.currentTarget.style.background = "rgba(232, 57, 30, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Container */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000" }}>
              {media.type === "iframe" ? (
                <iframe
                  src={media.url}
                  title={`${projectTitle} Video Overview`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : (
                <video
                  src={media.url}
                  controls
                  autoPlay
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string,
  projectTitle: PropTypes.string.isRequired,
};

export default VideoModal;
