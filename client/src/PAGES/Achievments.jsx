import React from "react";
import ac1 from "../assets/ac1.jpeg";
import "../App.css";

const Achievments = () => {
  return (
    <section id="achievments" className=" mt-20">
      <p className="lg:text-[90px] md:text-[55px] font-bold mb-14 text-white">
        ACHIEV
        <span className="text-[#322f2e]">MENTS</span>
      </p>
      <div
        id="achievments-scrollbar"
        className=" md:h-[60vh] lg:h-[80vh]  flex flex-col gap-12  "
      >
        <div className=" flex space-x-5 hover:bg-[#1C1A19] p-4 rounded-2xl">
          <img
            src={ac1}
            className="md:h-28 md:w-48 lg:h-32 lg:w-52 rounded-md"
          />
          <div className="flex flex-col ">
            <p className="text-white text-[30px] font-bold  inline-block">
              1st price
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              Web development
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              @ St. Joseph Univerity
            </p>
          </div>
        </div>
        <div className=" flex space-x-5 hover:bg-[#1C1A19] p-4 rounded-2xl">
          <img
            src={ac1}
            className="md:h-28 md:w-48 lg:h-32 lg:w-52 rounded-md"
          />
          <div className="flex flex-col ">
            <p className="text-white text-[30px] font-bold  inline-block">
              1st price
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              Web development
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              @ St. Joseph Univerity
            </p>
          </div>
        </div>
        <div className=" flex space-x-5 hover:bg-[#1C1A19] p-4 rounded-2xl">
          <img
            src={ac1}
            className="md:h-28 md:w-48 lg:h-32 lg:w-52 rounded-md"
          />
          <div className="flex flex-col ">
            <p className="text-white text-[30px] font-bold  inline-block">
              1st price
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              Web development
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              @ St. Joseph Univerity
            </p>
          </div>
        </div>
        {/* <div className=" flex space-x-5">
          <img src={ac1} className="h-32 w-52 rounded-md" />
          <div className="flex flex-col ">
            <p className="text-white text-[30px] font-bold  inline-block">
              1st price
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              Web development
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              @ St. Joseph Univerity
            </p>
          </div>
        </div> */}
        {/* <div className=" flex space-x-5">
          <img src={ac1} className="h-32 w-52 rounded-md" />
          <div className="flex flex-col ">
            <p className="text-white text-[30px] font-bold  inline-block">
              1st price
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              Web development
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              @ St. Joseph Univerity
            </p>
          </div>
        </div> */}
        {/* <div className=" flex space-x-5">
          <img src={ac1} className="h-32 w-52 rounded-md" />
          <div className="flex flex-col ">
            <p className="text-white text-[30px] font-bold  inline-block">
              1st price
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              Web development
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              @ St. Joseph Univerity
            </p>
          </div>
        </div> */}
        {/* <div className=" flex space-x-5">
          <img src={ac1} className="h-32 w-52 rounded-md" />
          <div className="flex flex-col ">
            <p className="text-white text-[30px] font-bold  inline-block">
              1st price
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              Web development
            </p>
            <p className="text-[#322f2e] text-[15px] font-semibold mt-[-5px]">
              @ St. Joseph Univerity
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Achievments;
