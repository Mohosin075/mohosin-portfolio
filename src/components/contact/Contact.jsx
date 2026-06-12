import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  Mail, MessageSquare, Send, User, Phone, MapPin,
  Clock, ChevronDown,
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (data) {
      Swal.fire({
        background: "#111110",
        color: "#F0EDE6",
        icon: "success",
        title: "Message sent.",
        text: "I'll respond within 24 hours.",
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: "rounded-none",
        },
      });
      reset();
    }
  };

  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid var(--border)",
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
            Responds within 24 hours.
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
                { icon: Phone, label: "Phone", value: "+880 1981-381383", href: "tel:+8801981381383" },
                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
                { icon: Clock, label: "Response time", value: "Within 24 hours", href: null },
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
              I&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-grid">
                <div>
                  <label style={labelStyle}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <User size={10} style={{ color: "var(--vermillion)" }} />
                      Name
                    </span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    style={inputStyle(errors.name)}
                    onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                    onBlur={e => e.target.style.borderColor = errors.name ? "var(--vermillion)" : "var(--border)"}
                  />
                  {errors.name && (
                    <p style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label style={labelStyle}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Mail size={10} style={{ color: "var(--vermillion)" }} />
                      Email
                    </span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                    })}
                    placeholder="john@example.com"
                    style={inputStyle(errors.email)}
                    onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                    onBlur={e => e.target.style.borderColor = errors.email ? "var(--vermillion)" : "var(--border)"}
                  />
                  {errors.email && (
                    <p style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label style={labelStyle}>Inquiry type</label>
                <div style={{ position: "relative" }}>
                  <select
                    {...register("inquiryType", { required: "Please select an inquiry type" })}
                    style={{ ...inputStyle(errors.inquiryType), appearance: "none", cursor: "pointer" }}
                    onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                    onBlur={e => e.target.style.borderColor = errors.inquiryType ? "var(--vermillion)" : "var(--border)"}
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
                  <p style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
                    {errors.inquiryType.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <MessageSquare size={10} style={{ color: "var(--vermillion)" }} />
                    Message
                  </span>
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 20, message: "Write at least 20 characters" },
                  })}
                  rows={5}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  style={{ ...inputStyle(errors.message), resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = "var(--vermillion)"}
                  onBlur={e => e.target.style.borderColor = errors.message ? "var(--vermillion)" : "var(--border)"}
                />
                {errors.message && (
                  <p style={{ fontSize: 11, color: "var(--vermillion)", marginTop: 4, fontFamily: "monospace" }}>
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
