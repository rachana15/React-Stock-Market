import React from "react";
import "../style/css/NewsFeed.css";
import Chart from "./Chart";

function NewsFeed() {
  return (
    <div className="newsfeed">
      <div class="newsfeed__container">
        <div class="newsfeed__chartsection">
          <div class="newsfeed__info">
            <h1>US$1,080.46</h1>
            <p>
              +US$16.43(+1.53%)<span>Today</span>
            </p>
            <p>
              -US$1.43(-0.17%)<span>After Hours</span>
            </p>
          </div>
          <div class="newsfeed__chart">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
