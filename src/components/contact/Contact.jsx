/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from "../ui/Button";
import { useState } from "react";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [sending, setSending] = useState(false);

  const onSubmit = (data) => {
    setSending(true);
    // simulate network
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
    }, 1000);
    console.log("contact form:", data);
  };

  return (
    <div
      className="py-8 px-4 md:w-10/12 mx-auto mt-5 md:mt-10 relative"
      data-animate="reveal"
    >
      <div className="bgShadow inset-y-20 inset-x-0"></div>
      <h2 className="text-3xl font-bold mb-8  text-center">Contact Me</h2>
      <form
        className="max-w-md mx-auto shadow-2xl rounded-lg px-6 md:px-10 py-6 glass border border-white/5 bg-card/60"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 field">
          <input
            className="appearance-none w-full py-3 px-3 rounded-md bg-transparent border border-white/5 focus:border-[var(--accent-from)] focus:ring-2 focus:ring-[var(--accent-from)]/30 transition shadow-sm"
            id="name"
            type="text"
            placeholder=" "
            {...register("name", { required: true })}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="mb-4 field">
          <input
            className="appearance-none w-full py-3 px-3 rounded-md bg-transparent border border-white/5 focus:border-[var(--accent-from)] focus:ring-2 focus:ring-[var(--accent-from)]/30 transition shadow-sm"
            id="email"
            type="email"
            placeholder=" "
            {...register("email", { required: true })}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="mb-4 field">
          <textarea
            className="appearance-none w-full py-3 px-3 rounded-md bg-transparent border border-white/5 focus:border-[var(--accent-from)] focus:ring-2 focus:ring-[var(--accent-from)]/30 transition shadow-sm"
            id="message"
            rows="4"
            placeholder=" "
            {...register("message", { required: true })}
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={sending}
            className={`flex items-center gap-3 ${sending ? "opacity-80" : ""}`}
          >
            {sending && <span className="spinner" />}
            {sending ? "Sending..." : "Send message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
