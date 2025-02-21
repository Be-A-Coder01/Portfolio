import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-20">
        <div className=" flex flex-col text-[90px] font-bold">
          <span className="text-white">LETS'S WORK</span>
          <span className="text-[#353334] leading-9">TOGETHER</span>
        </div>

        <form action="" className="flex flex-col gap-7 mt-20  w-full">
          <div className=" flex justify-between">
            <div className="flex flex-col  w-[48%]">
              <label htmlFor="name" className="mb-2 text-[#999999] text-[12px]">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#353334] text-[#999999] py-2 rounded-md pl-3"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col w-[48%]">
              <label
                htmlFor="email"
                className="mb-2 text-[#999999] text-[12px]"
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
          <div className="flex flex-col">
            <label htmlFor="about" className="mb-2 text-[#999999] text-[12px]">
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
          <button className=" py-2 bg-[#F46C38] rounded-md text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
