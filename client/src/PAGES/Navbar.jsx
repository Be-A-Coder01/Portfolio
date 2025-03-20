import React from "react";

const Navbar = () => {
  return (
    <div className="rounded-3xl flex  gap-9 bg-[#1C1A19] text-white w-3/12 justify-center h-10 items-center mx-auto ">
      <i class="fa-solid fa-house text-lg"></i>
      <i class="fa-solid fa-folder text-lg"></i>
      <i class="fa-solid fa-suitcase text-lg"></i>
      <a href="#skills">
        <i class="fa-solid fa-wrench text-lg"></i>
      </a>
      <i class="fa-solid fa-graduation-cap text-lg"></i>
      <i class="fa-solid fa-certificate text-lg"></i>
    </div>
  );
};

export default Navbar;
