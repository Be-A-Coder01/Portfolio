import React from "react";

const Navbar = () => {
  return (
    <div className="rounded-3xl flex  gap-14 bg-[#1C1A19] text-white w-3/12 justify-center h-10 items-center mx-auto ">
      <a href="#home">
        <i class="fa-solid fa-house text-lg"></i>
      </a>

      <a href="#projects">
        <i class="fa-solid fa-folder text-lg"></i>
      </a>
      <a href="#contact">
        <i class="fa-solid fa-suitcase text-lg"></i>
      </a>

      <a href="#skills">
        <i class="fa-solid fa-wrench text-lg"></i>
      </a>
      {/* <i class="fa-solid fa-graduation-cap text-lg"></i> */}
      <a href="#achievments">
        <i class="fa-solid fa-certificate text-lg"></i>
      </a>
    </div>
  );
};

export default Navbar;
