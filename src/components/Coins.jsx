import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "../components/Loader.jsx";
import ErrorComponent from "../components/ErrorComponent.jsx";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const btns = new Array(132).fill(1);
  const changepage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const currencysymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);
  if (err) return <ErrorComponent messages={"Error while fetching coins"} />;
  const handlechange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="bg-slate-100">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" -pl-10 sm:pt-20 sm:pl-4 flex flex-row  md:pl-5 pt-10  ">
            <div
              value={currency}
              className="flex items-center mb-4 mx-2 sm:mx-4 "
              onChange={handlechange}
            >
              <input
                id={currency}
                type="radio"
                value={"inr"}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100  dark:ring-offset-gray-800 "
              />
              <label
                htmlFor={currency}
                className="ml-0 sm:ml-2  text-sm sm:text-md font-medium text-gray-900"
              >
                INR
              </label>
            </div>
            <div
              value={currency}
              className="flex items-center mb-4 mx-2 sm:mx-4"
              onChange={handlechange}
            >
              <input
                id={currency}
                type="radio"
                value={"usd"}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100  dark:ring-offset-gray-800 "
              />
              <label
                htmlFor={currency}
                className="ml-0 sm:ml-2  text-sm sm:text-md font-medium text-gray-900"
              >
                USD
              </label>
            </div>
            <div
              value={currency}
              className="flex items-center wb-4 mb-4 mx-2 sm:mx-4"
              onChange={handlechange}
            >
              <input
                id={currency}
                type="radio"
                value={"eur"}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100  dark:ring-offset-gray-800 "
              />
              <label
                htmlFor={currency}
                className="ml-0 sm:ml-2 text-sm sm:text-md font-medium text-gray-900"
              >
                EUR
              </label>
            </div>
          </div>

          <div className=" flex bg-slate-100 items-start justify-center space-x-4 flex-wrap ">
            {coins.map((i) => (
              <div className="transform transition duration-500 hover:scale-110">
                <div className="m-5 border-2 border-gray-400 bg-white shadow-lg w-52 h-52 text-center flex flex-col justify-center items-center rounded-xl hover:shadow-2xl hover:transition delay-150  ease-in-out">
                  <CoinCard
                    id={i.id}
                    key={i.id}
                    name={i.name}
                    price={i.current_price}
                    image={i.image}
                    symbol={i.symbol}
                    currencysymbol={currencysymbol}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-start mx-28 my-5 overflow-x-hidden">
            {btns.map((item, index) => (
              <button
                key={index}
                onClick={() => changepage(index + 1)}
                className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
