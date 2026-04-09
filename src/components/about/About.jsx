import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Cpu, Cloud, Terminal, Shield } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Express.js", icon: Terminal, color: "text-gray-400" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "Prisma", icon: Code2, color: "text-blue-500" },
    { name: "React", icon: Globe, color: "text-cyan-400" },
    { name: "TypeScript", icon: Code2, color: "text-blue-600" },
    { name: "Docker", icon: Cpu, color: "text-blue-400" },
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Coffee Consumed", value: "∞" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="CContainer">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-white/10 glassify">
              <img
                className="w-full aspect-square object-cover"
                src="https://i.ibb.co/nM8b7ngD/IMG-20250505-200142-1.jpg"
                alt="Md Mohosin Ali"
              />
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glassify-dark p-6 rounded-3xl border border-white/5 text-center"
                >
                  <h4 className="text-3xl font-bold text-gradient mb-1">{stat.value}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8">About <span className="text-gradient">Me</span></h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hey! I&apos;m <span className="text-white font-semibold">Md Mohosin Ali</span>, a passionate Backend Developer currently
                shaping the digital future at <span className="text-accent-blue font-medium">SparkTech Agency</span>.
              </p>
              <p>
                I specialize in building high-performance, secure, and scalable server-side applications. 
                My focus lies in the MERN stack, with a deep mastery of Node.js, Express, and MongoDB. 
                I believe in writing clean, maintainable code that stands the test of time.
              </p>
              <p>
                Beyond standard APIs, I&apos;m experienced in real-time communication with Socket.io, 
                database orchestration with Prisma/Mongoose, and modern DevOps practices using Docker, AWS, and CI/CD pipelines.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="text-accent-purple" size={20} />
                Technical Arsenal
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 transition-colors"
                  >
                    <skill.icon size={24} className={skill.color} />
                    <span className="text-xs font-bold text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
