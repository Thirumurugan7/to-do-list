import React from "react";

const InputComponent = () => {
  return (
    <div>
      <label className="font-rajdhani font-semibold text-2xl text-white">
        Name
      </label>
      <input
        type="text"
        placeholder="Enter your name to start"
        className=" mx-5 bg-siteDimBlack text-black outline-none focus:outline-siteViolet p-2 rounded-md sm:max-w-[40%] max-w-full"
      />

      <div className="mt-4 text-center px-15 ml-20">
        <button className="block border border-pink-200 px-4 rounded-full py-1 text-md font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          {" "}
          submit
        </button>
      </div>

      <div className="bottom-0 text-yellow-200">
        Made with Love by Gryffindors
      </div>
    </div>
  );
};

export default InputComponent;
