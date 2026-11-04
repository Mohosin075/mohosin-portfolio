import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadProjects } from '../utils/loadProjects';
import { pageMetadata } from '../utils/metadata';

export default function PageMetadata() {
  const { pathname } = useLocation();
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
    window.scrollTo(0, 0);
    if (pathname.startsWith('/projects/')) {
      document.title = 'Project | Mohosin Ali';
      loadProjects(controller.signal).then(data => { if (!controller.signal.aborted) apply(data); }).catch(() => {});
    } else apply();
    return () => controller.abort();
  }, [pathname]);
  return null;
}
