import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  Mail, MessageSquare, Send, User, Phone, MapPin,
  Sparkles, Clock, CheckCircle2, ChevronDown,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


const INQUIRY_TYPES = [
  "Backend API Development",
  "Full-Stack (MERN) Project",
  "Freelance / Contract Work",
  "Job Opportunity",
  "Technical Consultation",
  "Collaboration / Open Source",
  "Other",
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (data) {
      Swal.fire({
        background: "#0a0a0a",
        color: "#fff",
        icon: "success",
        title: "Message Sent! 🎉",
        text: "Thanks for reaching out. I usually respond within 24 hours.",
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: "rounded-[2rem] border border-white/10 glassify-dark",
        },
      });
      reset();
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-mesh min-h-screen pt-32"
    >
      <div className="CContainer">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold mb-5 uppercase tracking-widest"
          >
            <Sparkles size={12} />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Robust</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Ready to scale your next project? Reach out and let&apos;s discuss
            how we can engineer a high-performance solution together.
          </motion.p>

          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 mx-auto"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Open to opportunities
              </span>
            </div>
            <div className="w-px h-4 bg-slate-800" />
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold">
              <Clock size={12} />
              Responds within 24h
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Info Cards */}
            {[
              {
                icon: Mail,
                label: "Email Me",
                value: "mohosinali075@gmail.com",
                href: "mailto:mohosinali075@gmail.com",
                color: "text-indigo-400",
                bg: "bg-indigo-500/10",
                border: "border-indigo-500/20",
              },
              {
                icon: Phone,
                label: "Call Me",
                value: "+880 1981-381383",
                href: "tel:+8801981381383",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Mohakhali, Dhaka, Bangladesh",
                href: "#",
                color: "text-purple-400",
                bg: "bg-purple-500/10",
                border: "border-purple-500/20",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-5 p-5 rounded-2xl glassify border ${item.border} hover:bg-slate-900/60 transition-all group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shrink-0`}
                >
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-bold tracking-tight">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Quick Social Links */}
            <div className="pt-2">
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mb-4">
                Connect On
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/Mohosin075",
                    label: "GitHub",
                    color: "hover:border-slate-600 hover:text-white",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/",
                    label: "LinkedIn",
                    color: "hover:border-blue-500/50 hover:text-blue-400",
                  },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3 }}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 font-bold text-xs transition-all ${s.color}`}
                  >
                    <s.icon size={16} />
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* What I can help with */}
            <div className="mt-2 p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-4">
                I Can Help With
              </p>
              <div className="space-y-2">
                {[
                  "REST API design & development",
                  "Database architecture (MongoDB, PostgreSQL)",
                  "Authentication, Stripe & payment systems",
                  "Real-time features with Socket.io",
                  "Full-stack MERN applications",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle2 size={12} className="text-indigo-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-hover-glow glassify-dark p-8 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

            <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
            <p className="text-slate-500 text-xs mb-8 font-medium">
              Fill out the form below and I&apos;ll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <User size={10} className="text-indigo-400" />
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.name ? "border-red-500/50" : "border-slate-800"
                    } focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all text-white text-sm font-medium placeholder:text-slate-700`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-[10px] font-bold">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Mail size={10} className="text-indigo-400" />
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                    })}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.email ? "border-red-500/50" : "border-slate-800"
                    } focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all text-white text-sm font-medium placeholder:text-slate-700`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[10px] font-bold">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles size={10} className="text-indigo-400" />
                  Inquiry Type
                </label>
                <div className="relative">
                  <select
                    {...register("inquiryType", { required: "Please select an inquiry type" })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.inquiryType ? "border-red-500/50" : "border-slate-800"
                    } focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all text-sm font-medium text-slate-300 appearance-none cursor-pointer`}
                  >
                    <option value="" className="text-slate-600 bg-slate-950">
                      Select inquiry type...
                    </option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-slate-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <MessageSquare size={10} className="text-indigo-400" />
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required", minLength: { value: 20, message: "Please write at least 20 characters" } })}
                  rows="4"
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                    errors.message ? "border-red-500/50" : "border-slate-800"
                  } focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all text-white text-sm font-medium placeholder:text-slate-700 resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-[10px] font-bold">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 text-sm"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={17} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
