import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#ffffff] text-gray-300">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-black text-[#FB002B] ">
            Skills
          </p>
          <p className="py-4 text-[#FB002B]">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://i.pinimg.com/564x/df/78/fe/df78fe444b8775e87fd7c47c468a7e90.jpg"
              alt=""
            />
            <p className="my-4 text-[#FB002B] font-medium">UI/UX Design</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://i.pinimg.com/474x/b1/cc/27/b1cc27f8e4ae8a253aedb13c0fff6a21.jpg"
              alt=""
            />
            <p className="my-4 text-[#FB002B] font-medium">Figma</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-30 mx-auto"
              src="https://i.pinimg.com/474x/55/7a/e6/557ae6d1a23de46e44188851b3263e30.jpg"
              alt=""
            />
            <p className="my-4 text-[#FB002B] font-medium mt-10">LEADERSHIP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="" />
            <p className="my-4 text-[#FB002B] font-medium">GRAPHIC DESIGN</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://i.pinimg.com/474x/51/b0/ba/51b0ba46b3b854fcbfc08fc0be57ce5d.jpg"
              alt=""
            />
            <p className="my-4 text-[#FB002B] font-medium">PHOTOSHOP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
