import React from "react";

const InputComponent = () => {
  return (
    <div>
      <label className="font-rajdhani font-semibold text-2xl text-white">
        Folks we need your name to Proceed
      </label>
      <input
        type="text"
        placeholder="Enter your name to start"
        className="block mt-5 bg-siteDimBlack text-black outline-none focus:outline-siteViolet p-2 rounded-md sm:max-w-[80%] max-w-full"
      />

      <div className="mt-4 text-center px-25 ml-7">
        <button className="block border border-pink-200 px-10 rounded-full py-1 text-[20px] font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          {" "}
          submit
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
