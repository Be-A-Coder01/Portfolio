import React from "react";

const Landing = () => {
  return (
    <section
      id="home"
      className=" md:w-[52vw] lg:w-[40vw] border-yellow-500 flex flex-col md:gap-7 lg:gap-10"
    >
      <div>
        <p className="   border-green-800 md:text-[70px] lg:text-[110px] font-bold flex flex-col  ">
          <p className="text-white ">SOFTWARE</p>
          <p className="text-[#322f2e] leading-9">ENGINEER</p>
        </p>
      </div>
      <div className="py-5">
        <p className="text-[#998F8F]  md:w-[43vw]  lg:w-[30vw] text-[18px] ">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="flex gap-14">
        <div>
          <div className="md:text-[56px] lg:text-[66px] font-semibold text-white leading-9 pb-4">
            +1
          </div>
          <div className="text-[#998F8F]">
            YEARS OF <br /> EXPERIENCE
          </div>
        </div>
        <div>
          <div className="md:text-[56px] lg:text-[66px] font-semibold text-white leading-9 pb-4">
            +5
          </div>
          <div className="text-[#998F8F]">
            PROJECTS
            <br /> COMPLETED
          </div>
        </div>
        <div>
          <div className="md:text-[56px] lg:text-[66px] font-semibold text-white leading-9 pb-4">
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
