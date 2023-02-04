import "../css/main.css";
import "../css/weatherImages.css";
import "../css/animationEffect.css";
import { callApi } from "./api";
import { rainEffect, snowEffect, lightningEffect } from "./animationEffect";

//get classname
const localFullDate = document.querySelector(".localDate");
const localFullTime = document.querySelector(".localTime");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const currentImage = document.querySelector(".currentImage");
const currentTemperature = document.querySelector(".currentTemperature");
const currentText = document.querySelector(".currentText");
const cloudLevel = document.querySelector(".cloudLevel");
const humidityLevel = document.querySelector(".humidityLevel");
const windLevel = document.querySelector(".windLevel");

//default when pageloaded
const defaultApiData = await callApi("oslo");

// get localDate
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOftheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const date = defaultApiData.location.localtime;
const localYear = date.slice(0, 4);
const slicedMonth = Number(date.slice(5, 7));
const localMonth = months[slicedMonth - 1];
const localDate = Number(date.slice(8, 10));
let localDay;

//???????????????????
const clientLocalDate = new Date();
const dateDifference = localDate - clientLocalDate.getDate();
if (dateDifference == 0) {
  localDay = daysOftheWeek[clientLocalDate.getDay() - 1];
}
//?????????????????????
const completeLocalDate = `${localDay}, ${localDate} ${localMonth} ${localYear}`;
localFullDate.innerHTML = `${completeLocalDate}`;
const localHour = Number(date.slice(11, 13));
const localMinute = Number(date.slice(14, 16));
// console.log(localMinute);
// console.log(defaultApiData.location.localtime);

city.innerHTML = `${defaultApiData.location.name},`;
country.innerHTML = `${defaultApiData.location.country}`;
currentTemperature.innerHTML = `${defaultApiData.current.temp_c}°`;
currentText.innerHTML = `${defaultApiData.current.condition.text}`;
cloudLevel.innerHTML = `${defaultApiData.current.cloud}`;
humidityLevel.innerHTML = `${defaultApiData.current.humidity}`;
windLevel.innerHTML = `${defaultApiData.current.wind_kph}`;

const cloudCodes = [
  1006, 1009, 1030, 1072, 1114, 1135, 1147, 1150, 1153, 1168, 1171, 1183, 1189,
  1195, 1198, 1201, 1204, 1207, 1213, 1219, 1225, 1237, 1276, 1282,
];
const sunOrMoonCodes = [1000];
const combinationCodes = [
  1003, 1063, 1066, 1069, 1087, 1180, 1186, 1192, 1210, 1216, 1222, 1240, 1243,
  1246, 1249, 1252, 1255, 1258, 1261, 1264, 1273, 1279,
];

// const defaultConditionCode = defaultApiData.current.condition.code;
const defaultConditionCode = 1279;
// console.log(defaultConditionCode);
getWeatherImage(defaultConditionCode);
function getWeatherImage(code) {
  const isCloudy = cloudCodes.includes(code);
  const isSunOrMoon = sunOrMoonCodes.includes(code);
  const isCombination = combinationCodes.includes(code);
  if (isCloudy) {
    const cloudImage = document.querySelector(".cloud");
    cloudImage.style.visibility = "visible";
  } else if (isSunOrMoon) {
    if (localHour > 16 || localHour < 5) {
      const moonImage = document.querySelector(".moon");
      moonImage.style.visibility = "visible";
    } else {
      const sunImage = document.querySelector(".sun");
      sunImage.style.visibility = "visible";
    }
  } else if (isCombination) {
    if (localHour > 16 || localHour < 5) {
      const moonCloudImage = document.querySelector(".moonCloud");
      moonCloudImage.style.visibility = "visible";
    } else {
      const sunCloudImage = document.querySelector(".sunCloud");
      sunCloudImage.style.visibility = "visible";
    }
  } else {
    // when not found, image
  }
}

const snowCodes = [
  1066, 1072, 1114, 1117, 1168, 1171, 1210, 1213, 1216, 1219, 1222, 1225, 1237,
  1255, 1258, 1261, 1264,
];
const rainCodes = [
  1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1198, 1201, 1240, 1243, 1246,
];
const snowRainCodes = [1069, 1204, 1207, 1249, 1252];
const lightningCodes = [1087, 1273, 1276];
const lightningRainCodes = [1279, 1282];
const nothingCodes = [1135, 1147];

getWeatherAnimation(defaultConditionCode);
function getWeatherAnimation(code) {
  const isSnow = snowCodes.includes(code);
  const isRainy = rainCodes.includes(code);
  const isSnowRainy = snowRainCodes.includes(code);
  const isLightning = lightningCodes.includes(code);
  const isLightningRain = lightningRainCodes.includes(code);
  // const isNothing = nothingCodes.includes(code);
  if (isSnow) {
    snowEffect();
  } else if (isRainy) {
    rainEffect();
  } else if (isSnowRainy) {
    snowEffect();
    rainEffect();
  } else if (isLightning) {
    lightningEffect();
  } else if (isLightningRain) {
    lightningEffect();
    rainEffect();
  }
}

getWeatherBackGround(defaultConditionCode);
function getWeatherBackGround(code) {
  const isCloudy = cloudCodes.includes(code);
  const isSunOrMoon = sunOrMoonCodes.includes(code);
  const isCombination = combinationCodes.includes(code);
  const displayContainer = document.querySelector(".displayContainer");
  if (isCloudy) {
    displayContainer.style.backgroundImage =
      "linear-gradient(120deg, #85ffbd 0%, #f574b9 100%";
  } else if (isSunOrMoon) {
    displayContainer.style.backgroundImage =
      "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
  } else if (isCombination) {
    displayContainer.style.backgroundImage =
      "linear-gradient(120deg, #85FFBD 0%, #FFFB7D 90%)";
  } else {
    // when not found, image
  }
}

//display searchresult
// const inputText = document.querySelector(".searchText");
// inputText.addEventListener("keydown", (event) => {
//   if (event.key == "Enter") {
//     const keyword = event.target.value;
//     callApi(keyword).then((data) => {
//       city.innerHTML = `${data.location.name},`;
//       country.innerHTML = `${data.location.country}`;
//       return data;
//     });
//   }
// });
