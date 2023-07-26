import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CV } from "../assets";

const Home = () => {
  return (
    <div className="w-full bg-[#ee4f4f]">
      <div name="home" className="w-full h-screen  bg-3d-image max-w-[1300px] ">
        <div className="flex w-full h-screen ">
          {/* Container */}
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-[#FFF]">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#FFFFFF]">
              EMMANUEL OKEREAFOR
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#FFFFFF]">
              I'm a Graphic Designer.
            </h2>
            <p className="text-[#f2f3f6] py-4 max-w-[700px]">
              I’m a Graphic and UI/UX Designer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive Designs.
            </p>
            <div>
              <button
                className="text-[#000130] group border-2 border-[#FFF] px-6 py-3 my-2 flex items-center hover:bg-black hover:border-[#DCCDCD] hover:text-white"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = CV;
                  link.download = "Emmanuel Okereafor.pdf";
                  link.click();
                }}
              >
                Download Cv
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
