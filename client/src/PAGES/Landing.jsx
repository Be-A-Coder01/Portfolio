import React from "react";

const Landing = () => {
  return (
    <section
      id="home"
      className="  w-screen md:w-[52vw] lg:w-[40vw]  flex flex-col md:gap-7 lg:gap-10"
    >
      <div>
        <p className=" text-[60px] md:text-[70px] lg:text-[110px] font-bold flex flex-col  ">
          <p className="text-white mx-auto md:mx-0">SOFTWARE</p>
          <p className="text-[#322f2e] leading-9 mx-auto md:mx-0">ENGINEER</p>
        </p>
      </div>
      <div className="py-9 md:py-5">
        <p className="text-[#998F8F] text-[20px] w-[93vw] mx-auto md:mx-0   md:w-[43vw]  lg:w-[30vw] md:text-[18px] ">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="flex mx-auto md:mx-0 gap-12 my-6 md:my-0  md:gap-14">
        <div>
          <div className="text-[50px] md:text-[56px] lg:text-[66px] font-semibold text-white leading-9 pb-4">
            +1
          </div>
          <div className="text-[#998F8F] text-[16px] md:text-[16px]">
            YEARS OF <br /> EXPERIENCE
          </div>
        </div>
        <div>
          <div className="text-[50px] md:text-[56px] lg:text-[66px] font-semibold text-white leading-9 pb-4">
            +5
          </div>
          <div className="text-[#998F8F] text-[16px] md:text-[16px]">
            PROJECTS
            <br /> COMPLETED
          </div>
        </div>
        <div>
          <div className="text-[50px] md:text-[56px] lg:text-[66px] font-semibold text-white leading-9 pb-4">
            +7
          </div>
          <div className="text-[#998F8F] text-[16px] md:text-[16px]">
            HACKATHON <br /> WINS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
