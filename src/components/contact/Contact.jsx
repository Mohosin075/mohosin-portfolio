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
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5 text-accent-purple text-[10px] sm:text-xs font-black mb-6 uppercase tracking-[0.2em]"
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
            Let&apos;s Build Something <span className="text-gradient">Epic</span>
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
            className="space-y-4 sm:space-y-6"
          >
            {[
              { 
                icon: Mail, 
                label: "Email Me", 
                value: "mohosinali075@gmail.com", 
                href: "mailto:mohosinali075@gmail.com",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10"
              },
              { 
                icon: Phone, 
                label: "Call Me", 
                value: "+880 1742-125075", 
                href: "tel:+8801742125075",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10"
              },
              { 
                icon: MapPin, 
                label: "Location", 
                value: "Dhaka, Bangladesh", 
                href: "#",
                color: "text-accent-pink",
                bg: "bg-accent-pink/10"
              }
            ].map((item, i) => (
              <motion.a 
                key={i}
                href={item.href}
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="flex items-center gap-5 sm:gap-6 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] glassify-dark border border-white/5 transition-all group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white text-base sm:text-xl font-bold tracking-tight">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassify-dark p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-purple/10 blur-[80px] rounded-full" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <User size={12} className="text-accent-purple" /> Full Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`w-full px-6 py-4 rounded-2xl bg-white/[0.03] border ${errors.name ? 'border-red-500/50' : 'border-white/10'} focus:border-accent-purple outline-none transition-all text-white text-sm font-medium placeholder:text-gray-600`}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} className="text-accent-blue" /> Email Address
                  </label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    placeholder="john@example.com"
                    className={`w-full px-6 py-4 rounded-2xl bg-white/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-white/10'} focus:border-accent-blue outline-none transition-all text-white text-sm font-medium placeholder:text-gray-600`}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={12} className="text-accent-pink" /> Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  placeholder="How can I help you?"
                  className={`w-full px-6 py-4 rounded-2xl bg-white/[0.03] border ${errors.message ? 'border-red-500/50' : 'border-white/10'} focus:border-accent-pink outline-none transition-all text-white text-sm font-medium placeholder:text-gray-600 resize-none`}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Dispatch Message
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
