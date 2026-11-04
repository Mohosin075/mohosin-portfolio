import ProfileImage from "../ProfileImage";
import { NavLink } from "react-router-dom";
import { ArrowRight, Download, MapPin, Server, Database, Layout, Cpu } from "lucide-react";

import Projects from "../projects/Projects";



const skillCategories = [
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "Socket.io", "REST API", "JWT", "Zod"]
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma"]
  },
  {
    title: "Frontend & Client",
    icon: Layout,
    skills: ["React.js", "TypeScript"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cpu,
    skills: ["Docker", "AWS S3", "Stripe", "OpenAI"]
  }
];

const experience = [
  {
    role: "Jr. Backend Developer",
    company: "Sparktech Agency",
    period: "Jun 2025 – Present",
    bullets: [
      "Developing Node.js, Express and TypeScript APIs backed by MongoDB.",
      "Implementing authentication, subscriptions, real-time messaging and background jobs across client projects.",
      "Building Next.js admin interfaces and collaborating with frontend and Flutter teams on API integration.",
      "Applying request validation, error handling and API documentation to support ongoing development.",
    ],
    stack: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT"],
  },
];

const Home = () => (
  <div className="home-page redesign-home">
    <section className="editorial-hero CC">
      <div className="hero-topline"><span className="eyebrow">Independent thinking. Practical engineering.</span><span className="hero-location"><MapPin size={14} /> Dhaka, Bangladesh</span></div>
      <div className="editorial-hero-grid">
        <div className="editorial-hero-copy">
          <p className="hero-greeting">Hello, I&apos;m Mohosin Ali.</p>
          <h1>Behind the scenes.<br /><em>Ahead of the curve.</em></h1>
          <p className="hero-role">Backend Developer <span>/</span> Full Stack Engineer</p>
          <p className="hero-description">I build Node.js and TypeScript backends, connect complex integrations, and bring products to life with React and Next.js.</p>
          <div className="editorial-actions"><NavLink to="/projects" className="btn-v">Explore my work <ArrowRight size={18} /></NavLink><a className="text-link" href="https://docs.google.com/document/d/1OA-QK-BmcS-EdEjjR7k-SxCj2OEPz6mYWwpGaVuzwh0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View resume <Download size={16} /></a></div>
          <p className="hero-notice"><span />Serving notice &middot; Open to Backend & Full Stack roles</p>
        </div>
        <div className="editorial-portrait">
          <div className="portrait-index"><span>01 / INTRODUCTION</span><span>MOHOSIN ALI</span></div>
          <div className="editorial-portrait-image"><ProfileImage sizes="(min-width: 1100px) 380px, (min-width: 800px) 320px, (min-width: 640px) 360px, 280px" /></div>
          <div className="portrait-caption"><span>Backend at Sparktech Agency</span><span>Since Jun &apos;25 <ArrowRight size={16} /></span></div>
        </div>
      </div>
      <div className="expertise-strip"><span>Built with purpose</span><p>Node.js <i /> TypeScript <i /> MongoDB <i /> React <i /> Next.js</p><a href="#selected-work" aria-label="Scroll to selected work">Scroll to explore &#8595;</a></div>
    </section>
    <section className="editorial-section CC" id="selected-work">
      <div className="editorial-section-heading"><div><span className="eyebrow">01 / Selected work</span><h2>From idea to<br /><em>working product.</em></h2></div><div><p>A selection of backend systems, integrations and full-stack applications.</p><NavLink className="text-link" to="/projects">All projects <ArrowRight size={18} /></NavLink></div></div>
      <Projects limit={3} />
    </section>
    <section className="expertise-section">
      <div className="CC"><div className="editorial-section-heading"><div><span className="eyebrow">02 / My toolkit</span><h2>The right tools.<br /><em>Thoughtfully applied.</em></h2></div><p>From API design to the interface, I work across the layers that make a product useful.</p></div>
      <div className="editorial-skills">{skillCategories.map((group,index)=><div key={group.title}><span className="skill-number">0{index+1}</span><group.icon size={24} strokeWidth={1.5}/><h3>{group.title}</h3><p>{group.skills.join(' / ')}</p></div>)}</div></div>
    </section>
    <section className="editorial-section CC editorial-experience"><div><span className="eyebrow">03 / Experience</span><h2>Learning by<br /><em>building.</em></h2><NavLink to="/about" className="text-link">More about me <ArrowRight size={18}/></NavLink></div><div>{experience.map(job=><article key={job.company}><p className="eyebrow">{job.period}</p><h3>{job.role}</h3><p className="experience-company">{job.company}</p><ul>{job.bullets.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="editorial-contact CC"><span className="eyebrow">Have something in mind?</span><div><h2>Good work starts<br />with <em>a conversation.</em></h2><NavLink to="/contact" aria-label="Start a conversation" className="contact-circle"><ArrowRight size={36}/></NavLink></div><p>Open to Backend, MERN and Full Stack opportunities.</p><a href="mailto:mohosinali075@gmail.com" className="text-link">mohosinali075@gmail.com</a></section>
  </div>
);
export default Home;
