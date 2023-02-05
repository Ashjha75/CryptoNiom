import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "../components/Loader.jsx";
import ErrorComponent from "../components/ErrorComponent.jsx";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);
  if (err) return <ErrorComponent messages={"Error while fetching data"} />;

  return (
    <div className=" flex  ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="sm:pt-20 flex bg-slate-100 items-start justify-center space-x-4 flex-wrap ">
            {exchanges.map((i) => (
              <div className="transform transition duration-500 hover:scale-110">
                {/* <ExchangeCard
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                /> */}
                <div className="m-5 border-2 border-gray-400 bg-white shadow-lg w-52 h-52 text-center flex flex-col justify-center items-center rounded-xl hover:shadow-2xl hover:transition delay-150  ease-in-out">
                  <a href={i.url} target={"blank"}>
                    <img
                      src={i.image}
                      alt="hell"
                      className="justify-center my-4 mx-3 rounded-md"
                    />
                    <h1>{i.trust_score_rank}</h1>
                    <p className="bold font-medium text-gray-900">{i.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
// const ExcahangeCard = ({ name, img, rank, url }) => {
//   <a href={url} target={"blank"}>
//     <p>hello</p>
//     <div>
//       <img src={img} alt="hell" />
//       <p>{name}</p>
//     </div>
//   </a>;
// };

export default Exchanges;
