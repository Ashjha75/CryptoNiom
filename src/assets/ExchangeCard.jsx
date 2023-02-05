import React from "react";
import Exchanges from "../components/Exchanges";

const ExchangeCard = ({ name, img, rank, url }) => {
  <a href={url} target={"blank"}>
    <p>hello</p>
    <div>
      <img src={img} alt="hell" />
      <p>{name}</p>
    </div>
  </a>;
};
export default ExchangeCard;
