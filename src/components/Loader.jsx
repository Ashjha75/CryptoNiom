import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-[50%] right-[35%] sm:right-[50%]">
      <div className=" flex justify-center items-center ">
        <div className="  border-4 75ms  border-t-blue-700 border-l-blue-700 border-b-blue-200 border-r-blue-200 rounded-[50%] delay-75 w-20 h-20 animate-spin "></div>
      </div>
    </div>
  );
};

export default Loader;
