import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight} from "react-icons/fa";
const Home = () => {
  return (
    <div className="w-10/12 mx-auto ">
        <div className="text-center mt-5 md:mt-10">
        <a href="https://drive.google.com/file/d/1dXv08KxpYKvmkNj8yNvIVvQi1ujzn4kP/view?usp=sharing"><button className="btn mb-5 hover:translate-y-1 transition-all">Download Resume</button></a>
        </div>
        <div className="flex md:max-h-screen md:h-[70vh] flex-col-reverse md:flex-row justify-between gap-10 items-center">
        
      <div className="md:w-2/3">
        <div className="text-center md:text-2xl font-bold">
          <TypeAnimation
            sequence={[
              "Welcome to my Portfolio",
              1000,
              "I'm Mohosin",
              1000,
              "I'm a junior web developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="mt-5 text-center">
          Welcome to my portfolio! I am a Junior Web Developer with a passion
          for creating dynamic and immersive web experiences. With a strong
          foundation in front-end development and a continuous drive to learn
          new technologies, I am dedicated to delivering visually appealing and
          user-friendly websites.
        </p>
      </div>
      <div className="md:w-1/3">
        <img className="rounded-full"
          src="https://i.ibb.co/4pMfKnp/Whats-App-Image-2023-07-04-at-20-55-01.jpg"
          alt=""
        />
      </div>
    </div>
    <Link to="/about" className="hover:underline hover:translate-x-4 transition-all flex my-5 items-center">See more about me <span className="ml-3"><FaArrowRight /></span></Link>
    </div>
  );
};

export default Home;
