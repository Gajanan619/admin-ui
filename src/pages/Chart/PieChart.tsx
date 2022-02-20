import { ApexOptions } from "apexcharts";
import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const series = [20, 15, 25, 40];
  const options: ApexOptions = {
    chart: {
      type: "pie",
      height: 380,
    },
    labels: ["Team A", "Team B", "Team C", "Team D"],
    legend: {
      show: true,
      position: "bottom",
    },
    theme: {
      mode: "light",
      palette: "palette6",
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
};

export default PieChart;
