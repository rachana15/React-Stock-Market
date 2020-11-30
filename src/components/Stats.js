import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/css/Stats.css";

const TOKEN = "bv2aa0v48v6o5ed73a60";
const Base_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setStockData] = useState([]);
  let getStockData = (stock) => {
    return axios
      .get(`${Base_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.log("Error", error);
      });
  };
  useEffect(() => {
    const stockList = [
      "AAPL",
      "TSLA",
      "NVDA",
      "AMD",
      "PLUG",
      "FCEL",
      "AMZN",
      "GOOGL",
      "BLDP",
      "SQ",
      "SHOP",
    ];
    let tempStockData = [];
    let promises = [];
    stockList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          //   console.log(res);
          tempStockData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setStockData(tempStockData);
      console.log("stock data >>>> ", tempStockData);
      console.log("stock data usestate >>>> ", stockData);
    });
  }, []);
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows"></div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows"></div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
