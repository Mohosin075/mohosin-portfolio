import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
const Home = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto ">
        <div className="flex md:max-h-screen md:h-[70vh] flex-col-reverse md:flex-row justify-between gap-10 items-center">
          <div className="md:w-2/3">
            <div className="text-center md:text-xl font-bold">
              <TypeAnimation
                sequence={[
                  "Welcome to my Portfolio",
                  1000,
                  "My name is Md Mohosin Ali",
                  1000,
                  "I'm a junior web developer",
                  1000,
                  "skills : Nextjs, Typescript",
                  1000,
                  "Express js, MongoDB",
                  1000,
                  "React, Redux, Mongoose, etc.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="mt-5 text-center text-xs md:text-sm">
              Welcome to my portfolio! I am a Junior Web Developer with a
              passion for creating dynamic and immersive web experiences. With a
              strong foundation in front-end development and a continuous drive
              to learn new technologies, I am dedicated to delivering visually
              appealing and user-friendly websites.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1Clw7f8NIPr9-dFk80Pgc6CWagqFUSKCM7JejuTTDrew/edit?usp=sharing"
              className="text-center mt-10 block"
            >
              <button className="CBtnBG">view resume</button>
            </a>
          </div>
          <div className="md:w-1/3">
            <img
              className="rounded-full"
              src="https://i.ibb.co/YFg33PYB/IMG-20250505-200142-1-1.jpg"
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
