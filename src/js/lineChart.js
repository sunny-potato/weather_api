let lineChart = document.querySelector(".lineChart").getContext("2d");

// chart size
lineChart.canvas.width = 700;
lineChart.canvas.height = 150;
let chartWidth = lineChart.canvas.width;
let chartHeight = lineChart.canvas.height;

// line chart
let x = 25; // hours
let xWidth = chartWidth / x;
let y = 14; // temperatures
let yHeight = chartHeight / y;
export function drawChartCanvas() {
  drawHorizontalLines();
  drawVerticalLines();
  addTimeLine();
}

//horizontal lines in the chart
function drawHorizontalLines() {
  for (let i = 0; i <= y; i++) {
    lineChart.beginPath();
    if (i == y) {
      lineChart.moveTo(0, yHeight * i);
      lineChart.lineTo(chartWidth, chartHeight);
    } else {
      lineChart.moveTo(0, yHeight * i);
      lineChart.lineTo(chartWidth, yHeight * i);
    }

    lineChart.lineWidth = 0.2;
    lineChart.strokeStyle = "#000";
    lineChart.stroke();
  }
}
//vertical lines in the chart
function drawVerticalLines() {
  for (let i = 0; i <= x; i++) {
    lineChart.beginPath();

    if (i == x) {
      lineChart.moveTo(xWidth * i, 0);
      lineChart.lineTo(chartWidth, chartHeight);
    } else {
      lineChart.moveTo(xWidth * i, 0);
      lineChart.lineTo(xWidth * i, chartHeight);
    }

    lineChart.lineWidth = 0.2;
    lineChart.strokeStyle = "#000";
    lineChart.stroke();
  }
}

function addTimeLine() {
  const timeline = document.querySelector(".timeline");
  while (timeline.firstChild) {
    timeline.removeChild(timeline.firstChild);
  }
  let hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }
  for (let i = 0; i < hours.length; i++) {
    const hour = document.createElement("span");
    // hour.className = "timeHour";
    // hour.style.width = `${xWidth}px`;
    const hourText = document.createTextNode(hours[i]);
    hour.appendChild(hourText);
    timeline.appendChild(hour);
  }
}

export function drawLineChart(temperatures) {
  // console.log(temperatures);
  lineChart.clearRect(0, 0, chartWidth, chartHeight);
  const max = Math.max(...temperatures);
  const min = Math.min(...temperatures);
  const variableInterval = (max - min) / 12;
  for (let i = 0; i < temperatures.length; i++) {
    const currentFixedInterval = Math.round(
      (temperatures[i] - min) / variableInterval
    );
    const nextFixedInterval = Math.round(
      (temperatures[i + 1] - min) / variableInterval
    );
    // temperatures[i]'s Y-value = currentFixedInterval * yHeight
    lineChart.beginPath();
    lineChart.moveTo(
      xWidth * (i + 1),
      chartHeight - currentFixedInterval * yHeight - yHeight
    );
    lineChart.lineTo(
      xWidth * (i + 2),
      chartHeight - nextFixedInterval * yHeight - yHeight
    );

    // console.log(
    //   i,
    //   xWidth * (i + 1),
    //   chartHeight - currentFixedInterval * yHeight - yHeight,
    //   xWidth * (i + 2),
    //   chartHeight - nextFixedInterval * yHeight - yHeight
    // );
    lineChart.lineWidth = 3;
    lineChart.strokeStyle = "#fff";
    lineChart.stroke();
  }
  let maxIndex = temperatures.findIndex((temp) => temp === max);
  let minIndex = temperatures.findIndex((temp) => temp === min);
  const MaxPosY =
    chartHeight -
    Math.round((temperatures[maxIndex] - min) / variableInterval) * yHeight -
    yHeight;
  const MaxPosX = xWidth * maxIndex + xWidth;
  const MinPosY =
    chartHeight -
    Math.round((temperatures[minIndex] - min) / variableInterval) * yHeight -
    yHeight;
  const MinPosX = xWidth * minIndex + xWidth;
  drawMinMaxTemperature(MaxPosX, MaxPosY);
  drawMinMaxTemperature(MinPosX, MinPosY);

  // console.log(max, maxIndex, min, minIndex, xWidth);
  return { temperatures, maxIndex, minIndex };
}

function drawMinMaxTemperature(posX, posY) {
  lineChart.beginPath();
  lineChart.arc(posX, posY, 4, 0, 2 * Math.PI);
  lineChart.fillStyle = "#fff";
  lineChart.fill();
  lineChart.stroke();
}

export function displayMinMaxTemperature(minMaxIndexes) {
  // console.log(minMaxIndexes.minIndex);
  const minIndex = minMaxIndexes.minIndex + 1;
  // const minTemperature = document.querySelector(
  //   `.timeline > span:nth-child(${minIndex}) `
  // );
  // minTemperature.style.setProperty("--minTemperatureAfterContent", "");
  // minTemperature.style.setProperty("--minTemperatureAfterBackColor", "red");
  // const test = window.getComputedStyle(minTemperature, ":before").
  // CSSStyleSheet.insertRule()
}
