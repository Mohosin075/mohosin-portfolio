/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Sent your message!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="py-8 px-4 md:w-10/12 mx-auto mt-5 md:mt-10 relative">
      <div className="bgShadow inset-y-20 inset-x-0"></div>
      <h2 className="text-3xl font-bold mb-8  text-center">Contact Me</h2>
      <form
        className="max-w-md mx-auto shadow-lg rounded-lg px-6 md:px-10 py-6 glass border border-white/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none w-full py-2 px-3 rounded-md bg-transparent border border-white/5 focus:border-[#2B59FF] focus:ring-2 focus:ring-[#2B59FF]/30 transition"
            id="name"
            type="text"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none w-full py-2 px-3 rounded-md bg-transparent border border-white/5 focus:border-[#2B59FF] focus:ring-2 focus:ring-[#2B59FF]/30 transition"
            id="email"
            type="email"
            placeholder="example@example.com"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none w-full py-2 px-3 rounded-md bg-transparent border border-white/5 focus:border-[#2B59FF] focus:ring-2 focus:ring-[#2B59FF]/30 transition"
            id="message"
            rows="4"
            placeholder="Your Message"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="submit"
            className="CBtnBG cursor-pointer"
            value="Send message"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
