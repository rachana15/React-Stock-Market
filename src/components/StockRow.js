import React, { useEffect, useState } from "react";
import "../style/css/StockRow.css";
import Chart from "./Chart";

function StockRow({ name, openPrice, price }) {
  let percentage = (price - openPrice) / openPrice;

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  //   console.log("StockData out ", stockData);

  useEffect(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    today.toDateString();
    yesterday.toDateString();
    setTo(parseInt((today.getTime() / 1000).toFixed(0)));
    setFrom(parseInt((yesterday.getTime() / 1000).toFixed(0)));
  }, [name]);
  return (
    <div className="stockrow">
      <div className="stockrow__name">
        <h4>{name}</h4>
      </div>
      <div className="stock__chart">
        {percentage > 0 ? (
          <Chart
            className="chart"
            from={from}
            to={to}
            name={name}
            backgroundColor="transparent"
          />
        ) : (
          <Chart
            className="chart"
            from={from}
            to={to}
            borderColor="red"
            name={name}
            backgroundColor="transparent"
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
