import { useEffect, useRef, useState, useId } from "react";
import PropTypes from "prop-types";
import { Expand, X, ArrowUpRight } from "lucide-react";

export default function ProjectImage({ src, title }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const heading = useId();
  useEffect(() => {
    if (!open) return;
    const node = dialog.current;
    const overflow = document.body.style.overflow;
    node.showModal();
    document.body.style.overflow = "hidden";
    return () => { node.close(); document.body.style.overflow = overflow; };
  }, [open]);
  return (
    <figure className="project-gallery" id="project-preview">
      <button className="project-gallery-trigger" onClick={() => setOpen(true)} aria-label={`Enlarge ${title} screenshot`}>
        <img src={src} alt={`${title} project screenshot`} decoding="async" />
        <span><Expand size={16} /> View full image</span>
      </button>
      <figcaption>Project preview <span>Original image · click to enlarge</span></figcaption>
      <dialog ref={dialog} className="image-dialog" aria-labelledby={heading} onCancel={(event) => { event.preventDefault(); setOpen(false); }} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="image-dialog-bar"><h2 id={heading}>{title}</h2><button autoFocus onClick={() => setOpen(false)} aria-label="Close image"><X size={22} /></button></div>
        <img src={src} alt={`${title} full screenshot`} />
        <a href={src} target="_blank" rel="noopener noreferrer">Open original image <ArrowUpRight size={16} /></a>
      </dialog>
    </figure>
  );
}
ProjectImage.propTypes = { src: PropTypes.string.isRequired, title: PropTypes.string.isRequired };
