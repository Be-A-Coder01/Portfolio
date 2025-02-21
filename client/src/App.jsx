import "./App.css";
import Navbar from "./PAGES/Navbar";
import Personalcard from "./PAGES/Personalcard";
import Landing from "./PAGES/Landing";
import Projects from "./PAGES/Projects";
import Skills from "./PAGES/Skills";
import Contact from "./PAGES/Contact";

function App() {
  return (
    <>
      <div className="bg-[#151312]  pt-9 ">
        <Navbar></Navbar>
        <div className="flex justify-center mt-14 gap-28">
          <div>
            <Personalcard></Personalcard>
          </div>
          <div>
            <Landing></Landing>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
