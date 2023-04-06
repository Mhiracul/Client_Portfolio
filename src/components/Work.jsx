import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div className="py-36 bg-[#FB002B]">
      <div name="work" className="w-full md:h-screen xl:h-screen text-white  ">
        <div className="mx-auto p-4 flex flex-col justify-center w-full h-full py-28">
          <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 text-black border-white md:text-center">
              Work
            </p>
            <p className="py-6 font-medium">Check out some of my recent work</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {project.map((item, index) => (
              <div
                key={index}
                className="relative group container rounded-md flex justify-center text-center items-center mx-auto content-div"
              >
                <img
                  src={item.image}
                  alt=""
                  className="object-contain w-60 h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-75 bg-black z-10 flex flex-col justify-center items-center">
                  <span className="text-3xl font-bold mb-4 text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-4 text-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
