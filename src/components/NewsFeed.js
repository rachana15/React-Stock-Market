import React, { useEffect, useState } from "react";
import "../style/css/NewsFeed.css";
import Chart from "./Chart";

function NewsFeed() {
  const [dayStats, setDayStats] = useState(true);
  const [monthStats, setMonthStats] = useState(false);
  const [yearStats, setYearStats] = useState(false);
  const [todayDate, setTodayDate] = useState("");
  const [yesterdayDate, setYesterdayDate] = useState("");
  const [monthDate, setMonthDate] = useState("");
  const [year, setYear] = useState("");
  console.log(yesterdayDate);
  console.log(monthDate);
  console.log(year);
  const clickDay = () => {
    setDayStats(true);
    setMonthStats(false);
    setYearStats(false);
  };
  const clickMonth = () => {
    setDayStats(false);
    setMonthStats(true);
    setYearStats(false);
  };
  const clickYear = () => {
    setDayStats(false);
    setMonthStats(false);
    setYearStats(true);
  };
  useEffect(() => {
    const today = new Date();
    const yesterday = new Date(today);
    const month = new Date(today);
    const year = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    month.setDate(month.getDate() - 30);
    year.setDate(year.getDate() - 364);
    today.toDateString();
    yesterday.toDateString();
    month.toDateString();
    year.toDateString();
    setTodayDate(parseInt((today.getTime() / 1000).toFixed(0)));
    setYesterdayDate(parseInt((yesterday.getTime() / 1000).toFixed(0)));
    setMonthDate(parseInt((month.getTime() / 1000).toFixed(0)));
    setYear(parseInt((year.getTime() / 1000).toFixed(0)));
    console.log("newsFEED");
  }, []);
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartsection">
          <div className="newsfeed__info">
            <h1>US$1,080.46</h1>
            <p>
              +US$16.43(+1.53%)<span>Today</span>
            </p>
            <p>
              -US$1.43(-0.17%)<span>After Hours</span>
            </p>
          </div>
          <div className="newsfeed__chart">
            {dayStats && <Chart to={todayDate} from={yesterdayDate} />}
            {monthStats && <Chart to={todayDate} from={monthDate} />}
            {yearStats && <Chart to={todayDate} from={year} />}
          </div>
          <div class="newsfeed__stats">
            <button onClick={clickDay}> 1D </button>
            <button onClick={clickMonth}> 1M </button>
            <button onClick={clickYear}> 1Y </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
