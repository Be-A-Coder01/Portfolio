import React from "react";

const Landing = () => {
  return (
    <section id="home" className=" flex flex-col gap-10">
      <div>
        <p className=" text-[110px] font-bold flex flex-col  ">
          <p className="text-white ">SOFTWARE</p>
          <p className="text-[#322f2e] leading-9">ENGINEER</p>
        </p>
      </div>
      <div className="py-5">
        <p className="text-[#998F8F]   w-[30vw] text-[18px] ">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="flex gap-14">
        <div>
          <div className="text-[66px] font-semibold text-white leading-9 pb-4">
            +1
          </div>
          <div className="text-[#998F8F]">
            YEARS OF <br /> EXPERIENCE
          </div>
        </div>
        <div>
          <div className="text-[66px] font-semibold text-white leading-9 pb-4">
            +5
          </div>
          <div className="text-[#998F8F]">
            PROJECTS
            <br /> COMPLETED
          </div>
        </div>
        <div>
          <div className="text-[66px] font-semibold text-white leading-9 pb-4">
            +7
          </div>
          <div className="text-[#998F8F]">
            HACKATHON <br /> WINS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
