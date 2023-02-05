import React from "react";
import { Link } from "react-router-dom";
const CoinCard = ({ id, name, image, price, symbol, currencysymbol }) => {
  return (
    <>
      <Link to={`/coins/${id}`}>
        <img
          src={image}
          alt="hell"
          className="justify-center my-4 mx-3 rounded-md w-14"
        />
        <h1>{symbol}</h1>
        <h1 className="bold text-xl text-gray-900">{name}</h1>
        <h1>{price ? `${currencysymbol}${price}` : "NA"}</h1>
      </Link>
    </>
  );
};

export default CoinCard;
