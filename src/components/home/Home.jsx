import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
const Home = () => {
  return (
    <div>
      <div className="mx-auto">
        <section className="grid md:grid-cols-2 gap-8 items-center md:min-h-[70vh]">
          <div className="space-y-6">
            <div className="text-3xl md:text-4xl font-bold">
              <TypeAnimation
                sequence={[
                  "Hey there! 👋",
                  1200,
                  "I'm Md Mohosin Ali",
                  1200,
                  "Backend Developer",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="text-sm md:text-base text-muted max-w-xl">
              I build scalable, secure, and efficient backend systems using
              Node.js, Express and MongoDB. I focus on clean architecture,
              performance and reliable deployments with Docker and cloud.
            </p>
            <div className="flex items-center gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1mGw-bCWSsJmKqaa6fie0V_nAhk86dg5hZ79hFQDOTVo/edit?usp=sharingg"
              >
                <button className="CBtnBG">View resume</button>
              </a>
              <NavLink to="/projects" className="CBtn px-4">
                My Projects
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
              src="https://i.ibb.co/nM8b7ngD/IMG-20250505-200142-1.jpg"
              alt="Mohosin"
            />
          </div>
        </section>
        <div className="mt-6">
          <NavLink
            to="/about"
            className="hover:underline hover:translate-x-1 transition-all flex my-5 items-center text-muted"
          >
            See more about me{" "}
            <span className="ml-3">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </NavLink>
        </div>
      </div>
      <div className="mt-20">
        <Projects></Projects>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
