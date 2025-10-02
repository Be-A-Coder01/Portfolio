import React from "react";

const Navbar = () => {
  return (
    <div className="rounded-2xl flex gap-6 md:gap-9 w-fit  lg:gap-9 bg-[#1C1A19] text-white px-10 justify-center h-10 items-center mx-auto ">
      <a href="#home">
        <i class="fa-solid fa-house text-lg hover:-mt-2"></i>
      </a>

      <a href="#projects">
        <i class="fa-solid fa-folder text-lg hover:-mt-2"></i>
      </a>
      <a href="#contact">
        <i class="fa-solid fa-suitcase text-lg hover:-mt-2"></i>
      </a>

      <a href="#skills">
        <i class="fa-solid fa-wrench text-lg hover:-mt-2"></i>
      </a>

      <i class="fa-solid fa-graduation-cap text-lg hover:-mt-2"></i>
      <a href="#achievments">
        <i class="fa-solid fa-certificate text-lg  hover:-mt-2 "></i>
      </a>
    </div>
  );
};

export default Navbar;
