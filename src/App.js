import "./App.css";
import InputComponent from "./components/InputComponent";
function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-start items-start">
        <div className="pt-14 px-14 mt-20">
          <div className="text-bold ml-10">
            <h2 className="text-white text-[40px] font-bold">Hi 👋</h2>
            <h2 className="text-white text-xl mt-6">
              Welcome to my first project
            </h2>
          </div>
          <div className="mt-10 ml-10 ">
            <div>
              <InputComponent />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500  text-white flex justify-center items-center">
        <h3 className="text-lg  fixed bottom-0">
          {" "}
          Made with ❤ by Gryffindors{" "}
        </h3>
      </div>
    </>
  );
}

export default App;
