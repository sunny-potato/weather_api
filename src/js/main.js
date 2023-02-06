import "../css/main.css";
import "../css/weatherImages.css";
import "../css/animationEffect.css";
import { callApi } from "./api";
import { getLocalDate, getLocalTime, displayLocalTime } from "./dateTime";
import { displayWeatherData, displayWeatherExtraData } from "./weatherData";
// default data when pageloaded
const defaultApiData = await callApi("oslo");
// default date & time
console.log(defaultApiData);
const date = defaultApiData.location.localtime;
getLocalDate(date);
const localTimeZone = defaultApiData.location.tz_id;
getLocalTime(localTimeZone);
displayLocalTime;
// default weather data
displayWeatherData(defaultApiData);
displayWeatherExtraData(defaultApiData);

//search result for location
const inputText = document.querySelector(".searchText");
inputText.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    const keyword = event.target.value;
    callApi(keyword).then((data) => {
      //  date & time
      getLocalDate(data.location.localtime);
      const localTimeZone = data.location.tz_id;
      getLocalTime(localTimeZone);
      displayLocalTime;
      // weather data
      displayWeatherData(data);
      displayWeatherExtraData(data);
    });
  }
});

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
