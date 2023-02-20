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

loadDefaultData();
setupSearchField();
setupMenu();

async function loadDefaultData() {
  const defaultApiData = await callApi("oslo");
  displayDateAndTimeData(defaultApiData);
  displayAllWeatherData(defaultApiData);
  displayLineChardData(defaultApiData);
  // console.log(defaultApiData);
}

function setupSearchField() {
  const inputText = document.querySelector(".searchText");
  inputText.addEventListener("keydown", async (event) => {
    deleteErrorMessage();
    if (event.key === "Enter") {
      const keyword = event.target.value;
      const data = await callApi(keyword);
      if (data.error) {
        getInvalidRequest(data.error);
      } else {
        displayAllWeatherData(data);
      }
    }
  });
}

function displayDateAndTimeData(data) {
  const date = data.location.localtime;
  getLocalDate(date);
  const localTimeZone = data.location.tz_id;
  setTimeZone(localTimeZone);
}

function displayAllWeatherData(data) {
  displayWeatherData(data);
  displayWeatherExtraData(data);
  // console.log(data);
  displayFutureWeatherData(data);
}

function displayLineChardData(data) {
  const temperatures = getTemperaturePerHour(data);
  const minMaxIndexes = drawLineChart(temperatures);
  drawChartCanvas();
  displayMinMaxTemperature(minMaxIndexes);
}

function getTemperaturePerHour(data) {
  const hours = data.forecast.forecastday[0].hour;
  return hours.map((hour) => hour.temp_c);
}

function setupMenu() {
  const menuIcon = document.querySelector(".menuIcon");
  menuIcon.addEventListener("click", () => {
    const searchContainer = document.querySelector(".searchContainer");
    if (searchContainer.style.display === "none") {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  });
}
