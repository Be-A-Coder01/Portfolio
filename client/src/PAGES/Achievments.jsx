import React from "react";
import ac1 from "../assets/ac1.jpeg";
import ac2 from "../assets/achieve1.png";
import ac3 from "../assets/achieve3.png";
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
        className=" md:h-[60vh] lg:h-fit  flex gap-y-10 gap-x-2  flex-wrap   "
      >
        <div className="flex flex-row w-[27vw]  space-x-5 bg-[#1C1A19] h-fit p-3 rounded-2xl">
          <p className="text-white">
            🏆 I’ve won 7 hackathons during my academic journey, solving 💻
            real-world problems of companies through technology, experimenting
            with innovative ideas 💡, and collaborating effectively with diverse
            teams.
          </p>
        </div>
        <div className="flex flex-row w-[27vw]  space-x-5 bg-[#1C1A19] h-fit p-3 rounded-2xl">
          <p className="text-white">
            💻 Independently developed a dashboard for a startUp 🏢 to track the
            health of 1,000+ sheep 🐏 using MERN stack which directly gets the
            data from IoT 👨🏿‍🚀, providing real-time insights and improving
            livestock management efficiency
          </p>
        </div>
        <div className="flex flex-row w-[27vw] space-x-5 bg-[#1C1A19] p-3 h-fit rounded-2xl">
          <p className="text-white">
            🔒 Built FacePay’s facial-login with blink-based liveness checks to
            stop password spoofing, boosting payment security and user
            convenience. Contributing to a problem facing by most of the fintech
            firms.
          </p>
        </div>
        <div className="flex flex-row w-[27vw] space-x-5 bg-[#1C1A19] p-3 h-fit rounded-2xl">
          <p className="text-white">
            💡 I’m deeply interested in defence technology 🔧 and enjoy
            inventing practical, ethical solutions. 📝 I’m currently working to
            patent several ideas that could improve safety 🛡️ and national
            security.
          </p>
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
