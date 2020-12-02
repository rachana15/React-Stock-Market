import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "../style/css/StockRow.css";

function StockRow({ name, openPrice, price }) {
  let percentage = (price - openPrice) / openPrice;
  const [stockData, setStockData] = useState([]);
  //   console.log("StockData out ", stockData);

  const options = {
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          type: "time",
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };
  let getStockData = (stock, to, from) => {
    return axios
      .get(
        `https://finnhub.io/api/v1/stock/candle?symbol=${stock}&resolution=1&from=${from}&to=${to}&token=bv2vsnn48v6qoktim3mg`
      )
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    let tempStockData = [];
    let promises = [];
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    today.toDateString();
    yesterday.toDateString();
    const today_unix = parseInt((today.getTime() / 1000).toFixed(0));
    const yesterday_unix = parseInt((yesterday.getTime() / 1000).toFixed(0));
    promises.push(
      getStockData(name, today_unix, yesterday_unix).then((res) => {
        for (var i = 0; i < res.data.c.length; i++) {
          var date = new Date(res.data.t[i] * 1000);
          tempStockData.push({
            x: date,
            y: res.data.c[i],
          });
        }
      })
    );

    Promise.all(promises).then(() => {
      setStockData(tempStockData);
    });
  }, [name]);
  return (
    <div className="stockrow">
      <div className="stockrow__name">
        <h4>{name}</h4>
      </div>
      <div className="stock__chart">
        {percentage > 0 ? (
          <Line
            data={{
              datasets: [
                {
                  type: "line",
                  data: stockData,
                  borderColor: "#5AC53B",
                  borderWidth: 1,
                  pointBorderColor: "rgba(0,0,0,0)",
                  pointBackgroundColor: "rgba(0,0,0,0)",
                  pointHoverBorderColor: "#5AC53B",
                  pointHoverBorderWidth: 2,
                  pointHoverRadius: 2,
                },
              ],
            }}
            options={options}
          />
        ) : (
          <Line
            data={{
              datasets: [
                {
                  type: "line",
                  data: stockData,
                  borderColor: "red",
                  borderWidth: 1,
                  pointBorderColor: "rgba(0,0,0,0)",
                  pointBackgroundColor: "rgba(0,0,0,0)",
                  pointHoverBorderColor: "#5AC53B",
                  pointHoverBorderWidth: 2,
                  pointHoverRadius: 2,
                },
              ],
            }}
            options={options}
          />
        )}
      </div>
      <div className="stockrow__price">
        <h4>${price.toFixed(2)}</h4>
        {percentage > 0 ? (
          <h5 className="positve__percentage">+ {percentage.toFixed(2)}% </h5>
        ) : (
          <h5 className="negative__percentage">{percentage.toFixed(2)}%</h5>
        )}
      </div>
    </div>
  );
}

export default StockRow;
