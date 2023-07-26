import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div className="h-full bg-[#fff] py-10">
      <div name="work" className="w-full  text-[#f44c4c]  px-20">
        <div className="mx-auto  flex flex-col justify-center ">
          <div className="pb-3 ">
            <p className="text-4xl font-bold inline border-b-4 text-black border-white md:text-center">
              Work
            </p>
            <p className="py-1 font-medium">Check out some of my recent work</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {project.map((item, index) => (
              <div
                key={index}
                className="relative group container rounded-md flex justify-center text-center items-center mx-auto content-div"
              >
                <img
                  src={item.image}
                  alt=""
                  className="object-contain w-full h-full"
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
