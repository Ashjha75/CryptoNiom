import { Link } from "react-router-dom";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { FaHome, FaChartBar, FaBitcoin, FaBuilding } from "react-icons/fa";

const Header = () => {
  const [navtoggle, setnavtoggle] = useState(true);
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div
        className="bg-[#1e435d] fixed w-[100%] md:h-14 h-[5rem] z-10
        md:top-0 md:shadow-emerald-500 -bottom-5
       "
      >
        {isOpen ? (
          <div className=" md:flex md:justify-between">
            <div className="hidden md:flex border-yellow-500 border-l-4 border-t-4 rounded-3xl px-2 ml-2 ">
              <span className="hidden  font-extrabold text-xl h-14  ml-5 md:flex items-center drop-shadow-[0_35px_35px_rgba(255,255,0,1)] text-yellow-400  ">
                <Link to="/" className=" mt-1 md:mr-6">
                  Cryptoniom
                </Link>
              </span>
            </div>

            <div className="flex justify-around md:justify-end text-white  ">
              <Link to="/" className=" mt-1 md:mr-6">
                <button
                  className="cursor-pointer w-12 h-12  hover:border-4 hover:border-white flex 
                justify-center items-center rounded-full hover:bg-yellow-300 md:hover:bg-[#193549] md:hover:border-0 md:focus:ring md:rounded-md  md:focus:ring-blue-400 md:focus:bg-[#2a475ce7]"
                >
                  <span className="flex ">
                    <FaHome className="fill-white text-2xl md:hidden" />
                    <span className="text-xs md:flex hidden md:text-lg md:hover:underline">
                      {" "}
                      Home
                    </span>
                  </span>
                </button>
              </Link>
              <Link to="/coins" className=" mt-1 md:mr-10 md:ml-4">
                <button className="cursor-pointer w-12 h-12  hover:border-4 hover:border-white flex justify-around items-center rounded-full hover:bg-yellow-300 md:hover:bg-[#193549]  md:hover:border-0 md:focus:ring md:rounded-md  md:focus:ring-blue-400 md:focus:bg-[#2a475ce7] ">
                  <span className="flex ">
                    <FaBitcoin className="fill-white text-2xl md:hidden" />
                    <span className="text-xs md:flex hidden md:text-lg md:hover:underline">
                      {" "}
                      Coins
                    </span>
                  </span>
                </button>
              </Link>

              <Link to="/exchanges" className=" mt-1 md:ml-4 md:mr-20 ">
                <button className="cursor-pointer w-12 md:w-fit h-12  hover:border-4 hover:border-white flex justify-around items-center rounded-full hover:bg-yellow-300 md:hover:bg-[#193549] md:hover:border-0 md:focus:ring md:rounded-md  md:focus:ring-blue-400 md:focus:bg-[#2a475ce7]">
                  <span className="flex ">
                    <FaBuilding className="fill-white text-2xl md:hidden  " />
                    <span className="text-xs md:flex hidden md:text-lg md:hover:underline">
                      {" "}
                      Exchanges{" "}
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
