import React from "react";
import tool1 from "../assets/react.png";
import tool2 from "../assets/tailwind.png";
import tool3 from "../assets/node.png";
import tool4 from "../assets/express.png";
import tool5 from "../assets/redux.png";
import tool6 from "../assets/Java.png";
import tool7 from "../assets/postman.png";
import tool8 from "../assets/js.png";
import tool9 from "../assets/jwt.png";
import tool10 from "../assets/npm.png";
import tool11 from "../assets/mongodb.png";
import tool12 from "../assets/python.png";
import tool13 from "../assets/mongoose.png";
import tool14 from "../assets/stripe.png";
import tool15 from "../assets/linux.png";

const Skills = () => {
  return (
    <>
      <section id="skills" className="flex flex-col gap-24 ">
        <div>
          <p className=" text-[70px] lg:text-[110px] md:text-[70px] font-bold flex flex-col  ">
            <p className="text-white mx-auto md:mx-0 ">PREMIUM </p>
            <p className="text-[#322f2e] leading-9 mx-auto md:mx-0">SKILLS</p>
          </p>
        </div>
        <div className=" md:w-[55vw] lg:w-[45vw]  ">
          <div className="flex flex-wrap px-2 md:justify-items-center gap-x-16 gap-y-5 md:gap-y-10 md:gap-x-2 lg:gap-y-5 ">
            <div className="  w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool1} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Reactjs
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Js Library
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool2} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  TailwindCss
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Css Framework
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool3} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Nodejs
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Js Runtime
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool4} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Expressjs
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Nodejs Framework
                </p>
              </div>
            </div>
            <div className=" w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool5} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Redux
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  State Managment
                </p>
              </div>
            </div>
            <div className=" w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool6} className=" h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Java
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Programming Language
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool7} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Postman
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  API Testing
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool8} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Javascript
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Scripting Language
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool9} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  JWT
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Authentication & Authorization Tool
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool10} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  NPM
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Package Manager
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool11} className="h-14 md:h-14 rounded-2xl" />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  MongoDB
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Database
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool12} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Python
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Scripting Language
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool13} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Mongoose
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  JavaScript library
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool14} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Stripe
                </p>
                <p className="hidden md:block text-[9px] md:text-[10px] font-normal text-[#998F8F]">
                  Payment Gateway
                </p>
              </div>
            </div>
            <div className="w-[12vw] flex flex-col md:flex-row place-items-center gap-2 md:gap-4 hover:bg-[#1C1A19] p-3 rounded-lg   lg:mr-10 lg:my-5">
              <img src={tool15} className="h-14 md:h-14 rounded-2xl " />
              <div className="md:hidden lg:block">
                <p className="text-white text-[12px] md:text-[16px] font-medium">
                  Linux
                </p>
                <p className="text-[9px] hidden md:block md:text-[10px] font-normal text-[#998F8F]">
                  Operating System
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
