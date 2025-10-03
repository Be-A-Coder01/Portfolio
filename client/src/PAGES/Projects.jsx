import React from "react";
import project1_img from "../assets/projectimg1.png";
import project2_img from "../assets/projectimg2.png";
import project3_img from "../assets/projectimg3.png";
import project4_img from "../assets/projectimg4.png";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="  md:w-[52vw] lg:w-[40vw]  my-24 flex flex-col gap-20"
      >
        <div>
          <p className="text-[60px] lg:text-[110px] md:text-[70px]  font-bold flex flex-col ">
            <p className="text-white mx-auto md:mx-0">RECENT</p>
            <p className="text-[#322f2e] leading-9 mx-auto md:mx-0">PROJECTS</p>
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div
            className="mx-4 py-10 bg-[#1C1A19] md:bg-[#151312] md:mx-0 md:py-5 flex flex-col md:flex md:flex-row shadow-2xl md:shadow-none md:hover:bg-[#1C1A19] gap-y-7  md:gap-6  p-4 rounded-xl place-items-center  cursor-pointer"
            onClick={() => {
              window.open("https://ciniverse.vercel.app", "_blank");
            }}
          >
            <img
              src={project1_img}
              className="h-44 md:h-28 md:w-48 lg:h-32 lg:w-52  shadow-2xl shadow-purple-800 rounded-lg"
            />
            <div className="flex md:flex md:flex-col">
              <p className="text-[35px] md:text-[23px] lg:text-[26px] font-bold text-white">
                Ciniverse
              </p>
              <p className="text-[18px] hidden md:block md:text-[23px] lg:text-[16px]  font-normal text-[#998F8F]">
                Trailer App
              </p>
            </div>
          </div>

          <div
            className="mx-4 py-10 bg-[#1C1A19] md:bg-[#151312] md:mx-0 md:py-5 flex flex-col md:flex md:flex-row shadow-2xl md:shadow-none md:hover:bg-[#1C1A19] gap-y-7  md:gap-6  p-4 rounded-xl place-items-center  cursor-pointer"
            onClick={() => {
              window.open("https://github.com/Be-A-Coder01/ORI", "_blank");
            }}
          >
            <img
              src={project2_img}
              className="h-44 md:h-28 md:w-48 lg:h-32 lg:w-52  shadow-2xl shadow-purple-800 rounded-lg"
            />
            <div className="">
              <p className="text-[35px] md:text-[23px] lg:text-[26px] font-bold text-white">
                ORI
              </p>
              <p className="text-[18px] hidden md:block md:text-[23px] lg:text-[16px]  font-normal text-[#998F8F]">
                E-commerce Website
              </p>
            </div>
          </div>
          <div
            className="mx-4 py-10 bg-[#1C1A19] md:bg-[#151312] md:mx-0 md:py-5 flex flex-col md:flex md:flex-row shadow-2xl md:shadow-none md:hover:bg-[#1C1A19] gap-y-7  md:gap-6  p-4 rounded-xl place-items-center  cursor-pointer"
            onClick={() => {
              window.open("https://github.com/Be-A-Coder01/Nest", "_blank");
            }}
          >
            <img
              src={project3_img}
              className="h-44 md:h-28 md:w-48 lg:h-32 lg:w-52  shadow-2xl shadow-purple-800 rounded-lg"
            />
            <div className="">
              <p className="text-[35px] md:text-[23px] lg:text-[26px] font-bold text-white">
                Nest
              </p>
              <p className="text-[18px] hidden md:block md:text-[23px] lg:text-[16px]  font-normal text-[#998F8F]">
                Social Media App
              </p>
            </div>
          </div>
          {/* <div>
            <img src="" alt="" />
            <div></div>
          </div>
          <div>
            <img src="" alt="" />
            <div></div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
