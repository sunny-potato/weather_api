import "../css/main.css";
import "../css/weatherImages.css";
import "../css/animationEffect.css";
import { callApi } from "./api";
import { rainEffect, snowEffect, lightningEffect } from "./animationEffect";
import { getLocalDate, getLocalTime } from "./dateTime";
import { getUvIndex, getWindScale } from "./extraInformation";
import {
  getWeatherImage,
  getWeatherAnimation,
  getWeatherBackGround,
} from "./weatherCondition";

//get classname
const localFullDate = document.querySelector(".localDate");
const localFullTime = document.querySelector(".localTime");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
// const currentImage = document.querySelector(".currentImage");
const currentTemperature = document.querySelector(".currentTemperature");
const currentText = document.querySelector(".currentText");
const cloudLevel = document.querySelector(".cloudLevel");
const humidityLevel = document.querySelector(".humidityLevel");
const windLevel = document.querySelector(".windLevel");
const uvLevel = document.querySelector(".uvLevel");

// default data when pageloaded
const defaultApiData = await callApi("oslo");
// default date & time
const date = defaultApiData.location.localtime;
const completeLocalDate = getLocalDate(date);
localFullDate.innerHTML = `${completeLocalDate}`;
const completeLocalTime = getLocalTime(date);
localFullTime.innerHTML = `${completeLocalTime}`;
// default weather data
city.innerHTML = `${defaultApiData.location.name},`;
country.innerHTML = `${defaultApiData.location.country}`;
currentTemperature.innerHTML = `${defaultApiData.current.temp_c}°`;
currentText.innerHTML = `${defaultApiData.current.condition.text}`;
cloudLevel.innerHTML = `${defaultApiData.current.cloud} %`;
humidityLevel.innerHTML = `${defaultApiData.current.humidity} %`;
const wind = getWindScale(defaultApiData.current.wind_mph);
windLevel.innerHTML = `${wind}`;
const uv = getUvIndex(defaultApiData.current.uv);
uvLevel.innerHTML = `${uv}`;
// console.log(defaultApiData);

//default weather image & animationeffect & background
const defaultConditionCode = defaultApiData.current.condition.code;
const isDay = defaultApiData.current.is_day; // 1 = Yes 0 = No
getWeatherImage(defaultConditionCode, isDay);
getWeatherAnimation(defaultConditionCode);
getWeatherBackGround(defaultConditionCode);

//display searchresult
const inputText = document.querySelector(".searchText");
inputText.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    const keyword = event.target.value;
    callApi(keyword).then((data) => {
      //  date & time
      const date = data.location.localtime;
      const completeLocalDate = getLocalDate(date);
      localFullDate.innerHTML = `${completeLocalDate}`;
      const completeLocalTime = getLocalTime(date);
      localFullTime.innerHTML = `${completeLocalTime}`;
      // weather data
      city.innerHTML = `${data.location.name},`;
      country.innerHTML = `${data.location.country}`;
      currentTemperature.innerHTML = `${data.current.temp_c}°`;
      currentText.innerHTML = `${data.current.condition.text}`;
      cloudLevel.innerHTML = `${data.current.cloud}%`;
      humidityLevel.innerHTML = `${data.current.humidity}%`;
      const wind = getWindScale(data.current.wind_mph);
      windLevel.innerHTML = `${wind}`;
      const uv = getUvIndex(data.current.uv);
      uvLevel.innerHTML = `${uv}`;

      //weather image & animationeffect & background
      const weatherConditionCode = data.current.condition.code;
      const isDay = data.current.is_day; // 1 = Yes 0 = No
      getWeatherImage(weatherConditionCode, isDay);
      getWeatherAnimation(weatherConditionCode);
      getWeatherBackGround(weatherConditionCode);
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
