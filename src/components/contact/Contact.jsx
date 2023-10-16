/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        if(data){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Sent your message!',
                showConfirmButton: false,
                timer: 1500
              })
        }
      };
  return (
    <div className="py-8 px-4 md:w-10/12 mx-auto mt-5 md:mt-10">
        <h2 className="text-3xl font-bold mb-8  text-center">Contact Me</h2>
      <form className="max-w-md border-2 mx-auto bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@example.com"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your Message"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <input type="submit" className="btn" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
