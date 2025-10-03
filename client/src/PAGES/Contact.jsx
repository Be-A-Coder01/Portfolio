import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className=" my-20 md:my-0  lg:my-20">
        <div className=" flex flex-col text-[60px] lg:text-[110px] md:text-[60px] font-bold">
          <span className="text-white mx-auto md:mx-0">LETS'S WORK</span>
          <span className="text-[#353334] leading-9 mx-auto md:mx-0">
            TOGETHER
          </span>
        </div>

        <form
          action=""
          className="flex flex-col gap-7 mt-20 md:mt-14 lg:mt-20  lg:w-full"
        >
          <div className=" mx-auto md:mx-0 w-[90%] flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-0 lg:justify-between">
            <div className="flex flex-col  md:w-[44%] lg:w-[48%]">
              <label
                htmlFor="name"
                className="mb-2 text-[#999999] hidden md:block md:text-[12px]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#353334] text-[#999999] py-2 rounded-md pl-3"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col md:w-[44%] lg:w-[48%]">
              <label
                htmlFor="email"
                className="mb-2 text-[#999999] hidden md:block md:text-[12px]"
              >
                Email
              </label>
              <input
                type="text"
                className="bg-[#353334] text-[#999999] py-2 rounded-md pl-3"
                id="email"
                placeholder="Your@email.com"
              />
            </div>
          </div>
          <div className="mx-auto md:mx-0 flex flex-col  w-[90%]   ">
            <label
              htmlFor="about"
              className="mb-2 text-[#999999] hidden md:block md:text-[12px]"
            >
              Message
            </label>
            <textarea
              name=""
              placeholder="Message"
              className="bg-[#353334] rounded-md   p-2 text-[#999999] "
              rows="4"
              cols="50"
              id="about"
            ></textarea>
          </div>
          <button className="w-[90%] mx-auto md:mx-0 py-2 bg-[#F46C38] rounded-md text-white">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
