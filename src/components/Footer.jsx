import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FB002B] py-2 md:px-20 px-6 ">
      <div className="flex md:flex lg:flex-row md:flex-row mx-auto items-center  flex-col justify-between text-sm   text-[#DCDCDC] font-normal">
        <p>
          Copyright © 2023{" "}
          <span className="text-black font-bold"> Emmanuel. </span> All Rights
          Reserved.
        </p>
        <div className="flex gap-1">
          <p>Terms & Policy</p>
          <p> Disclaimer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
