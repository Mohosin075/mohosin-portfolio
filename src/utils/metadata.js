export const siteUrl = 'https://mohosin-portfolio.vercel.app';
export function pageMetadata(path, projects = []) {
  const pages = {
    '/': ['Md Mohosin Ali | Backend-focused Full Stack Developer', 'Backend services, real-time systems and React applications. Explore selected work by Md Mohosin Ali, a developer at Sparktech Agency since June 2025.'],
    '/about': ['About Mohosin Ali | Experience & Skills', 'Explore Mohosin Ali’s backend and full-stack skills, education and experience at Sparktech Agency.'],
    '/projects': ['Selected Projects | Mohosin Ali', 'Six selected projects covering backend APIs, subscriptions, background jobs, real-time systems and full-stack development.'],
    '/contact': ['Contact Mohosin Ali | Project & Job Inquiries', 'Get in touch with Mohosin Ali about backend development, full-stack projects, collaboration and job opportunities.'],
  };
  const project = projects.find(p => `/projects/${p.id}` === path);
  const [title, description] = project ? [`${project.title} | Mohosin Ali`, project.description] : (pages[path] || ['Page not found | Mohosin Ali', 'The requested page could not be found.']);
  return { title, description, url: siteUrl + path, image: siteUrl + (project?.image || '/mohosin-social.jpg'), notFound: !pages[path] && !project };
}
