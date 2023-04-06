import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div
        name="contact"
        className="w-full h-screen bg-[#ffffff] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/ed127545-b2a8-415c-bd59-785ffbf7815a"
          className="flex flex-col max-w-[600px] w-full "
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-black text-[#FB002B]">
              Contact
            </p>
            <p className="text-gray-300 py-4"></p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2 outline-none"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 outline-none"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-black border-2 border-[#FB002B] hover:bg-black hover:text-white  px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
      <div className="xl:flex justify-center items-center sm:flex-col sm:flex py-6 gap-6">
        <div className="flex gap-4">
          <FaPhone size={20} color="#FB002B" />
          +234(8066212287)
        </div>
        <div className="flex gap-4">
          <FaMailBulk size={20} color="#FB002B" />
          champgraphix.gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
