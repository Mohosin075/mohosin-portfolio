// Small utility to reveal elements on scroll using IntersectionObserver
export default function initReveal() {
  if (typeof window === "undefined") return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll('[data-animate="reveal"]').forEach((el) => {
    el.classList.add("revealable");
    observer.observe(el);
  });
}
