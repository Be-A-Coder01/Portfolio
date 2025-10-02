import React from "react";
import pimg2 from "../assets/pimg2.png";

const Personalcard = () => {
  // function to download resume
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/AdeshLM.pdf";
    link.download = "Adesh_Resume.pdf";
    link.click();
  };

  return (
    <div className="border-2 flex flex-col sticky md:top-20 lg:top-10 md:h-[500px] lg:h-[620px] md:w-[290px] lg:w-[344px] rounded-3xl bg-[#FFFFFF] py-8">
      <div>
        <img
          src={pimg2}
          className="md:h-[200px] md:w-[200px] lg:h-[284px] lg:w-[240px] rounded-xl mx-auto"
          alt="profile"
        />
      </div>

      <div>
        <p className="md:text-[27px] my-2 lg:text-[36px] font-bold text-center">
          Adesh.M
        </p>
      </div>

      <div className="flex flex-col md:gap-8 lg:gap-10">
        <div className="px-4 text-center">
          <p className="font-medium text-[16px] text-gray-500">
            A Software Engineer who has developed countless innovative
            solutions.
          </p>
        </div>

        <div className="flex justify-evenly px-14">
          <a
            href="https://www.linkedin.com/in/adeshmendekar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-linkedin text-xl text-orange-600 
      transition-transform duration-300 hover:scale-125 hover:text-blue-600 cursor-pointer"
            ></i>
          </a>

          <a href="https://github.com/Be-A-Coder01" target="_blank">
            <i
              className="fa-brands fa-github text-xl text-orange-600 
      transition-transform duration-300 hover:scale-125 hover:text-black cursor-pointer"
            ></i>
          </a>

          <a href="https://wa.me/919136191475" target="_blank">
            <i
              className="fa-brands fa-whatsapp text-xl text-orange-600 
      transition-transform duration-300 hover:scale-125 hover:text-green-500 cursor-pointer"
            ></i>
          </a>

          <a href="mailto:adeshmendekar07@gmail.com">
            <i
              className="fa-solid fa-envelope text-xl text-orange-600 
      transition-transform duration-300 hover:scale-125 hover:text-black cursor-pointer"
            ></i>
          </a>
        </div>

        <div className="flex justify-center">
          <div
            className="w-[170px] md:-mt-4 lg:-mt-4 text-white space-x-2 md:h-[40px] lg:h-fit rounded-md bg-orange-600 py-2 justify-center flex cursor-pointer"
            onClick={downloadResume}
          >
            <i className="fa-solid fa-arrow-down mt-1 font-bold"></i>
            <span>Resume | CV</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalcard;
