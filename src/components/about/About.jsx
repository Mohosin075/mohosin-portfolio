const About = () => {
  return (
    <div
      className="w-10/12 mx-auto mt-5 md:mt-10 glass rounded-lg p-6 bg-card/70 border border-white/3"
      data-animate="reveal"
    >
      <div className="w-32 md:w-48 mb-6 mx-auto">
        <img
          className="rounded-full shadow-2xl border-2 border-[rgba(255,255,255,0.03)]"
          src="https://i.ibb.co/nM8b7ngD/IMG-20250505-200142-1.jpg"
          alt=""
        />
      </div>
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-5 md:w-2/3 w-full text-sm text-muted">
        Hey! I am Md Mohosin Ali, a passionate Backend Developer currently
        working at SparkTech Agency. I specialize in building scalable, secure,
        and efficient server-side applications using the MERN stack, with a
        strong focus on Node.js, Express.js, and MongoDB. <br /> <br /> With
        hands-on experience in Prisma, Mongoose, RESTful APIs, and real-time
        communication via Socket.io, I’m all about clean code and maintainable
        architecture. I’m also familiar with frontend technologies like React,
        Redux, and TypeScript, which helps me collaborate better with full-stack
        teams. <br /> <br /> I love working on containerized environments with
        Docker, deploying apps on AWS & Vercel, and automating workflows using
        CI/CD pipelines (GitHub Actions FTW ✌️). Always hungry to learn,
        improve, and ship high-impact solutions — I’m here to turn ideas into
        clean, functional code.
      </p>
    </div>
  );
};

export default About;
