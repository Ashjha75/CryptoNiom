import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];
  const data = {};

  for (let index = 0; index < arr.length; index++) {
    if (days === "24h") date.push(new Date(arr[index][0]).toLocaleTimeString());
    else date.push(new Date(arr[index][0]).toLocaleDateString());
    prices.push(arr[index][1]);
  }

  return (
    <>
      <Line
        options={{ responsive: true }}
        data={{
          labels: date,
          datasets: [
            {
              label: `Price in ${currency}`,
              data: prices,
              borderColor: "rgb(255,10,255)",
              backgroundColor: "rgb(255,10,255,0.4)",
            },
          ],
        }}
      />
    </>
  );
};

export default Chart;
