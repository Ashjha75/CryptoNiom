import herophoto from "../assets/portfolio-section.png";
import bitcoin from "../assets/bitcoin.png";
import doge from "../assets/dogecoin.png";
import eth from "../assets/ethereum.png";
import bnb from "../assets/bnb-icon2_2x.png";
import graphs from "../assets/graph.png";
import lock from "../assets/icon-security.png";
import lap from "../assets/icon-customizable_interface.png";
import mtrad from "../assets/icon-margin_trading.png";
import exchangess from "../assets/icon-exchange.png";
import mfund from "../assets/icon-margin_funding.png";
import iorder from "../assets/icon-order_type.png";
import app from "../assets/app-min (2) (1).png";
import headphone from "../assets/robot.db498acd.png";
import qr from "../assets/download (2).png";
import medias from "../assets/medias.bf6f3fae.png";
// images imported
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col  items-center bg-[#f0e7fb] z-5">
      <section className="w-[100vw] h-[99vh] bg-[#f5effc] flex md:flex-row flex-col justify-around  items-center bg-">
        <div className="md:mt-28 mt-14 ">
          <span
            className="flex gap-1 md:gap-4 text-xl ml-5 md:ml-0 sm:text-4xl my-4 text-gray-800 "
            id="leftanim"
          >
            Find the Next Crypto Gem on
            <Link to="/">
              <h1 className="text-yellow-500 cursor-pointer hover:underline hover:text-slate-700 text-lg md:text-2xl pl-2 sm:pl-0">
                Cryptoniom{" "}
              </h1>
            </Link>
          </span>
          <p className="text-gray-600 mt-5 ml-6 md:ml-1" id="leftanim1">
            1 out of every 4 Crypto Holders Worldwide Is with Cryptoniom
          </p>
          <button
            className="mt-10 bg-[#1e435d]  rounded-md py-2 px-5 text-white font-mono font-bold focus:ring-2 focus:ring-blue-700-600 hover:bg-[#27577a] ml-5 md:ml-1 "
            id="leftanim2"
          >
            Get Started
          </button>
        </div>
        <div
          className="flex  bg-[#1e435d] w-[30vh] md:w-[55vh] shadow-2xl rounded-full items-center justify-around mt-12 md:mt-40"
          id="rightanim"
        >
          <img
            src={herophoto}
            className=" flex md:w-[55%] md:h-[55%] w-[85%] h-[75%]  rounded-xl"
          />
        </div>
      </section>
      {/* table */}

      <div className=" border-2 w-[99vw] mt-10 border-gray-600 bg-[#fbfafb] md:w-[80vw] overflow-hidden h-fit outline-none rounded-md ">
        <span className="flex md:justify-evenly justify-between  border-b  border-gray-500 w-full h-fit  items-center pb-3">
          <p className="-ml-7 md:-ml-2">#</p>
          <p className="-ml-5">Name</p>
          <p>Price</p>
          <p>Change</p>
          <p className="hidden sm:flex">Chart</p>
        </span>

        <span className="flex md:justify-evenly justify-between  border-b  border-gray-500 w-full h-fit  items-center pb-3">
          <p className="-ml-7 md:ml-1">1</p>
          <p className=" flex w-fit justify-between items-center gap-1 text-xs md:text-base">
            {" "}
            <img
              src={bitcoin}
              alt="btc"
              className="w-7 h-7 md:w-10 md:h-10 rounded-md"
            />{" "}
            Bitcoin
          </p>
          <p className="text-xs md:text-base">₹ 1755761.42</p>
          <p className="text-green-700 -ml-4 text-xs md:text-base">+ 5.02%</p>
          <p>
            <img src={graphs} className="w-12 h-fit hidden sm:flex" />
          </p>
        </span>

        <span className="flex md:justify-evenly justify-between  border-b  border-gray-500 w-full h-fit  items-center pb-3">
          <p className="-ml-7 md:ml-1">2</p>
          <p className=" flex w-fit justify-between items-center gap-1 text-xs md:text-base">
            {" "}
            <img
              src={doge}
              alt="btc"
              className="w-7 h-7 md:w-10 md:h-10  rounded-md"
            />{" "}
            Dogecoin
          </p>
          <p className="text-xs md:text-base">₹ 10.72</p>
          <p className="text-red-700 -ml-4 text-xs md:text-base">- 9.42%</p>
          <p>
            <img src={graphs} className="hidden sm:flex w-12 h-fit" />
          </p>
        </span>

        <span className="flex md:justify-evenly justify-between  border-b  border-gray-500 w-full h-fit  items-center pb-3">
          <p className="-ml-7 md:ml-1">3</p>
          <p className=" flex w-fit justify-between items-center gap-1 text-xs md:text-base">
            {" "}
            <img
              src={eth}
              alt="btc"
              className="w-7 h-7 md:w-10 md:h-10 rounded-md"
            />{" "}
            Ethereum
          </p>
          <p className="text-xs md:text-base">₹ 135281</p>
          <p className="text-green-700 -ml-4 text-xs md:text-base">+ 1.02%</p>
          <p>
            <img src={graphs} className="w-12 h-fit hidden sm:flex" />
          </p>
        </span>

        <span className="flex md:justify-evenly justify-between  w-full h-fit  items-center pb-3">
          <p className="-ml-7 md:ml-1">4</p>
          <p className="mr-8 flex w-fit justify-between items-center gap-1 text-xs md:text-base">
            {" "}
            <img
              src={bnb}
              alt="btc"
              className="w-7 h-7 md:w-10 md:h-10 rounded-md"
            />{" "}
            Bnb
          </p>
          <p className="text-xs md:text-base">₹ 29466</p>
          <p className="text-red-700 -ml-4 text-xs md:text-base">- 3.12%</p>
          <p>
            <img src={graphs} className="hidden sm:flex w-12 h-fit" />
          </p>
        </span>
      </div>

      <section className="bg-[#183043d9] rounded-lg mt-20 w-[95vw] h-fit md:grid hidden md:grid-cols-3 md:gap-3">
        <div className="overflow-hidden flex flex-col md:flex-row w-[28vw] gap-1 my-3  border-2 border-transparent rounded-lg hover:border-yellow-500  hover:shadow-md ml-3 hover:shadow-yellow-200">
          <img src={exchangess} className=" w-24 h-24 md:h-32 md-:w-32" />
          <h5 className="flex flex-col text-white text-3xl">
            Exchange
            <p className="text-sm mt-4">
              Cryptoniom offers order books with top tier liquidity, allowing
              users to easily exchange Bitcoin, Ethereum, EOS, Litecoin, Ripple,
              NEO and many other digital assets with minimal slippage.
            </p>
          </h5>
        </div>

        <div className="overflow-hidden flex flex-col md:flex-row w-[28vw] gap-1 my-3  border-2 border-transparent rounded-lg hover:border-yellow-500  hover:shadow-md ml-3 hover:shadow-yellow-200">
          <img src={mfund} className=" w-24 h-24 md:h-32 md-:w-32" />
          <h5 className="flex flex-col text-white text-3xl">
            Margin funding
            <p className="text-sm mt-4">
              Liquidity providers can generate yield by providing funding to
              traders wanting to trade with leverage. Funding is traded on an
              order book at various rates and periods.
            </p>
          </h5>
        </div>

        <div className="overflow-hidden flex flex-col md:flex-row w-[28vw] gap-1 my-3  border-2 border-transparent rounded-lg hover:border-yellow-500  hover:shadow-md ml-3 hover:shadow-yellow-200">
          <img src={mtrad} className=" w-24 h-24 md:h-32 md-:w-32" />
          <h5 className="flex flex-col text-white text-3xl">
            Margin trading
            <p className="text-sm mt-4">
              Cryptoniom allows up to 10x leverage trading by providing traders
              with access to the peer-to-peer funding market
            </p>
          </h5>
        </div>

        <div className=" overflow-hidden flex flex-col md:flex-row w-[28vw] gap-1 my-3  border-2 border-transparent rounded-lg hover:border-yellow-500  hover:shadow-md ml-3 hover:shadow-yellow-200">
          <img src={iorder} className=" w-24 h-24 md:h-32 md-:w-32" />
          <h5 className="flex flex-col text-white text-3xl">
            Order types
            <p className="text-sm mt-4">
              Cryptoniom offers a suite of order types to give traders the tools
              they need for every scenario. Discover more about our most
              advanced Algorithmic orders types.
            </p>
          </h5>
        </div>

        <div className="overflow-hidden flex flex-col md:flex-row w-[28vw] gap-1 my-3  border-2 border-transparent rounded-lg hover:border-yellow-500  hover:shadow-md ml-3 hover:shadow-yellow-200">
          <img src={lap} className=" w-24 h-24 md:h-32 md-:w-32" />
          <h5 className="flex flex-col text-white text-3xl">
            Customizable interface
            <p className="text-sm mt-4">
              Organize your workspace according to your needs: compose your
              layout, choose between themes, and set up notifications.
            </p>
          </h5>
        </div>

        <div className="overflow-hidden flex flex-col md:flex-row w-[28vw] gap-1 my-3  border-2 border-transparent rounded-lg hover:border-yellow-500  hover:shadow-md ml-3 hover:shadow-yellow-200 ">
          <img src={lock} className=" w-24 h-24 md:h-32 md-:w-32" />
          <h5 className="flex flex-col text-white text-3xl">
            Security
            <p className="text-sm mt-4">
              Security of user information and funds is our first priority.
              Learn more about our security features and integrations.
            </p>
          </h5>
        </div>
      </section>
      <section id="bgNews" className="my-6 text-white">
        <div className="flex" id="move">
          <div>BTC €21,289.10 (+0.65%)</div>
          <div>OKB €21.60 (+4.71%)</div>
          <div>OKT €19.09 (+2.09%)</div>
          <div>LTC €69.31 (+2.54%)</div>
          <div>ETH €1,633.68 (-0.68%)</div>
          <div>OKB €21.60 (+4.71%)</div>
          <div>OKT €19.09 (+2.09%)</div>
          <div>LTC €69.31 (+2.54%)</div>
          <div>DOT €7.03 (-0.38%)</div>
          <div>DOGE €0.13 (-0.13%)</div>

          <div>OKB €21.60 (+4.71%)</div>
          <div>OKT €19.09 (+2.09%)</div>
          <div>LTC €69.31 (+2.54%)</div>
          <div>DOT €7.03 (-0.38%)</div>
          <div>DOGE €0.13 (-0.13%)</div>
        </div>
      </section>

      <section className="flex justify-around mt-16 items-center bg-[#252831] w-[95vw] rounded-2xl overflow-hidden mb-10">
        <div className="flex flex-col justify-center w-[70%] md:w-[30%] items-center ">
          <h2 className="text-white sm:text-3xl text-xl md:text-4xl ">
            Don’t Miss the Next Big Market Move!
          </h2>
          <p className="mt-3 text-[#d3dcea] italic">
            Sign up to our platform and get started.
          </p>
          <button className="md:mt-10 mt-6 mb-6 bg-[#2377b4]  rounded-md py-2 px-5 text-white font-mono font-bold focus:ring-2 focus:ring-blue-700-600 hover:bg-[#27577a]">
            Get Started
          </button>
        </div>
        <div className="w-[40%] h-[40%] flex ">
          <img src={app} />
        </div>
      </section>
      <section className="bg-transparent flex flex-col fixed right-0 top-72 rounded-lg">
        <span
          className="bg-[#fcf9f9] w-12 rounded-lg mb-2 mr-2 "
          id="headphone"
        >
          <img src={headphone} className="w-8 m-2 cursor-pointer " />
          <div
            className="fixed bg-white right-20 w-32 h-32 top-56 rounded-lg flex justify-center items-center"
            id="headchild"
          >
            <img src={qr} className="w-[80%] " />
          </div>
        </span>
        <span
          className="bg-[#faf5f5] w-12 mt-4 rounded-lg mr-2 "
          id="headphone"
        >
          <img src={medias} className="w-8 m-2 cursor-pointer" />
        </span>
      </section>
      <section></section>
    </div>
  );
};
// 252831

export default Home;
