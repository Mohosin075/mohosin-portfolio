import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { loadProjects } from "../../utils/loadProjects";
import { projectName } from "../../utils/projectName";

const categories = [{ id: "all", label: "All work" }, { id: "backend", label: "Backend" }, { id: "fullstack", label: "Full stack" }];

export default function Projects({ limit }) {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    loadProjects(controller.signal).then((data) => {
      if (controller.signal.aborted) return;
      setProjects(data);
      setStatus("ready");
    }).catch(() => { if (!controller.signal.aborted) setStatus("error"); });
    return () => controller.abort();
  }, [attempt]);
  const visible = (category === "all" ? projects : projects.filter((p) => p.category === category)).slice(0, limit || projects.length);
  return (
    <section className={limit ? "work-preview" : "work-page page-shell CC"} aria-label="Selected projects">
      {!limit && <header className="page-heading">
        <span className="eyebrow">The work</span>
        <h1>Projects & contributions.</h1>
        <p>Backend services, product integrations and full-stack applications. Explore the work and my contribution to each project.</p>
      </header>}
      {!limit && <div className="work-toolbar">
        <div className="work-filters" aria-label="Filter projects">
          {categories.map((item) => <button key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}
        </div>
        <p role="status">{status === "ready" ? visible.length + " projects" : status === "error" ? "Work unavailable" : "Loading work"}</p>
      </div>}
      {status === "error" ? <div className="state-panel" role="alert"><h2>Could not load the work.</h2><p>Check your connection and try again.</p><button className="btn-v" onClick={() => setAttempt((n) => n + 1)}>Try again <ArrowRight size={16} /></button></div> :
       status === "loading" ? <div role="status" aria-label="Loading projects" className="work-grid"><span className="sr-only">Loading projects</span>{[0,1,2].map(n => <div className="work-skeleton" aria-hidden="true" key={n}><div /><span /><span /></div>)}</div> :
       visible.length === 0 ? <div className="state-panel"><h2>No projects in this category yet.</h2><button className="btn-ghost" onClick={() => setCategory("all")}>View all work</button></div> :
       <div className="work-grid">
         {visible.map((project, index) => <article key={project.id} className={index === 0 ? "work-card work-card-featured" : "work-card"}>
           <Link className="work-card-image" to={"/projects/" + project.id} aria-label={"View " + project.title + " case study"}><img src={project.image} alt={project.title} loading="lazy" decoding="async" /></Link>
           <div className="work-card-body">
             <div className="work-card-kicker"><span className="eyebrow">{project.category === "backend" ? "Backend engineering" : "Full-stack development"}</span>{index === 0 && <span className="featured-label">Featured work</span>}</div>
             <h2><Link to={"/projects/" + project.id}>{projectName(project.title)}</Link></h2>
             <p className="work-card-summary">{project.subtitle}</p>
             <p className="work-card-role">{project.role}</p>
             <div className="work-card-tags">{(project.primaryStack || project.backEnd || []).slice(0,4).map(tech => <span key={tech}>{tech}</span>)}</div>
             <Link className="work-card-link" to={"/projects/" + project.id}>Explore case study <ArrowUpRight size={19} /></Link>
           </div>
         </article>)}
       </div>}
    </section>
  );
}
Projects.propTypes = { limit: PropTypes.number };
