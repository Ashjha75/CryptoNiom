import React from "react";
import errorsm from "../assets/404 error with portals-amico.png";
import { Link } from "react-router-dom";

function ErrorComponent({ messages }) {
  return (
    <>
      <div className="flex  justify-center items-center flex-col md:flex-row h-screen  w-screen fixed bg-slate-900">
        <img
          src={errorsm}
          alt="e"
          className="w-60 h-60 mr-14 ml-12 md:ml-0 motion-safe:animate-bounce"
        />
        <div className="flex flex-col ">
          <h1 className="text-white text-6xl md:text-8xl ml-10 md:ml-0 mb-7 hover:text-yellow-500">
            4 0 4
          </h1>
          <p className="text-white text-xl hover:text-yellow-500 ml-10 md:ml-0">
            {messages}
          </p>
          <button className="ml-12 md:ml-0 text-white w-20 bg-blue-700 hover:bg-blue-600  mt-5 rounded-lg mx-4 py-3 px-4 flex">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorComponent;
