import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading";
import "./Contact.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  Mail, MessageSquare, Send, User, MapPin,
  Clock, ChevronDown,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const INQUIRY_TYPES = [
  "Backend API Development",
  "Full-Stack Web Application",
  "Freelance / Contract Work",
  "Job Opportunity",
  "AI / Payment Integration",
  "Cloud Deployment",
  "Technical Consultation",
  "Collaboration / Open Source",
  "Other",
];

const inputStyle = (hasError) => ({
  width: "100%",
  padding: "12px 16px",
  background: "var(--surface-2)",
  border: `1px solid ${hasError ? "var(--danger)" : "var(--border)"}`,
  borderRadius: 3,
  outline: "none",
  color: "var(--chalk)",
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  transition: "border-color 0.2s",
});

const labelStyle = {
  display: "block",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: 0,
  textTransform: "none",
  color: "var(--muted)",
  marginBottom: 8,
};

const Contact = ({ embedded = false }) => {
  const Heading = embedded ? "h2" : "h1";
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
        background: "#f6f5ef", color: "#192321", icon: "error",
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
        background: "#f6f5ef",
        color: "#192321",
        icon: "success",
        title: "Message sent successfully!",
        text: "I'll respond as soon as possible.",
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
        background: "#f6f5ef",
        color: "#192321",
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
      className={`contact-page ${embedded ? "home-contact" : "page-shell"}`}
      style={{
        paddingTop: embedded ? undefined : 80,
        paddingBottom: 80,
      }}
    >
      <div className="CC">
        {/* Section header */}
        {embedded ? <div className="home-contact-heading"><SectionHeading label="03 / Let's talk" title="Let's build" accent="something useful." description="Have a project in mind or a role to discuss? Send a message, or reach out directly by email or WhatsApp." icon={MessageSquare} /></div> : <div className="page-heading interior-heading" style={{ marginBottom: 56 }}>
          <div className="rule-label" style={{ marginBottom: 20 }}>
            Contact
          </div>
          <Heading
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--chalk)",
              lineHeight: 0.95,
              letterSpacing: "0.01em",
              marginBottom: 16,
            }}
          >
            Let&apos;s start<br />
            <span style={{ color: "var(--vermillion)" }}>a conversation.</span>
          </Heading>
          <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 440, lineHeight: 1.7 }}>
            Open to Full Stack and Backend roles, as well as relevant project opportunities. Get in touch about web applications, API development, integrations or cloud deployment.
          </p>
        </div>}

        {/* Two column: info + form */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          alignItems: "start",
        }} className="contact-grid">

          {/* Left: contact info */}
          <div className="contact-details">
            {/* Contact entries */}
            <div className="contact-methods" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { icon: Mail, label: "Email", value: "mohosinali075@gmail.com", href: "mailto:mohosinali075@gmail.com" },
                { icon: FaWhatsapp, label: "Whatsapp", value: "+880 1981-381386", href: "https://wa.me/8801981381386" },
                { icon: MapPin, label: "Location", value: "Mohakhali, Dhaka", href: null },
                { icon: Clock, label: "Response time", value: "As soon as possible", href: null },
              ].map((item, i) => (
                <div
                  key={i}
                  className="contact-method"
                  style={{
                    padding: "20px 0",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                  }}
                >
                  <span className="contact-method-icon"><item.icon size={22} aria-hidden="true" /></span>
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
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohosin075/", label: "LinkedIn" },
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
                      fontSize: 14,
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
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--muted)" }}>
                    <span style={{ color: "var(--vermillion)", fontFamily: "monospace", flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-panel"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: 32,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--chalk)", marginBottom: 6 }}>
              Send a message
            </h3>
            <p className="contact-form-description" style={{ marginBottom: 32 }}>
              Tell me about your project or the role you have in mind. I&apos;ll get back to you as soon as possible.
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
                    onBlurCapture={e => e.target.style.borderColor = errors.name ? "var(--danger)" : "var(--border)"}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" style={{ fontSize: 14, color: "var(--danger)", marginTop: 4, fontFamily: "monospace" }}>
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
                    onBlurCapture={e => e.target.style.borderColor = errors.email ? "var(--danger)" : "var(--border)"}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" style={{ fontSize: 14, color: "var(--danger)", marginTop: 4, fontFamily: "monospace" }}>
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
                    onBlurCapture={e => e.target.style.borderColor = errors.inquiryType ? "var(--danger)" : "var(--border)"}
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
                  <p id="contact-inquiryType-error" role="alert" style={{ fontSize: 14, color: "var(--danger)", marginTop: 4, fontFamily: "monospace" }}>
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
                  onBlurCapture={e => e.target.style.borderColor = errors.message ? "var(--danger)" : "var(--border)"}
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" style={{ fontSize: 14, color: "var(--danger)", marginTop: 4, fontFamily: "monospace" }}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = { embedded: PropTypes.bool };

export default Contact;
