import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full py-10 text-[#000130] relative overflow-hidden"
    >
      {/* Add a slanted cut to the background */}

      <div className="flex flex-col justify-center items-center w-full h-full relative z-10">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-black text-[#FB002B]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Emmanuel Okereafor, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="text-white] font-medium">
              I am passionate about building excellent Graphic Design and UI/UX
              Design that improves the lives of those around me. I specialize in
              creating Designs for clients ranging from individuals and
              small-businesses all the way to large enterprise corporations.
              What would you do if you had a Graphic Design expert available at
              your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
