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
  const feelsLikeData = document.querySelector(".feelsLikeData");
  const chanceOfRainData = document.querySelector(".chanceOfRainData");
  const uvData = document.querySelector(".uvData");
  const cloudData = document.querySelector(".cloudData");
  const humidityData = document.querySelector(".humidityData");
  const windData = document.querySelector(".windData");

  // const windTooltip = document.querySelector(".toolTip.wind");
  // const uvTooltip = document.querySelector(".toolTip.uv");

  // console.log(data.forecast.forecastday[0].day.daily_chance_of_rain);

  feelsLikeData.innerHTML = `${data.current.feelslike_c}°C`;
  chanceOfRainData.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  const uv = getUvIndex(data.current.uv);
  // console.log(uv.level, uv.description);
  uvData.innerHTML = `${uv.level}`;
  cloudData.innerHTML = `${data.current.cloud}%`;
  humidityData.innerHTML = `${data.current.humidity}%`;
  windData.innerHTML = `${data.current.wind_mph}mph`;
  // const wind = getWindScale(data.current.wind_mph);
  // console.log(wind.level, wind.description);
  // windLevel.innerHTML = `${wind.level}`;
  // windTooltip.innerHTML = `${wind.description}`;
  // const uv = getUvIndex(data.current.uv);
  // uvLevel.innerHTML = `${uv.level}`;
  // uvTooltip.innerHTML = `${uv.description}`;
}
