import {
  getWeatherImage,
  getWeatherAnimation,
  getWeatherBackGround,
} from "./weatherCondition";
import { getUvIndex, getWindScale } from "./weatherExtraData";

export function displayWeatherData(data) {
  const city = document.querySelector(".city");
  const country = document.querySelector(".country");
  const currentTemperature = document.querySelector(".currentTemperature");
  const currentText = document.querySelector(".currentText");

  city.innerHTML = `${data.location.name},`;
  country.innerHTML = `${data.location.country}`;
  currentTemperature.innerHTML = `${data.current.temp_c}°`;
  currentText.innerHTML = `${data.current.condition.text}`;

  // weather image & animationeffect & background
  const weatherConditionCode = data.current.condition.code;
  const isDay = data.current.is_day; // 1 = Yes 0 = No
  getWeatherImage(weatherConditionCode, isDay);
  getWeatherAnimation(weatherConditionCode);
  getWeatherBackGround(weatherConditionCode);
}

//default extra information
export function displayWeatherExtraData(data) {
  const cloudLevel = document.querySelector(".cloudLevel");
  const humidityLevel = document.querySelector(".humidityLevel");
  const windLevel = document.querySelector(".windLevel");
  const uvLevel = document.querySelector(".uvLevel");
  const windTooltip = document.querySelector(".toolTip.wind");
  const uvTooltip = document.querySelector(".toolTip.uv");

  cloudLevel.innerHTML = `${data.current.cloud} %`;
  humidityLevel.innerHTML = `${data.current.humidity} %`;
  const wind = getWindScale(data.current.wind_mph);
  console.log(wind.level, wind.description);
  windLevel.innerHTML = `${wind.level}`;
  windTooltip.innerHTML = `${wind.description}`;
  const uv = getUvIndex(data.current.uv);
  console.log(uv.level, uv.description);
  uvLevel.innerHTML = `${uv.level}`;
  uvTooltip.innerHTML = `${uv.description}`;
}
