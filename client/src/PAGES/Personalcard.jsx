import React from "react";
import pimg2 from "../assets/pimg2.png";

const Personalcard = () => {
  return (
    <div className="   sticky  top-20 h-[600px] w-[344px] rounded-3xl bg-[#FFFFFF] py-8">
      <div className="">
        <img src={pimg2} className="h-[284px] w-[240px] rounded-xl mx-auto" />
      </div>
      <div className="">
        <p className="text-[36px] font-bold text-center">Adesh.M</p>
      </div>
      <div className="flex flex-col gap-10">
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
        <div className="w-[11vw] -mt-4  -ml-20 text-white  space-x-2 h-fit rounded-md bg-orange-600   py-2 justify-center flex ">
          <i class="fa-solid fa-arrow-down mt-1 font-bold"></i>
          <span className="">Resume | CV</span>
        </div>
      </div>
    </div>
  );
};

export default Personalcard;
