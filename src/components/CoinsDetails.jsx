import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "../components/Loader.jsx";
import ErrorComponent from "../components/ErrorComponent.jsx";
import { useParams } from "react-router-dom";
import CarrotDown from "../assets/carrotDown.png";
import CarrotUp from "../assets/carrotup.png";
import Chart from "../components/Chart.jsx";

const CoinsDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencysymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChatStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        break;
      case "7d":
        setDays("7d");
        break;
      case "14d":
        setDays("14d");
        break;
      case "30d":
        setDays("30d");
        break;
      case "60d":
        setDays("60d");
        break;
      case "200d":
        setDays("200d");
        break;
      case "365d":
        setDays("365d");
        break;
      case "max":
        setDays("max");
        break;

      default:
        setDays("24h");
        break;
    }
  };

  const params = useParams();
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [params.id]);

  if (err) return <ErrorComponent messages={"Error while fetching coins"} />;
  const handlechange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div className=" bg-slate-100 flex flex-col items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-slate-100  w-[90vw] h-[100%]">
            <div className="pt-12 pb-0 sm:pb-20 ">
              <Chart arr={chartArray} currency={currency} days={days} />
            </div>

            <div className="bg-gray-300 w-fit rounded-md mb-4">
              {btns.map((i) => (
                <button
                  className="bg-blue-600 m-3 w-14 rounded-md text-white font-medium p-2 hover:bg-blue-800 "
                  key={i}
                  onClick={() => switchChatStats(i)}
                >
                  {i}
                </button>
              ))}
            </div>

            <div className=" -pl-10 sm:pl-4 flex flex-row  md:pl-5 pt-10 sm:pt-1 ">
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
            <div>
              <p>
                Last updated on{" - "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </p>
              <img src={coin.image.large} alt="btc" className="w-20" />
              <div>
                <div>{coin.name}</div>
                <div>
                  {currencysymbol} {coin.market_data.current_price[currency]}
                </div>
                <div className="flex">
                  {/* {coin.market_data.price_change_24h > 0 ? (
                    <Icon as={FaCaretDown} />
                  ) : null} */}
                  <img
                    src={
                      coin.market_data.price_change_24h < 0
                        ? CarrotDown
                        : CarrotUp
                    }
                    className="w-3 my-2 mx-2 animate-bounce "
                  />
                  {coin.market_data.price_change_24h}%
                </div>
                <div className="flex w-fit p-2 rounded-md mx-5 bg-slate-500 mt-2 mb-5">{`#${coin.market_cap_rank}`}</div>
                <div className="flex flex-col">
                  <progress
                    id="file"
                    value={62}
                    max="100"
                    low="0"
                    className="w-[74vw] h-[0.65rem]  mx-2 my-2"
                  ></progress>
                  <span className="flex justify-between w-[74vw] h-4 mx-2 my-2">
                    <h5 className="bg-red-500 h-fit rounded">{`${currencysymbol} ${coin.market_data.low_24h[currency]}`}</h5>
                    <div>{`${" "} 24h Data ${" "}`}</div>
                    <h5 className="bg-green-500 h-fit rounded">{`${currencysymbol}  ${coin.market_data.high_24h[currency]}`}</h5>
                  </span>
                </div>

                <div className="border-2 bg-slate-50 font-medium flex flex-col justify-between border-slate-700 w-[75vw] h-[30vh] rounded-md my-10">
                  <section className="flex justify-between mx-5 mt-3">
                    <label htmlFor="Csupply " className="text-slate-800 mr-3">
                      Circulating Supply
                    </label>
                    <span id="Csupply">{`${coin.market_data.circulating_supply}`}</span>
                  </section>

                  <section className="flex justify-between mx-5">
                    <label htmlFor="Mcap" className="text-slate-800 mr-3">
                      Market Cap
                    </label>
                    <span id="Mcap">{`${currencysymbol}${coin.market_data.market_cap[currency]}`}</span>
                  </section>
                  <section className="flex justify-between mx-5">
                    <label htmlFor="ATL" className="text-slate-800 mr-3">
                      All Time Low
                    </label>
                    <span id="ATL">{`${currencysymbol}${coin.market_data.atl[currency]}`}</span>
                  </section>
                  <section className="flex justify-between mx-5 mb-3">
                    <label htmlFor="ATH" className="text-slate-800 mr-3">
                      All Time High
                    </label>
                    <span id="ATH">{`${currencysymbol}${coin.market_data.ath[currency]}`}</span>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinsDetails;
