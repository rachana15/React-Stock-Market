import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/css/Stats.css";
import StockRow from "./StockRow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { db } from "../firebase";

const TOKEN = "bv4884v48v6tcp17jm30";
const Base_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setStockData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened(!isOpened);
    document.getElementsByClassName("MuiSvgIcon-root").style =
      "transform: rotate(180deg);";
  }
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
      //   console.log("stock data >>>> ", tempStockData);
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
          <div className="stats__rows"></div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
          <ExpandMoreIcon
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

//https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1606608000&to=1606694400&token=bv2ov0748v6ubfuliing
//https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1605543327&to=1605629727&token=bv2aa0v48v6o5ed73a60
