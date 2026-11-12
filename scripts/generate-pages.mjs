import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pageMetadata, siteUrl } from '../src/utils/metadata.js';

const projects = JSON.parse(await readFile('public/projects.json', 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
const paths = ['/', '/projects', '/contact', ...projects.map(p => `/projects/${p.id}`)];
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const path of paths) {
  const meta = pageMetadata(path, projects);
  let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`);
  const values = { description: meta.description, 'og:title': meta.title, 'og:description': meta.description, 'og:url': meta.url, 'og:image': meta.image, 'twitter:title': meta.title, 'twitter:description': meta.description, 'twitter:image': meta.image };
  for (const [key, value] of Object.entries(values)) {
    html = html.replace(new RegExp(`<meta (?:name|property)="${key}" content="[^"]*"\\s*/?>`), `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escape(value)}" />`);
  }
  html = html.replace('</head>', `<link rel="canonical" href="${escape(meta.url)}" />\n</head>`);
  const directory = path === '/' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${siteUrl}${path}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Generated metadata pages and sitemap for ${paths.length} routes.`);
