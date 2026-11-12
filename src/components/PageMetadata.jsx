import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadProjects } from '../utils/loadProjects';
import { pageMetadata } from '../utils/metadata';

export default function PageMetadata() {
  const { pathname, hash, key: locationKey } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    let frame = 0;
    let timer;
    let stopped = false;
    const align = () => {
      frame = 0;
      if (stopped) return;
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        if (!timer) timer = setTimeout(stop, 2000);
      }
    };
    const schedule = () => { if (!stopped && !frame) frame = requestAnimationFrame(align); };
    const changes = new MutationObserver(schedule);
    changes.observe(document.querySelector('main'), { childList: true, subtree: true });
    const resize = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
    resize?.observe(document.querySelector('main'));
    const stop = () => { stopped = true; changes.disconnect(); resize?.disconnect(); cancelAnimationFrame(frame); };
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', stop);
    schedule();
    return () => { stop(); clearTimeout(timer); window.removeEventListener('wheel', stop); window.removeEventListener('touchstart', stop); window.removeEventListener('keydown', stop); };
  }, [pathname, hash, locationKey]);
  useEffect(() => {
    const controller = new AbortController();
    const apply = (projects = []) => {
      const meta = pageMetadata(pathname, projects);
      document.title = meta.title;
      for (const [key, value] of Object.entries({ description: meta.description, robots: meta.notFound ? 'noindex, follow' : 'index, follow', 'og:title': meta.title, 'og:description': meta.description, 'og:url': meta.url, 'og:image': meta.image, 'twitter:title': meta.title, 'twitter:description': meta.description, 'twitter:image': meta.image })) {
        const attr = key.startsWith('og:') ? 'property' : 'name';
        let node = document.head.querySelector(`meta[${attr}="${key}"]`);
        if (!node) { node = document.createElement('meta'); node.setAttribute(attr, key); document.head.append(node); }
        node.content = value;
      }
      let canonical = document.head.querySelector('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
      canonical.href = meta.url;
    };
    if (pathname.startsWith('/projects/')) {
      document.title = 'Project | Mohosin Ali';
      loadProjects(controller.signal).then(data => { if (!controller.signal.aborted) apply(data); }).catch(() => {});
    } else apply();
    return () => controller.abort();
  }, [pathname]);
  return null;
}
