import "../css/main.css";
import "../css/weatherImages.css";
import "../css/animationEffect.css";
import { callApi } from "./api";
import { getLocalDate, displayLocalTime, setTimeZone } from "./dateTime";
import { displayWeatherData, displayWeatherExtraData } from "./weatherData";
import { drawLineChart } from "./lineChart";

// default data when pageloaded
const defaultApiData = await callApi("oslo");
// default date & time
console.log(defaultApiData);
const date = defaultApiData.location.localtime;
getLocalDate(date);
const localTimeZone = defaultApiData.location.tz_id;
setTimeZone(localTimeZone);

// default weather data
displayWeatherData(defaultApiData);
displayWeatherExtraData(defaultApiData);
getTemperaturePerHour(defaultApiData);
const temperatures = getTemperaturePerHour(defaultApiData);
drawLineChart(temperatures);

//search result for location
// let temperatures;
const inputText = document.querySelector(".searchText");
inputText.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    const keyword = event.target.value;
    callApi(keyword).then((data) => {
      //  date & time
      getLocalDate(data.location.localtime);
      const localTimeZone = data.location.tz_id;
      setTimeZone(localTimeZone);
      // displayLocalTime;
      // weather data
      displayWeatherData(data);
      displayWeatherExtraData(data);
      getTemperaturePerHour(data);
      const temperatures = getTemperaturePerHour(data);
      drawLineChart(temperatures);
    });
  }
});
console.log(defaultApiData.forecast.forecastday[0]);
function getTemperaturePerHour(data) {
  let forecastTemperatures = [];
  for (let i = 0; i < 24; i++) {
    const temperature = data.forecast.forecastday[0].hour[i].temp_c;
    forecastTemperatures.push(temperature);
  }
  return forecastTemperatures;
}

const menuIcon = document.querySelector(".menuIcon");
const searchContainer = document.querySelector(".searchContainer");
menuIcon.addEventListener("click", (event) => {
  // console.log(event);
  if (searchContainer.style.display === "none") {
    searchContainer.style.display = "block";
  } else {
    searchContainer.style.display = "none";
  }
});
