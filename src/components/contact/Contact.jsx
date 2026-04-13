import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Mail, MessageSquare, Send, User, Phone, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  
  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (data) {
      Swal.fire({
        background: '#0a0a0a',
        color: '#fff',
        icon: "success",
        title: "Message Dispatched!",
        text: "Your message has been successfully routed to my inbox.",
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          popup: 'rounded-[3rem] border border-white/10 glassify-dark'
        }
      });
      reset();
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-mesh min-h-screen pt-32">
      <div className="CContainer">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 text-[10px] font-bold mb-6 uppercase tracking-widest"
          >
            <Sparkles size={14} />
            Contact
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Let&apos;s Build Something <span className="text-gradient">Robust</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Ready to scale your next project? Reach out and let&apos;s discuss 
            how we can engineer a high-performance solution together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { 
                icon: Mail, 
                label: "Email Me", 
                value: "mohosinali075@gmail.com", 
                href: "mailto:mohosinali075@gmail.com",
                color: "text-indigo-400",
                bg: "bg-indigo-500/10"
              },
              { 
                icon: Phone, 
                label: "Call Me", 
                value: "+8801981381383", 
                href: "tel:+8801981381383",
                color: "text-emerald-400",
                bg: "bg-emerald-500/10"
              },
              { 
                icon: MapPin, 
                label: "Location", 
                value: "Dhaka, Bangladesh", 
                href: "#",
                color: "text-slate-400",
                bg: "bg-slate-500/10"
              }
            ].map((item, i) => (
              <motion.a 
                key={i}
                href={item.href}
                whileHover={{ x: 8, backgroundColor: "rgba(15, 23, 42, 0.6)" }}
                className="flex items-center gap-5 p-6 rounded-2xl glassify border border-slate-800 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white text-base font-bold tracking-tight">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassify-dark p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <User size={12} className="text-indigo-400" /> Full Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`w-full px-5 py-3 rounded-xl bg-slate-950 border ${errors.name ? 'border-red-500/50' : 'border-slate-800'} focus:border-indigo-500 outline-none transition-all text-white text-sm font-medium placeholder:text-slate-600`}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} className="text-indigo-400" /> Email Address
                  </label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    placeholder="john@example.com"
                    className={`w-full px-5 py-3 rounded-xl bg-slate-950 border ${errors.email ? 'border-red-500/50' : 'border-slate-800'} focus:border-indigo-500 outline-none transition-all text-white text-sm font-medium placeholder:text-slate-600`}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={12} className="text-indigo-400" /> Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  placeholder="How can I help you?"
                  className={`w-full px-5 py-3 rounded-xl bg-slate-950 border ${errors.message ? 'border-red-500/50' : 'border-slate-800'} focus:border-indigo-500 outline-none transition-all text-white text-sm font-medium placeholder:text-slate-600 resize-none`}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#4f46e5" }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
