import "../css/main.css";
import "../css/weatherImages.css";
import "../css/weatherAnimation.css";
import "../css/lineChart.css";
import "../css/error.css";
import { callApi } from "./api";
import { getLocalDate, setTimeZone } from "./dateTime";
import { displayWeatherData, displayWeatherExtraData } from "./weatherData";
import {
  drawChartCanvas,
  drawLineChart,
  displayMinMaxTemperature,
} from "./lineChart";
import { displayFutureWeatherData } from "./futureWeather";
import { getInvalidRequest, deleteErrorMessage } from "./error";

// default data when pageloaded
const defaultApiData = await callApi("oslo");
displayAllData(defaultApiData);
console.log(defaultApiData);

//search result for location
const inputText = document.querySelector(".searchText");
inputText.addEventListener("keydown", (event) => {
  deleteErrorMessage();
  if (event.key == "Enter") {
    const keyword = event.target.value;
    callApi(keyword).then((data) => {
      if (data.error) {
        getInvalidRequest(data.error);
      } else {
        displayAllData(data);
      }
    });
  }
});

function displayAllData(data) {
  //date & time
  const date = data.location.localtime;
  getLocalDate(date);
  const localTimeZone = data.location.tz_id;
  setTimeZone(localTimeZone);

  // weather data
  displayWeatherData(data);
  displayWeatherExtraData(data);
  displayFutureWeatherData(data);

  // line chart
  const temperatures = getTemperaturePerHour(data);
  const minMaxIndexes = drawLineChart(temperatures);
  drawChartCanvas();
  displayMinMaxTemperature(minMaxIndexes);
}

function getTemperaturePerHour(data) {
  let forecastTemperatures = [];
  for (let i = 0; i < 24; i++) {
    const temperature = data.forecast.forecastday[0].hour[i].temp_c;
    forecastTemperatures.push(temperature);
  }
  return forecastTemperatures;
}

const menuIcon = document.querySelector(".menuIcon");
menuIcon.addEventListener("click", (event) => {
  const searchContainer = document.querySelector(".searchContainer");
  if (searchContainer.style.display === "none") {
    searchContainer.style.display = "block";
  } else {
    searchContainer.style.display = "none";
  }
});
