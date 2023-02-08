import { months } from "./dateTime";
// import { getWeatherImage } from "./weatherCondition";
export function displayFutureWeatherData(data) {
  const days = 3;
  for (let i = 1; i <= days; i++) {
    const futureImage = document.querySelector(`.future.day${i} .futureImage`);
    while (futureImage.firstChild) {
      futureImage.removeChild(futureImage.firstChild);
    }
    // date
    const futureDate = document.querySelector(`.future.day${i} .futureDate`);
    const month = Number(data.forecast.forecastday[i].date.slice(5, 7));
    const monthText = months[month - 1];
    const date = data.forecast.forecastday[i].date.slice(8, 10);
    futureDate.innerHTML = `${date} ${monthText}`;

    // temperature
    const futureTemperature = document.querySelector(
      `.future.day${i} .futureTemperature`
    );
    const temperature = data.forecast.forecastday[i].day.avgtemp_c;
    futureTemperature.innerHTML = `${temperature}°`;

    // image
    // const code = data.forecast.forecastday[i].day.condition.code;
    const icon = data.forecast.forecastday[i].day.condition.icon;
    // console.log(data.forecast.forecastday[i].day.condition.icon);
    const image = document.createElement("img");
    image.src = `${icon}`;
    futureImage.appendChild(image);
    // const weatherImages = [
    //   "clear_day",
    //   "thunderstorm",
    //   "cloudy_snowing",
    //   "sunny_snowing",
    //   "snowing",
    //   "tornado",
    //   "weather_snowy",
    //   "rainy",
    //   "cloudy",
    //   "partly_cloudy_day",
    // ];
    // <span class="material-symbols-outlined">clear_day</span>;

    // condition
    const futureCondition = document.querySelector(
      `.future.day${i} .futureCondition`
    );
    const condition = data.forecast.forecastday[i].day.condition.text;
    futureCondition.innerHTML = `${condition}`;
  }
}
