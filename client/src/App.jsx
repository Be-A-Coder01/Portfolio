// import "./App.css";
import Navbar from "./PAGES/Navbar";
import Personalcard from "./PAGES/Personalcard";
import Landing from "./PAGES/Landing";

function App() {
  return (
    <>
      <div className="bg-[#151312] pt-9">
        <Navbar></Navbar>
        <div className="flex justify-center mt-14 gap-28">
          <div>
            <Personalcard></Personalcard>
          </div>
          <div>
            <Landing></Landing>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
