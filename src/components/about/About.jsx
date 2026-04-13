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
        <div className="text-center lg:text-left mb-16">
          <h2 className="section-title">Engineering <span className="text-gradient">Excellence</span></h2>
          <p className="section-subtitle lg:mx-0">Backend Architect focused on performance, security, and scalability.</p>
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
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://i.ibb.co.com/C5RnCvpF/ai-1.png"
                alt="Md Mohosin Ali"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-8">
                <p className="text-white font-bold text-2xl mb-1 tracking-tight">Md Mohosin Ali</p>
                <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px]">Backend Systems Engineer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glassify-dark p-6 rounded-2xl border border-slate-800 group hover:border-slate-700 transition-all duration-300"
                >
                  <stat.icon className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={20} />
                  <h4 className="text-3xl font-bold text-white mb-1 tracking-tighter">{stat.value}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold leading-tight">
                    {stat.label} <br /> <span className="text-slate-600">{stat.suffix}</span>
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
            <div className="space-y-6 text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Senior Developer at 
                <span className="text-indigo-400 font-bold ml-1 uppercase tracking-wider text-xs">SparkTech Agency</span>.
              </p>
              
              <div className="pl-6 border-l-2 border-indigo-500/30 italic text-slate-500 text-base">
                &quot;I engineer backend systems that are not just functional, but optimized for scale and performance.&quot;
              </div>

              <p>
                Specializing in the <span className="text-white font-bold">MERN stack</span>, I build robust APIs, microservices, and 
                real-time applications. My focus is on writing clean, maintainable code and implementing 
                efficient database architectures.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Cpu size={20} />
                </div>
                Core Stack
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col items-center gap-4 transition-all duration-300 group`}
                  >
                    <div className={`p-3 rounded-xl bg-slate-950 group-hover:scale-110 transition-transform`}>
                      <skill.icon size={24} className={`${skill.color}`} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 tracking-[0.2em] uppercase">{skill.name}</span>
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
