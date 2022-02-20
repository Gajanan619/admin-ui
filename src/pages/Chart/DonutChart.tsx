import { ApexOptions } from "apexcharts";
import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const series = [50, 300, 200];
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Terminated", "Newly Added", "Rehire"],
    legend: {
      show: true,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
            },
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="donut" height="282" />
    </div>
  );
};

export default DonutChart;
