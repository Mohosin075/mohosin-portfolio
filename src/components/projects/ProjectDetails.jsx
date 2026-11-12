import ProjectImage from "./ProjectImage";
import SectionHeading from "../SectionHeading";
import { projectName } from "../../utils/projectName";
import { loadProjects } from "../../utils/loadProjects";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import VideoModal from "./VideoModal";

export default function ProjectDetails() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    loadProjects(controller.signal).then(data => {
      if (controller.signal.aborted) return;
      setProjects(data); setStatus("ready");
    }).catch(() => { if (!controller.signal.aborted) setStatus("error"); });
    return () => controller.abort();
  }, [id, attempt]);
  const index = projects.findIndex(item => String(item.id) === id);
  const project = projects[index];
  const next = projects.length > 1 && index >= 0 ? projects[(index + 1) % projects.length] : null;
  if (status === "error") return <div className="CC page-shell"><div className="state-panel" role="alert"><h1>Could not load this case study.</h1><p>Check your connection and try again.</p><button className="btn-v" onClick={() => setAttempt(n => n + 1)}>Try again</button></div></div>;
  if (status === "loading") return <div className="CC page-shell" role="status" aria-label="Loading case study"><div className="work-skeleton" aria-hidden="true"><div /><span /><span /></div></div>;
  if (!project) return <div className="CC page-shell state-panel"><h1>Project not found.</h1><Link className="text-link" to="/projects">Back to projects <ArrowLeft size={18} /></Link></div>;
  return <article className="case-study-page page-shell">
    <div className="CC">
      <Link to="/projects" className="case-back"><ArrowLeft size={16} /> All projects</Link>
      <header className="page-heading case-heading">
        <span className="eyebrow">Case study / {project.category === "backend" ? "Backend engineering" : "Full-stack development"}</span>
        <h1>{projectName(project.title)}<span className="heading-period">.</span></h1>
        <p>{project.subtitle}</p>
      </header>
      <div className="case-quick-links" aria-label="Project resources">
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-v">Live website <ArrowUpRight size={17} /></a>}
        {project.githubServer && <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="btn-ghost">Backend repository <ArrowUpRight size={17} /></a>}
        {project.githubClient && project.githubClient !== project.githubServer && <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="btn-ghost">Frontend repository <ArrowUpRight size={17} /></a>}
        {project.video && <button className="btn-ghost" onClick={() => setIsModalOpen(true)}>Video overview <Play size={17} /></button>}
      </div>
      <div className="case-facts">
        <div><span className="eyebrow">My role</span><p>{project.category === "backend" ? "Backend development" : "Backend & web development"}</p></div>
        <div><span className="eyebrow">Core stack</span><ul className="case-core-stack">{project.primaryStack.map(tech => <li key={tech}>{tech}</li>)}</ul></div>
        <div><span className="eyebrow">Focus</span><p>{project.decisions?.[0]?.choice || project.subtitle}</p></div>
      </div>
      <ProjectImage key={project.id} src={project.image} title={projectName(project.title)} />
      <nav className="case-study-navigation" aria-label="Case study sections"><a href="#case-context">01 Overview</a>{project.focus?.length > 0 && <a href="#case-features">02 Features</a>}<a href="#case-decisions">03 Engineering</a><a href="#case-results">04 Results</a><a href="#case-stack">05 Stack & links</a></nav>
      <section className="case-section" id="case-context">
        <SectionHeading className="case-section-label" label="01 / The brief" title="Problem &" accent="contribution." description="The product context and my role in the work." />
        <div className="case-section-content"><p className="case-lead">{project.problem}</p><p>{project.description}</p><div className="case-contribution"><span className="eyebrow">What I worked on</span><p>{project.role}</p></div>
          {project.systemFlow?.length > 0 && <div className="case-system"><h3>How the system connects</h3><ol className="system-flow" aria-label="Simplified system overview">{project.systemFlow.map((step,i) => <li key={step}><span className="eyebrow">0{i+1}</span><strong>{step}</strong>{i < project.systemFlow.length-1 && <ArrowUpRight size={18} aria-hidden="true" />}</li>)}</ol></div>}
        </div>
      </section>
      {project.focus?.length > 0 && <section className="case-section" id="case-features">
        <SectionHeading className="case-section-label" label="02 / Product features" title="What I" accent="built." description="The main parts of the product and the work behind each one." />
        <div className="case-feature-grid">{project.focus.map((feature, i) => <div className="case-feature-card" key={feature.title}><span className="case-feature-number">{String(i + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.body}</p></div>)}</div>
      </section>}
      <section className="case-section" id="case-decisions">
        <SectionHeading className="case-section-label" label="03 / Engineering" title="Choices behind" accent="the features." description="The implementation, what it enables and the considerations that come with it." />
        <div className="case-section-content"><p className="case-editorial-note">The considerations below explain how each approach fits the documented work; they are not a record of the original decision process.</p>
          {project.decisions?.map((decision,i) => <section className="decision-card" key={decision.challenge}>
            <div className="decision-title"><span className="eyebrow">0{i+1}</span><h3>{decision.challenge}</h3></div>
            <dl><div><dt>Implementation choice</dt><dd><strong>{decision.choice}</strong><p>{decision.implementation}</p></dd></div><div><dt>Why this approach fits</dt><dd>{decision.reasoning}</dd></div></dl>
          </section>)}
        </div>
      </section>
      <section className="case-section" id="case-results">
        <SectionHeading className="case-section-label" label="04 / The result" title="What the work" accent="enables." description="Functional outcomes from the documented contributions." />
        <div className="case-section-content"><ul className="case-outcomes">{project.decisions?.map(d => <li key={d.result}><ArrowUpRight size={22} aria-hidden="true" /><p>{d.result}</p></li>)}</ul><div className="case-deliverables"><h3>Complete contribution list</h3><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></div></div>
      </section>
      <section className="case-section" id="case-stack">
        <SectionHeading className="case-section-label" label="05 / Explore further" title="Stack &" accent="project links." description="Explore the technologies and available project resources." />
        <div className="case-section-content"><div className="case-tech-groups">{[{title:"Backend",items:project.backEnd},{title:"Client & integration",items:project.frontEnd},{title:"Tools",items:project.tools}].filter(group => group.items?.length).map(group => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
          <div className="case-project-links">
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-v">Live website <ArrowUpRight size={18} /></a>}
            {project.githubServer && <a href={project.githubServer} target="_blank" rel="noopener noreferrer" className="btn-ghost">Backend repository <ArrowUpRight size={18} /></a>}
            {project.githubClient && project.githubClient !== project.githubServer && <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="btn-ghost">Frontend repository <ArrowUpRight size={18} /></a>}
            {project.video && <button className="btn-ghost" onClick={() => setIsModalOpen(true)}>Video overview <Play size={18} /></button>}
            {!project.demo && <Link to="/contact" className="text-link">Discuss this project <ArrowUpRight size={18} /></Link>}
          </div>
          {!project.demo && <p className="case-availability">A public demo is not linked.{!project.githubServer && !project.githubClient ? " Source code is not publicly linked." : ""}</p>}
        </div>
      </section>
      {next && <Link className="next-project" to={"/projects/"+next.id}><span className="eyebrow">Next case study</span><span>{projectName(next.title)}</span><ArrowUpRight size={28} /></Link>}
    </div>
    <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={project.video} projectTitle={project.title} />
  </article>;
}
