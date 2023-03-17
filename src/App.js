import "./App.css";
import InputComponent from "./components/InputComponent";
function App() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="pt-14 px-14">
        <div className="text-bold">
          <h2 className="text-white text-lg font-bold">Hi 👋</h2>
          <h2 className="text-white text-xl mt-6">
            Welcome to my first project
          </h2>
        </div>
        <div className="mt-6 ">
          <div>
            <InputComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
