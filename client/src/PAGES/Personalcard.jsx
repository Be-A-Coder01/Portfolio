import React from "react";
import pimg2 from "../assets/pimg2.png";

const Personalcard = () => {
  return (
    <div className=" border-2  sticky md:top-20 lg:top-10 md:h-[500px] lg:h-[620px] md:w-[290px] lg:w-[344px] rounded-3xl bg-[#FFFFFF] py-8">
      <div className="">
        <img
          src={pimg2}
          className="md:h-[200px] md:w-[200px] lg:h-[284px] lg:w-[240px] rounded-xl mx-auto"
        />
      </div>
      <div className="">
        <p className="md:text-[27px] my-2 lg:text-[36px] font-bold text-center">
          Adesh.M
        </p>
      </div>
      <div className="flex flex-col md:gap-8 lg:gap-10">
        {/* <div className="border-2 border-orange-500 border-dashed mt-5"></div> */}
        <div className=" px-4 text-center ">
          <p className="font-medium text-[16px] text-gray-500">
            A Software Enginner who has developed countless innovative
            solutions.
          </p>
        </div>

        <div className=" flex justify-evenly px-14">
          <i class="fa-brands fa-linkedin text-xl text-orange-600"></i>
          <i class="fa-brands fa-github text-xl text-orange-600"></i>
          <i class="fa-brands fa-whatsapp text-xl text-orange-600"></i>
          <i class="fa-solid fa-envelope text-xl text-orange-600"></i>
        </div>
        <div className="w-[170px] md:-mt-4 lg:-mt-4 md:ml-14 lg:-ml-20 text-white  space-x-2 md:h-[40px] lg:h-fit rounded-md bg-orange-600   py-2 justify-center flex ">
          <i class="fa-solid fa-arrow-down mt-1 font-bold"></i>
          <span className="">Resume | CV</span>
        </div>
      </div>
    </div>
  );
};

export default Personalcard;
