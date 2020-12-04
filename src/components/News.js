import React from "react";
import "../style/css/News.css";
import NewsRow from "./NewsRow";

function News() {
  return (
    <div className="news">
      <div class="news__cointainer">
        <NewsRow />
        <NewsRow />
        <NewsRow />
      </div>
    </div>
  );
}

export default News;
