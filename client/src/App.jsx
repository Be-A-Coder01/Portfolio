import "./App.css";
import Navbar from "./PAGES/Navbar";
import Personalcard from "./PAGES/Personalcard";
import Landing from "./PAGES/Landing";
import Projects from "./PAGES/Projects";
import Skills from "./PAGES/Skills";
import Contact from "./PAGES/Contact";
import Achievments from "./PAGES/Achievments";

function App() {
  return (
    <>
      <div className="bg-[#151312] md:w-screen  lg:w-full  pt-9 ">
        <Navbar></Navbar>
        {/* <div className="flex justify-center  relative  mt-14 gap-4"> */}
        {/* <div className=" flex   items-end h-[70vh]"> */}
        {/* <div className="w-[11vw]  ml-28   sticky mt-[500px]  top-[600px]   text-white  space-x-2 h-fit rounded-md bg-orange-600   py-2 px-3 flex ">
            <i class="fa-solid fa-arrow-down mt-1 font-bold"></i>
            <span className="">Resume | CV</span>
          </div> */}
        {/* </div> */}
        <div className=" flex lg:justify-center md:mx-7 lg:mx-0 w-full md:gap-10 lg:gap-28 md:w-[96vw] lg:w-full   mt-14">
          <div>
            <Personalcard></Personalcard>
          </div>
          <div>
            <Landing></Landing>
            <Projects></Projects>
            <Skills></Skills>
            <Achievments></Achievments>
            <Contact></Contact>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
