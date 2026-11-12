export const siteUrl = 'https://mohosin-portfolio.vercel.app';
export function pageMetadata(path, projects = []) {
  const pages = {
    '/': ['Md Mohosin Ali | Full Stack Developer', 'Full Stack Developer delivering React and Next.js applications, TypeScript APIs, AI integrations and cloud deployments. Backend Developer at Sparktech Agency since June 2025.'],
  };
  const project = projects.find(p => `/projects/${p.id}` === path);
  const [title, description] = project ? [`${project.title} | Mohosin Ali`, project.description] : (pages[path] || ['Page not found | Mohosin Ali', 'The requested page could not be found.']);
  return { title, description, url: siteUrl + path, image: siteUrl + (project?.image || '/mohosin-social.jpg'), notFound: !pages[path] && !project };
}
