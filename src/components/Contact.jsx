import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div
        name="contact"
        className="w-full h-full py-10 bg-[#ee4f4f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/ed127545-b2a8-415c-bd59-785ffbf7815a"
          className="flex flex-col max-w-[600px] w-full "
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white text-[#fff]">
              Contact
            </p>
            <p className="text-gray-300 py-1"></p>
          </div>
          <input
            className="bg-[#fff] p-2 outline-none"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#fff] outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#fff] p-2 outline-none"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-[#000130] mx-auto group border-2 border-[#FFF] px-6 py-3 my-2 flex items-center hover:bg-black hover:border-[#DCCDCD] hover:text-white">
            Let's Collaborate
          </button>
        </form>
      </div>
      <div className="xl:flex justify-center items-center sm:flex-col sm:flex py-6 gap-6">
        <div className="flex gap-4 justify-center">
          <FaPhone size={20} color="#FB002B" />
          +234(8066212287)
        </div>
        <div className="flex gap-4 justify-center">
          <FaMailBulk size={20} color="#FB002B" />
          champgraphix.gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
