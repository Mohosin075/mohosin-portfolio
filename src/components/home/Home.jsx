import { experience, profile } from "../../data/profile";
import ProfileImage from "../ProfileImage";
import { NavLink } from "react-router-dom";
import { ArrowRight, Download, Server, Database, Layout, Cpu } from "lucide-react";

import Projects from "../projects/Projects";
import { SiNodedotjs, SiTypescript, SiMongodb, SiReact, SiNextdotjs } from "react-icons/si";

const coreTechnologies = [
  { name: "Node.js", detail: "Runtime", icon: SiNodedotjs },
  { name: "TypeScript", detail: "Language", icon: SiTypescript },
  { name: "MongoDB", detail: "Database", icon: SiMongodb },
  { name: "React", detail: "Interface", icon: SiReact },
  { name: "Next.js", detail: "Framework", icon: SiNextdotjs },
];


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
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cpu,
    skills: ["AWS S3 / EC2", "Docker", "NGINX", "PM2", "CI/CD", "Vercel"]
  }
];



const Home = () => (
  <div className="home-page redesign-home">
    <section className="editorial-hero CC">
      <div className="editorial-hero-grid">
        <div className="editorial-hero-copy">
          <p className="hero-greeting"><span>Mohosin Ali</span><span className="hero-greeting-divider" aria-hidden="true"> / </span><span className="hero-greeting-role">Full Stack Developer</span></p>
          <h1>Building products that solve <span className="hero-name-period">real problems.</span></h1>
          <p className="hero-description">{profile.summary}</p>
          <div className="editorial-actions"><NavLink to="/projects" className="btn-v">Explore my work <ArrowRight size={18} /></NavLink><a className="text-link" href="/mohosin-ali-resume.pdf" download>Download resume <Download size={16} /></a></div>
          <p className="hero-notice"><span />{profile.availability}</p>
        </div>
        <figure className="editorial-portrait hero-portrait">
          <div className="editorial-portrait-image"><ProfileImage sizes="(min-width: 1920px) 480px, (min-width: 1440px) 25vw, (min-width: 1100px) 380px, (min-width: 800px) 36vw, (min-width: 380px) 300px, calc(100vw - 40px)" /></div>
        </figure>
      </div>
      <div className="core-stack" aria-labelledby="core-stack-heading">
        <div className="core-stack-intro"><span className="eyebrow" id="core-stack-heading">Core technologies</span><p>The tools behind the work.</p></div>
        <ul className="core-stack-list">{coreTechnologies.map(({ name, detail, icon: Icon }) => <li key={name}><Icon aria-hidden="true" /><div><span>{name}</span><small>{detail}</small></div></li>)}</ul>
        <a className="core-stack-explore" href="#selected-work"><span>Explore the work</span><ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </section>
    <section className="editorial-section CC" id="selected-work">
      <div className="editorial-section-heading"><div><span className="eyebrow">01 / Selected work</span><h2>Selected projects<span className="heading-period">.</span></h2></div><div><p>Travel mapping, social publishing and full-stack products built for real workflows.</p><NavLink className="text-link" to="/projects">All projects <ArrowRight size={18} /></NavLink></div></div>
      <Projects limit={3} />
    </section>
    <section className="expertise-section">
      <div className="CC"><div className="editorial-section-heading"><div><span className="eyebrow">02 / My toolkit</span><h2>Across the stack.</h2></div><p>React and Next.js interfaces, TypeScript APIs, databases, integrations and cloud deployment.</p></div>
      <div className="editorial-skills">{skillCategories.map((group,index)=><div key={group.title}><span className="skill-number">0{index+1}</span><group.icon size={24} strokeWidth={1.5}/><h3>{group.title}</h3><p>{group.skills.join(' / ')}</p></div>)}</div></div>
    </section>
    <section className="editorial-section CC editorial-experience"><div><span className="eyebrow">03 / Experience</span><h2>Experience.</h2><NavLink to="/about" className="text-link">More about me <ArrowRight size={18}/></NavLink></div><div>{experience.map(job=><article key={job.company}><p className="eyebrow">{job.period}</p><h3>{job.role}</h3><p className="experience-company">{job.company}</p><ul>{job.bullets.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="editorial-contact CC"><span className="eyebrow">Have something in mind?</span><div><h2>Let&apos;s build<br />something useful.</h2><NavLink to="/contact" aria-label="Start a conversation" className="contact-circle"><ArrowRight size={36}/></NavLink></div><p>Open to Full Stack and Backend roles, and relevant project opportunities.</p><a href="mailto:mohosinali075@gmail.com" className="text-link">mohosinali075@gmail.com</a></section>
  </div>
);
export default Home;
