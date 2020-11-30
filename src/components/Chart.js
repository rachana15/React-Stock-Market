import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../style/css/Chart.css";

function Chart() {
  const [graphData, setGraphData] = useState([]);
  const data = [
    {
      x: 10,
      y: 20,
    },
    {
      x: 15,
      y: 10,
    },
    {
      x: 15,
      y: 10,
    },
    {
      x: 15,
      y: 10,
    },
  ];
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
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };
  const createTestData = () => {
    let data = [];
    let value = 50;
    for (var i = 0; i < 366; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: date, y: value });
    }
    setGraphData(data);
  };
  useEffect(() => {
    createTestData();
  }, []);
  return (
    <div className="chart">
      <Line
        data={{
          datasets: [
            {
              type: "line",
              data: graphData,
              backgroundColor: "black",
              borderColor: "#5AC53B",
              borderWidth: 2,
              pointBorderColor: "rgba(0,0,0,0)",
              pointBackgroundColor: "rgba(0,0,0,0)",
              pointHoverBorderColor: "#5AC53B",
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default Chart;
