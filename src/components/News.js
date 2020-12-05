import React, { useEffect, useState } from "react";
import "../style/css/News.css";
import NewsRow from "./NewsRow";
import axios from "axios";

const TOKEN = "bv5i62748v6qnlldbtcg";
const Base_URL = "https://finnhub.io/api/v1/";
function News() {
  const [marketNews, setMarketNews] = useState([]);
  console.log("marketnews>>>>>", marketNews);
  useEffect(() => {
    const tempNews = [];
    const promises = [];
    promises.push(
      axios
        .get(`${Base_URL}news?category=general&token=${TOKEN}`)
        .then((res) => {
          console.log(res.data);
          for (var i = 0; i < 10; i++) {
            tempNews.push(res.data[i]);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    );
    Promise.all(promises).then(() => {
      setMarketNews(tempNews);
    });
  }, []);
  return (
    <div className="news">
      <div class="news__cointainer">
        {marketNews.map((news) => {
          return (
            <NewsRow
              url={news.url}
              source={news.source}
              time={news.datetime}
              headline={news.headline}
              summary={news.summary}
              image={news.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default News;
