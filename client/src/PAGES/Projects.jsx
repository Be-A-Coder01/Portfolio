import React from "react";
import project1_img from "../assets/projectimg1.png";
import project2_img from "../assets/projectimg2.png";
import project3_img from "../assets/projectimg3.png";
import project4_img from "../assets/projectimg4.png";

const Projects = () => {
  return (
    <>
      <div className=" my-24 flex flex-col gap-20">
        <div>
          <p className=" text-[110px] font-bold flex flex-col  ">
            <p className="text-white ">RECENT</p>
            <p className="text-[#322f2e] leading-9">PROJECTS</p>
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-6  p-4 rounded-xl place-items-center ">
            <img
              src={project1_img}
              className="h-32 w-52  shadow-2xl shadow-purple-800 rounded-lg"
            />
            <div className="">
              <p className="text-[26px] font-bold text-white">Ciniverse</p>
              <p className="text-[16px] font-normal text-[#998F8F]">
                Trailer App
              </p>
            </div>
          </div>
          <div className="flex gap-6  p-4 rounded-xl  place-items-center ">
            <img
              src={project2_img}
              className="h-32 w-52  shadow-2xl shadow-purple-800 rounded-lg"
            />
            <div className="">
              <p className="text-[26px] font-bold text-white">ORI</p>
              <p className="text-[16px] font-normal text-[#998F8F]">
                E-commerce Website
              </p>
            </div>
          </div>
          <div className="flex gap-6 p-4 rounded-xl  place-items-center ">
            <img
              src={project3_img}
              className="h-32 w-52   shadow-2xl shadow-purple-800 rounded-lg"
            />
            <div className="">
              <p className="text-[26px] font-bold text-white">Nest</p>
              <p className="text-[16px] font-normal text-[#998F8F]">
                Social Media App
              </p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div></div>
          </div>
          <div>
            <img src="" alt="" />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
