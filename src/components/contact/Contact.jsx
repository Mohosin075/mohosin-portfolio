import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  Mail, MessageSquare, Send, User, MapPin,
  Clock, ChevronDown,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const INQUIRY_TYPES = [
  "Backend API Development",
  "Full-Stack (MERN) Project",
  "Freelance / Contract Work",
  "Job Opportunity",
  "Technical Consultation",
  "Collaboration / Open Source",
  "Other",
];

const inputStyle = (hasError) => ({
  width: "100%",
  padding: "12px 16px",
  background: "var(--surface-2)",
  border: `1px solid ${hasError ? "var(--vermillion)" : "var(--border)"}`,
  borderRadius: 3,
  outline: "none",
  color: "var(--chalk)",
  fontSize: 14,
  fontFamily: "'Space Grotesk', sans-serif",
  transition: "border-color 0.2s",
});

const labelStyle = {
  display: "block",
  fontFamily: "'Space Mono', monospace",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 8,
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if the credentials are not configured or are placeholders
    if (
      !serviceId ||
      serviceId === "your_service_id" ||
      !templateId ||
      templateId === "your_template_id" ||
      !publicKey ||
      publicKey === "your_public_key"
    ) {
      await Swal.fire({
        background: "#111110", color: "#F0EDE6", icon: "error",
        title: "Message could not be sent",
        text: "Please email mohosinali075@gmail.com directly. Your message has been kept here so you can copy it.",
      });
      return;
    }

    try {
      const templateParams = {
        from_name: data.name,
        name: data.name,
        from_email: data.email,
        email: data.email,
        reply_to: data.email,
        to_email: "mohosinali075@gmail.com",
        to_name: "Md Mohosin Ali",
        inquiry_type: data.inquiryType,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      Swal.fire({
        background: "#111110",
        color: "#F0EDE6",
        icon: "success",
        title: "Message sent successfully!",
        text: "I'll respond Within 1-2 hours.",
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: "rounded-none",
        },
      });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      Swal.fire({
        background: "#111110",
        color: "#F0EDE6",
        icon: "error",
        title: "Failed to send message",
        text: error?.text || "Please check your network connection or try again later.",
        showConfirmButton: true,
        customClass: {
          popup: "rounded-none",
        },
      });
    }
  };


  return (
    <section
      id="contact"
      style={{
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div className="CC">
        {/* Section header */}
        <div style={{ marginBottom: 56 }}>
          <div className="rule-label" style={{ marginBottom: 20 }}>
            Contact
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--chalk)",
              lineHeight: 0.95,
              letterSpacing: "0.01em",
              marginBottom: 16,
            }}
          >
            Let&apos;s Work<br />
            <span style={{ color: "var(--vermillion)" }}>Together</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 440, lineHeight: 1.7 }}>
            Available for backend projects, full-stack builds, and contract work.
            Responds Within 1-2 hours.
          </p>
        </div>

        {/* Two column: info + form */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          alignItems: "start",
        }} className="contact-grid">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact entries */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { icon: Mail, label: "Email", value: "mohosinali075@gmail.com", href: "mailto:mohosinali075@gmail.com" },
                { icon: FaWhatsapp, label: "Whatsapp", value: "+880 1981-381383", href: "https://wa.me/8801981381383" },
                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
                { icon: Clock, label: "Response time", value: "Within 1-2 hours", href: null },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 0",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <item.icon size={15} style={{ color: "var(--vermillion)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="code-label" style={{ marginBottom: 4 }}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "var(--chalk)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--vermillion)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--chalk)"}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 14, fontWeight: 600, color: "var(--chalk)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ marginTop: 32 }}>
              <p className="code-label" style={{ marginBottom: 16 }}>Also find me on</p>
              <div style={{ display: "flex", gap: 16 }}>
                {[
                  { icon: FaGithub, href: "https://github.com/Mohosin075", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-mohosin-5b34a0278/", label: "LinkedIn" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="underline-reveal"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--chalk)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                  >
                    <s.icon size={15} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* "I can help with" */}
            <div style={{ marginTop: 40, padding: "24px", border: "1px solid var(--border)", borderRadius: 3, background: "var(--surface)" }}>
              <p className="code-label" style={{ marginBottom: 16 }}>What I can help with</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "REST API design & development",
                  "MongoDB, PostgreSQL architecture",
                  "Stripe & payment integration",
                  "Real-time with Socket.io",
                  "Full-stack MERN applications",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--muted)" }}>
                    <span style={{ color: "var(--vermillion)", fontFamily: "monospace", flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 3,
              padding: 40,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--chalk)", marginBottom: 6 }}>
              Send a message
            </h3>
            <p className="code-label" style={{ marginBottom: 32 }}>
              I&apos;ll get back to you Within 1-2 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-grid">
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <User size={10} style={{ color: "var(--vermillion)" }} />
                      Name
                    </span>
                  </label>
                  <input autoComplete="name" id="contact-name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined}
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    style={inputStyle(errors.name)}
                    onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                    onBlurCapture={e => e.target.style.borderColor = errors.name ? "var(--vermillion)" : "var(--border)"}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Mail size={10} style={{ color: "var(--vermillion)" }} />
                      Email
                    </span>
                  </label>
                  <input type="email" autoComplete="email" id="contact-email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined}
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                    })}
                    placeholder="john@example.com"
                    style={inputStyle(errors.email)}
                    onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                    onBlurCapture={e => e.target.style.borderColor = errors.email ? "var(--vermillion)" : "var(--border)"}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="contact-inquiryType" style={labelStyle}>Inquiry type</label>
                <div style={{ position: "relative" }}>
                  <select id="contact-inquiryType" aria-invalid={Boolean(errors.inquiryType)} aria-describedby={errors.inquiryType ? "contact-inquiryType-error" : undefined}
                    {...register("inquiryType", { required: "Please select an inquiry type" })}
                    style={{ ...inputStyle(errors.inquiryType), appearance: "none", cursor: "pointer" }}
                    onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                    onBlurCapture={e => e.target.style.borderColor = errors.inquiryType ? "var(--vermillion)" : "var(--border)"}
                  >
                    <option value="" style={{ background: "var(--surface)" }}>Select type...</option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type} style={{ background: "var(--surface)" }}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={13}
                    style={{
                      position: "absolute",
                      right: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--muted)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                {errors.inquiryType && (
                  <p id="contact-inquiryType-error" role="alert" style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
                    {errors.inquiryType.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={labelStyle}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <MessageSquare size={10} style={{ color: "var(--vermillion)" }} />
                    Message
                  </span>
                </label>
                <textarea id="contact-message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined}
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 20, message: "Write at least 20 characters" },
                  })}
                  rows={5}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  style={{ ...inputStyle(errors.message), resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                  onBlurCapture={e => e.target.style.borderColor = errors.message ? "var(--vermillion)" : "var(--border)"}
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-v"
                style={{ justifyContent: "center", padding: "14px 28px", width: "100%", opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
              >
                {isSubmitting ? (
                  <div className="spin-slow" style={{
                    width: 16, height: 16,
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                  }} />
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
