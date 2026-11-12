import { experience, profile } from "../../data/profile";
import ProfileImage from "../ProfileImage";
import { NavLink } from "react-router-dom";
import { ArrowRight, Download, Server, Database, Layout, Cpu, Briefcase, FolderOpen, MessageSquare } from "lucide-react";
import SectionHeading from "../SectionHeading";

import Projects from "../projects/Projects";
import "./CoreTechnologies.css";


const skillCategories = [
  {
    title: "Backend & APIs",
    description: "The logic, APIs and real-time features behind the product.",
    icon: Server,
    skills: ["Node.js", "Express.js", "Socket.io", "REST API", "JWT", "Zod"]
  },
  {
    title: "Databases & Caching",
    description: "Store, organize and retrieve application data.",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma"]
  },
  {
    title: "Frontend & Client",
    description: "Responsive interfaces people see and interact with.",
    icon: Layout,
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "DevOps & Cloud",
    description: "Deploy, host and keep applications running in production.",
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
          <h1 className="hero-title"><span className="hero-title-line">Building Scalable</span>{" "}<span className="hero-title-line">Solutions for</span>{" "}<span className="hero-title-line hero-name-period">Real Problems.</span></h1>
          <p className="hero-description">I turn complex ideas into reliable, scalable digital products — from initial concept and system architecture to seamless user experiences and production deployment.</p>
          <div className="editorial-actions"><NavLink to="/projects" className="btn-v">Explore my work <ArrowRight size={18} /></NavLink><a className="text-link" href="/mohosin-ali-resume.pdf" download>Download resume <Download size={16} /></a></div>
        </div>
        <figure className="editorial-portrait hero-portrait">
          <figcaption className="hero-notice"><span aria-hidden="true" />{profile.availability}</figcaption>
          <div className="editorial-portrait-image"><ProfileImage sizes="(min-width: 1920px) 480px, (min-width: 1440px) 25vw, (min-width: 1100px) 380px, (min-width: 800px) 36vw, (min-width: 380px) 300px, calc(100vw - 40px)" /></div>
        </figure>
      </div>
      <div className="core-stack" aria-labelledby="core-stack-heading">
        <SectionHeading className="core-stack-intro" label="My toolkit" title="One stack." accent="Every layer." description="From the interface to the infrastructure — the tools I use and what each layer does." id="core-stack-heading" />
        <NavLink className="core-stack-explore" to="/about"><span>Full skills & experience</span><ArrowRight size={18} aria-hidden="true" /></NavLink>
        <div className="stack-category-grid">
          {skillCategories.map(({ title, description, icon: Icon, skills }) => (
            <article className="stack-category" key={title}>
              <span className="stack-category-icon"><Icon size={26} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="stack-tool-list" aria-label={`${title} technologies`}>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="editorial-section CC" id="selected-work">
      <div className="editorial-section-heading"><SectionHeading label="01 / Selected work" title="Selected" accent="projects." description="Travel mapping, social publishing and full-stack products built for real workflows." icon={FolderOpen} /><NavLink className="text-link" to="/projects">All projects <ArrowRight size={18} /></NavLink></div>
      <Projects limit={3} />
    </section>
    <section className="editorial-section CC editorial-experience"><div><SectionHeading label="02 / Experience" title="Building in" accent="practice." description="Backend and full-stack development at Sparktech Agency." icon={Briefcase} /><NavLink to="/about" className="text-link">More about me <ArrowRight size={18}/></NavLink></div><div>{experience.map(job=><article key={job.company}><p className="eyebrow">{job.period}</p><h3>{job.role}</h3><p className="experience-company">{job.company}</p><ul>{job.bullets.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="editorial-contact CC"><div><SectionHeading label="Have something in mind?" title="Let's build" accent="something useful." description="Open to Full Stack and Backend roles, and relevant project opportunities." icon={MessageSquare} /><NavLink to="/contact" aria-label="Start a conversation" className="contact-circle"><ArrowRight size={36}/></NavLink></div><a href="mailto:mohosinali075@gmail.com" className="text-link">mohosinali075@gmail.com</a></section>
  </div>
);
export default Home;
