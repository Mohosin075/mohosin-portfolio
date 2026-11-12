import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

const targets = [
  ".hero-topline", ".hero-greeting", ".editorial-hero h1", ".hero-role",
  ".hero-description", ".editorial-actions", ".hero-notice", ".editorial-portrait",
  ".core-stack", ".editorial-section-heading", ".work-card", ".editorial-skills > div",
  ".editorial-experience > div", ".editorial-contact", ".page-heading",
  ".about-grid > div", ".service-card", ".experience-timeline > div",
  ".editorial-history > div:last-child > div:not(.rule-label):not(.section-heading)", ".tech-card", ".contact-grid > div",
  ".case-facts > div", ".project-gallery", ".case-section-label", ".decision-card",
  ".case-outcomes li", ".case-tech-groups > div", ".case-project-links", ".next-project",
  ".profile-languages", ".footer-top > *", ".footer-bottom"
].join(",");

export default function useSiteMotion() {
  const root = useRef(null);
  const completed = useRef(new WeakSet());
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    const host = root.current;
    if (reduced || !host || !window.IntersectionObserver) return;
    const tracked = new Set();
    const frames = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const frame = requestAnimationFrame(() => {
          frames.delete(frame);
          entry.target.dataset.reveal = "visible";
          completed.current.add(entry.target);
        });
        frames.add(frame);
      });
    }, { threshold: 0, rootMargin: "0px 0px -16px 0px" });
    const scan = () => {
      host.querySelectorAll(targets).forEach(node => {
        if (tracked.has(node) || completed.current.has(node)) return;
        tracked.add(node);
        // Stagger only within a sibling group, independent of observer callback order.
        const siblings = [...node.parentElement.children].filter(item => item.matches(targets));
        const delay = Math.min(Math.max(siblings.indexOf(node), 0) * 55, 220);
        node.style.setProperty("--reveal-delay", `${delay}ms`);
        // Elements above the viewport stay visible when following an anchor or restoring scroll.
        node.dataset.reveal = node.getBoundingClientRect().bottom < 0 ? "visible" : "pending";
        observer.observe(node);
      });
    };
    scan();
    const changes = new MutationObserver(scan);
    changes.observe(host, { childList: true, subtree: true });
    const revealFocus = event => {
      const node = event.target.closest('[data-reveal="pending"]');
      if (node) { node.dataset.reveal = "visible"; observer.unobserve(node); completed.current.add(node); }
    };
    host.addEventListener("focusin", revealFocus);
    return () => {
      observer.disconnect(); changes.disconnect();
      frames.forEach(cancelAnimationFrame);
      host.removeEventListener("focusin", revealFocus);
      tracked.forEach(node => { delete node.dataset.reveal; node.style.removeProperty("--reveal-delay"); });
    };
  }, [pathname, reduced]);
  return root;
}
