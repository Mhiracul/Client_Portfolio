import React, { useEffect } from "react";
import { data } from "../data/data.js";
import Slider from "react-slick";

const Work = () => {
  const project = data;

  useEffect(() => {
    // Load the slick-carousel CSS dynamically when the component mounts
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of projects shown at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false, // Hide dots navigation on small phones
          arrows: true, // Show arrow navigation on small phones
        },
      },
    ],
  };

  return (
    <div className="h-full bg-[#e9e9e9] py-10">
      <div name="work" className="w-full  text-[#f44c4c]  px-20">
        <div className="mx-auto  flex flex-col justify-center">
          <div className="pb-3">
            <p className="text-4xl font-bold inline border-b-4 text-black border-white md:text-center">
              Work
            </p>
            <p className="py-1 font-medium">Check out some of my recent work</p>
          </div>

          <div className="container mx-auto px-4 py-16">
            <Slider {...sliderSettings}>
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
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
