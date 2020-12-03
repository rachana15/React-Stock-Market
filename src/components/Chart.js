import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../style/css/Chart.css";
import axios from "axios";

function Chart({
  to = "1606976930",
  from = "1606867200",
  name = "AAPL",
  borderColor = "#5AC53B",
  backgroundColor = "black",
}) {
  const [graphData, setGraphData] = useState([]);

  const options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: true,
      callbacks: {
        label: function (tooltipItem, data) {
          return tooltipItem.value;
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  let getStockData = (stock, to, from) => {
    // console.log("stock>>>>>>>>", stock);
    // console.log("to>>>>>>>>", to);
    // console.log("from>>>>>>>>>", from);
    return axios
      .get(
        `https://finnhub.io/api/v1/stock/candle?symbol=${stock}&resolution=1&from=${from}&to=${to}&token=bv4884v48v6tcp17jm30`
      )
      .catch((error) => {
        console.log("error", error);
      });
  };
  // const createTestData = () => {
  //   let data = [];
  //   let value = 50;
  //   for (var i = 0; i < 366; i++) {
  //     let date = new Date();
  //     date.setHours(0, 0, 0, 0);
  //     date.setDate(i);
  //     value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
  //     data.push({ x: date, y: value });
  //   }
  //   // console.log("data", data);
  //   setGraphData(data);
  // };

  useEffect(() => {
    // createTestData();
    let tempStockData = [];
    let promises = [];
    promises.push(
      getStockData(name, to, from).then((res) => {
        console.log(res);
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
      setGraphData(tempStockData);
    });
  }, []);
  return (
    <div className="chart">
      <Line
        data={{
          datasets: [
            {
              type: "line",
              data: graphData,
              backgroundColor: `${backgroundColor}`,
              borderColor: `${borderColor}`,
              borderWidth: 1,
              pointBorderColor: "rgba(0,0,0,0)",
              pointBackgroundColor: "rgba(0,0,0,0)",
              pointHoverBorderColor: "#5AC53B",
              pointHoverBorderWidth: 1,
              pointHoverRadius: 1,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default Chart;
