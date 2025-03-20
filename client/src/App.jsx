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
      <div className="bg-[#151312]  pt-9 ">
        <Navbar></Navbar>
        <div className="flex justify-center  mt-14 gap-4">
          {/* <div className=" flex   items-end h-[70vh]"> */}
          <div className="w-[10vw] ml-4 mt-[500px] sticky top-[600px]   text-white  space-x-2 h-fit rounded-md bg-orange-600   py-1 px-1 flex ">
            <i class="fa-solid fa-arrow-down mt-1 font-bold"></i>
            <span>Resume | CV</span>
          </div>
          {/* </div> */}
          <div className="flex  w-full gap-28 ">
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
      </div>
    </>
  );
}

export default App;
