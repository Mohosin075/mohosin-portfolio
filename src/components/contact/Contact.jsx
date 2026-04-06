/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from "../ui/Button";
import { useState } from "react";

const CONTACT_EMAIL = "web.mohosin@emaill.com";

const Contact = () => {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: "onTouched",
  });
  const { errors } = formState;
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = (data) => {
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Message sent successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    }, 900);
    console.log("contact form:", data);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
    }
  };

  // const downloadVCard = () => {
  //   const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Md Mohosin Ali\nEMAIL:${CONTACT_EMAIL}\nTEL:+880XXXXXXXXXX\nORG:SparkTech Agency\nEND:VCARD`;
  //   const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "mohosin.vcf";
  //   a.click();
  //   URL.revokeObjectURL(url);
  // };

  return (
    <section
      className="py-8 px-4 md:w-10/12 mx-auto mt-5 md:mt-10 relative"
      data-animate="reveal"
    >
      <div className="bgShadow inset-y-20 inset-x-0" />
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left info panel */}
        <div className="glass p-6 rounded-lg border border-white/5 bg-card/70 h-full flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-3">
            Let&apos;s work together
          </h3>
          <p className="text-sm text-muted mb-4">
            I’m available for freelance projects and full-time opportunities.
            You can reach me via email or use the contact form — I usually reply
            within 24 hours.
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/10 rounded-md">
              <div>
                <div className="text-sm text-muted">Email</div>
                <div className="font-medium">{CONTACT_EMAIL}</div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={copyEmail}>
                  {copied ? "Copied" : "Copy"}
                </Button>
                {/* <Button variant="outline" size="sm" onClick={downloadVCard}>
                  vCard
                </Button> */}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                className="p-2 rounded-md bg-white/10 hover:bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] transition"
                href="https://github.com/Mohosin075"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="p-2 rounded-md bg-white/10 hover:bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] transition"
                href="https://www.linkedin.com/in/md-mohosin-5b34a0278/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-4 text-sm text-muted">
              Prefer scheduling a call? Add your availability in the message and
              I’ll follow up.
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-2xl rounded-lg px-6 md:px-10 py-6 glass border border-white/5 bg-card/60 h-full"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="field">
              <input
                id="name"
                placeholder=" "
                className="appearance-none w-full py-3 px-3 rounded-md bg-transparent border border-white/5 focus:border-[var(--accent-from)] focus:ring-2 focus:ring-[var(--accent-from)]/30 transition shadow-sm"
                {...register("name", { required: "Name is required" })}
              />
              <label htmlFor="name">Your name</label>
              {errors.name && (
                <div className="text-sm text-red-400 mt-1">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="field">
              <input
                id="email"
                placeholder=" "
                className="appearance-none w-full py-3 px-3 rounded-md bg-transparent border border-white/5 focus:border-[var(--accent-from)] focus:ring-2 focus:ring-[var(--accent-from)]/30 transition shadow-sm"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
              />
              <label htmlFor="email">Your email</label>
              {errors.email && (
                <div className="text-sm text-red-400 mt-1">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="field">
              <textarea
                id="message"
                rows={5}
                placeholder=" "
                className="appearance-none w-full py-3 px-3 rounded-md bg-transparent border border-white/5 focus:border-[var(--accent-from)] focus:ring-2 focus:ring-[var(--accent-from)]/30 transition shadow-sm resize-none"
                {...register("message", {
                  required: "Please include a message",
                })}
              />
              <label htmlFor="message">Message</label>
              {errors.message && (
                <div className="text-sm text-red-400 mt-1">
                  {errors.message.message}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <Button
                type="submit"
                disabled={sending}
                className={`flex items-center gap-3 ${sending ? "opacity-80" : ""}`}
              >
                {sending && <span className="spinner" />}
                {sending ? "Sending..." : "Send message"}
              </Button>
              <div className="ml-4 text-sm text-muted flex-1">
                Or email me directly at <span className="font-medium">{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
