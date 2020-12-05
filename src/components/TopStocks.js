import React from "react";
import "../style/css/TopStocks.css";

function TopStocks({ symbol, price, change }) {
  return (
    <div className="topstocks">
      <div className="topstocks__container">
        <div className="topstocks__header">
          <span>{symbol}</span>
        </div>
        <div className="topstocks__stats">
          <span className="price">{price}</span>
          <span className="change">{change}</span>
        </div>
      </div>
    </div>
  );
}

export default TopStocks;
