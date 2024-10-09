import React from "react";
import Chart from "react-apexcharts";

export default function AphexChart() {
  const data = [
    {
      name: "Natural",
      quantity: 5,
    },
    {
      name: "Industrial",
      quantity: 26,
    },
    {
      name: "Infrastructure",
      quantity: 2,
    },
    {
      name: "Pollution",
      quantity: 9,
    },
  ];

  let names = [];
  let quantities = [];
  data.forEach(function (n) {
    names.push(n.name);
    quantities.push(n.quantity);
  });

  return React.createElement(Chart, {
    type: "donut    ",
    series: quantities,
    labels: {
      show: false,
      name: {
        show: true,
      },
    },
    options: {
      labels: names,
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
      colors: ["#00AB55", "#2D99FF", "#FFE700", "#826AF9"],
    },
  });
}
