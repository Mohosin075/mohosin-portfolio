import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Mail, MessageSquare, Send, User, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      Swal.fire({
        background: '#1a1a1a',
        color: '#fff',
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for reaching out. I&apos;ll get back to you soon.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: 'rounded-[2rem] border border-white/10 glassify-dark'
        }
      });
      reset();
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="CContainer">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I&apos;m always open to discussing new projects and creative ideas.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glassify-dark p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "mohosinali075@gmail.com", href: "mailto:mohosinali075@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+880 1742-125075", href: "tel:+8801742125075" },
                  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassify-dark p-8 md:p-10 rounded-[2rem] border border-white/10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <User size={14} /> Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Mail size={14} /> Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <MessageSquare size={14} /> Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-purple/20"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
