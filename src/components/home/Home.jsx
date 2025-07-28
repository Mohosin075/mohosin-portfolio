import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
const Home = () => {
  return (
    <div>
      <div className="mx-auto ">
        <div className="flex md:max-h-screen md:h-[70vh] flex-col-reverse md:flex-row justify-between gap-10 items-center">
          <div className="md:w-2/3">
            <div className="text-center md:text-xl font-bold">
              <TypeAnimation
                sequence={[
                  "Hey there! 👋",
                  1000,
                  "I'm Md Mohosin Ali",
                  1000,
                  "Backend Developer @SparkTech Agency",
                  1000,
                  "Skilled in Node, Express, MongoDB",
                  1000,
                  "Working with Mongoose, and REST APIs",
                  1000,
                  "Building real-time apps with Socket.io",
                  1000,
                  "Deploying with Docker, AWS, and CI/CD",
                  1000,
                  "Also comfy with React, and TypeScript",
                  1000,
                  "Let's build something awesome together",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="mt-5 text-center text-xs md:text-sm w-10/12 mx-auto">
              Hey, I’m Md Mohosin Ali — Backend Developer <a className="text-blue-500" href="https://www.linkedin.com/company/sparktechagency/about/">@SparkTech Agency</a>. I
              build scalable, secure, and efficient backend systems using
              Node.js, Express, MongoDB, and Prisma. Passionate about real-time
              apps, Docker, AWS, and clean, maintainable code.
            </p>
            <div className="text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1mGw-bCWSsJmKqaa6fie0V_nAhk86dg5hZ79hFQDOTVo/edit?usp=sharingg"
                className="text-center mt-5 inline-block"
              >
                <button className="CBtnBG">view resume</button>
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              className="rounded-full"
              src="https://i.ibb.co/nM8b7ngD/IMG-20250505-200142-1.jpg"
              alt=""
            />
          </div>
        </div>

        <NavLink
          to="/about"
          className="hover:underline hover:translate-x-1 transition-all flex my-5 items-center"
        >
          See more about me{" "}
          <span className="ml-3">
            <FaArrowRight />
          </span>
        </NavLink>
      </div>
      <div className="mt-20">
        <Projects></Projects>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
