import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/css/Stats.css";
import StockRow from "./StockRow";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const TOKEN = "bv5to5f48v6r8nt3rrd0";
const Base_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setStockData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened(!isOpened);
    // document.getElementsByClassName("MuiSvgIcon-root").style =
    //   "transform: rotate(180deg);";
  }
  let getStockData = async (stock) => {
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
      "NIO",
      "WORK",
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
      // console.log("stock data >>>> ", tempStockData);
      setStockData(tempStockData);
    });
    // console.log("stock data usestate >>>> ", stockData);
  }, []);
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => {
              if (stock.name == "TSLA" || stock.name == "NVDA") {
                return (
                  <StockRow
                    key={stock.name}
                    name={stock.name}
                    openPrice={stock.o}
                    price={stock.c}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
          <ExpandLessIcon
            onClick={toggle}
            className={isOpened ? " " : "icon_transform"}
          />
        </div>
        {isOpened && (
          <div className="stats__content">
            <div className="stats__rows">
              {stockData.map((stock) => (
                <StockRow
                  key={stock.name}
                  name={stock.name}
                  openPrice={stock.o}
                  price={stock.c}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stats;
