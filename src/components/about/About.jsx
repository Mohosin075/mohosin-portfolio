import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Cpu, Cloud, Terminal, Shield, Award, Rocket, CheckCircle2 } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Node.js", icon: Server, color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Express.js", icon: Terminal, color: "text-gray-400", bg: "bg-gray-400/10" },
    { name: "MongoDB", icon: Database, color: "text-green-600", bg: "bg-green-600/10" },
    { name: "Prisma", icon: Code2, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "React", icon: Globe, color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "TypeScript", icon: Code2, color: "text-blue-600", bg: "bg-blue-600/10" },
    { name: "Docker", icon: Cpu, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "AWS", icon: Cloud, color: "text-orange-400", bg: "bg-orange-400/10" },
  ];

  const stats = [
    { label: "Experience", value: "2+", icon: Rocket, suffix: "Years" },
    { label: "Projects", value: "15+", icon: CheckCircle2, suffix: "Completed" },
    { label: "Clients", value: "10+", icon: Award, suffix: "Happy" },
    { label: "Uptime", value: "99%", icon: Shield, suffix: "Reliable" },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-mesh min-h-screen pt-32">
      <div className="CContainer">
        <div className="text-center lg:text-left mb-16 sm:mb-20">
          <h2 className="section-title">Engineering <span className="text-gradient">Excellence</span></h2>
          <p className="section-subtitle lg:mx-0">Backend Architect specializing in building high-performance distributed systems.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-start">
          {/* Left: Image & Dynamic Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://i.ibb.co/nM8b7ngD/IMG-20250505-200142-1.jpg"
                alt="Md Mohosin Ali"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
                <p className="text-white font-black text-2xl sm:text-3xl mb-1 tracking-tight">Md Mohosin Ali</p>
                <p className="text-accent-blue font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">Full-Stack Engineer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glassify-dark p-5 sm:p-6 rounded-[2rem] border border-white/5 group hover:border-white/20 transition-all duration-500"
                >
                  <stat.icon className="text-accent-purple mb-3 sm:mb-4 group-hover:scale-110 transition-transform" size={20} />
                  <h4 className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tighter">{stat.value}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black leading-tight">
                    {stat.label} <br /> <span className="text-gray-600">{stat.suffix}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6 sm:space-y-8 text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                Currently engineering scalable solutions at 
                <span className="text-accent-blue font-black ml-1 uppercase tracking-wider text-sm">SparkTech Agency</span>.
              </p>
              
              <div className="pl-6 border-l-2 border-accent-purple/30 italic text-gray-500 text-base sm:text-lg">
                &quot;I believe in code that is not just functional, but an elegant piece of engineering that solves complex real-world problems.&quot;
              </div>

              <p>
                My expertise lies in the <span className="text-white font-bold tracking-tight">MERN stack</span>, with deep focus on 
                Node.js microservices, real-time data orchestration, and cloud-native deployments. 
                I transform complex business requirements into robust, secure, and maintainable software.
              </p>
            </div>

            <div className="mt-12 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-black mb-6 sm:mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                  <Cpu size={20} />
                </div>
                Technical Arsenal
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 2xl:gap-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-4 sm:p-5 2xl:p-8 rounded-[2rem] ${skill.bg} border border-white/5 flex flex-col items-center gap-3 sm:gap-4 2xl:gap-6 transition-all duration-500 group`}
                  >
                    <div className={`p-2 sm:p-3 2xl:p-5 rounded-2xl bg-black/40 group-hover:scale-110 transition-transform`}>
                      <skill.icon size={24} className={`${skill.color} 2xl:scale-150`} />
                    </div>
                    <span className="text-[10px] sm:text-xs 2xl:text-sm font-black text-gray-300 tracking-[0.2em] uppercase">{skill.name}</span>
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
