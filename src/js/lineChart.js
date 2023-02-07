let lineChart = document.querySelector(".lineChart").getContext("2d");
lineChart.canvas.width = "700";
lineChart.canvas.height = "150";

let chartWidth = lineChart.canvas.width;
let chartHeight = lineChart.canvas.height;

// line chart
// lineChart.beginPath();
// lineChart.moveTo(0, 0);
// lineChart.lineWidth = 2;
// lineChart.lineTo(0, chartHeight);
// lineChart.lineTo(chartWidth, chartHeight);
// lineChart.stroke();

// hour x= 24, temperature y= 12
let x = 24;
let xWidth = chartWidth / x;

let y = 12;
let yHeight = chartHeight / y;
// console.log(xWidth, yHeight);

//horizontal lines in the chart
function drawHorizontalLines() {
  for (let i = 0; i < y; i++) {
    lineChart.beginPath();
    // console.log(yHeight * i);
    lineChart.moveTo(0, yHeight * i);
    lineChart.lineTo(chartWidth, yHeight * i);
    lineChart.lineWidth = 0.2;
    lineChart.stroke();
  }
}
//vertical lines in the chart
function drawVerticalLines() {
  for (let i = 0; i < x; i++) {
    lineChart.beginPath();
    // console.log(yHeight * i);
    lineChart.moveTo(xWidth * i, 0);
    lineChart.lineTo(xWidth * i, chartHeight);
    lineChart.lineWidth = 0.2;
    lineChart.stroke();
  }
}

function addTimeLine() {
  const timeline = document.querySelector(".timeline");
  while (timeline.firstChild) {
    timeline.removeChild;
  }
  let hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }
  console.log(hours);
  for (let i = 0; i < hours.length; i++) {
    const hour = document.createElement("span");
    const hourText = document.createTextNode(hours[i]);
    hour.appendChild(hourText);
    timeline.appendChild(hour);
    // document.getElementById("weeks").appendChild(week);
  }
}

export function drawLineChart(temperatures) {
  lineChart.clearRect(0, 0, chartWidth, chartHeight);
  drawHorizontalLines();
  drawVerticalLines();
  addTimeLine();
  //temperature points
  //   const average = Math.floor(
  //     temperatures.reduce((a, b) => a + b, 0) / temperatures.length
  //   );
  const max = Math.max(...temperatures);
  const min = Math.min(...temperatures);
  const variableInterval = (max - min) / 12;
  // console.log(max, min, variableInterval, average);
  for (let i = 0; i < x; i++) {
    const currentFixedInterval = Math.round(
      (temperatures[i] - min) / variableInterval
    );
    const nextFixedInterval = Math.round(
      (temperatures[i + 1] - min) / variableInterval
    );
    // temperatures[i]'s y value = currentFixedInterval * yHeight
    // console.log(
    //   temperatures[i],
    //   currentFixedInterval * yHeight,
    //   temperatures[i + 1],
    //   nextFixedInterval * yHeight
    // );
    lineChart.beginPath();
    lineChart.moveTo(xWidth * i, chartHeight - currentFixedInterval * yHeight);
    lineChart.lineTo(
      xWidth * (i + 1),
      chartHeight - nextFixedInterval * yHeight
    );
    // if (i == x - 1) {
    //   lineChart.moveTo(
    //     xWidth * i,
    //     chartHeight - currentFixedInterval * yHeight
    //   );
    //   lineChart.lineTo(chartWidth, chartHeight);
    // }
    lineChart.lineWidth = 3;
    lineChart.strokeStyle = "#fff";
    lineChart.stroke();
    // console.log(temperatures);
  }
  let maxIndex = temperatures.findIndex((temp) => temp === max);
  let minIndex = temperatures.findIndex((temp) => temp === min);
  const MaxPosY =
    chartHeight -
    Math.round((temperatures[maxIndex] - min) / variableInterval) * yHeight;
  const MaxPosX = xWidth * maxIndex;
  const MinPosY =
    chartHeight -
    Math.round((temperatures[minIndex] - min) / variableInterval) * yHeight;
  const MinPosX = xWidth * minIndex;
  addMaxTemperature(MaxPosX, MaxPosY);
  addMinTemperature(MinPosX, MinPosY);

  // return { maxIndex, minIndex };
}

function addMaxTemperature(posX, posY) {
  //   console.log(posX, posY);
  //   const maxTemperature = document.querySelector(".maxTemperature");
  //   const minTemperature = document.querySelector(".minTemperature");
  //   const maxPoint = document.createElement("span");
  //   const minPoint = document.createElement("span");
  lineChart.beginPath();
  lineChart.arc(posX, posY, 4, 0, 2 * Math.PI);
  lineChart.stroke();
}
function addMinTemperature(posX, posY) {
  //   console.log(posX, posY);
  //   const maxTemperature = document.querySelector(".maxTemperature");
  //   const minTemperature = document.querySelector(".minTemperature");
  //   const maxPoint = document.createElement("span");
  //   const minPoint = document.createElement("span");
  lineChart.beginPath();
  lineChart.arc(posX, posY, 4, 0, 2 * Math.PI);
  lineChart.stroke();
}
