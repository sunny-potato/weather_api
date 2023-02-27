import { months } from "./dateTime";

export function displayFutureWeatherData(data) {
  const days = 3;
  for (let i = 0; i < days; i++) {
    const futureImage = document.querySelector(
      `.future.day${i + 1} .futureImage`
    );
    while (futureImage.firstChild) {
      futureImage.removeChild(futureImage.firstChild);
    }
    getFutureDate(data, i);
    getFutureTemperature(data, i);
    getFutureImage(data, i, futureImage);
    getFutureCondition(data, i);
  }
}

function getFutureDate(data, i) {
  const futureDate = document.querySelector(`.future.day${i + 1} .futureDate`);
  const month = Number(data.forecast.forecastday[i].date.slice(5, 7));
  const monthText = months[month - 1];
  const date = data.forecast.forecastday[i].date.slice(8, 10);
  futureDate.textContent = `${date} ${monthText}`;
}

function getFutureTemperature(data, i) {
  const futureTemperature = document.querySelector(
    `.future.day${i + 1} .futureTemperature`
  );
  const temperature = data.forecast.forecastday[i].day.avgtemp_c;
  futureTemperature.textContent = `${temperature}°`;
}

function getFutureImage(data, i, futureImage) {
  const icon = data.forecast.forecastday[i].day.condition.icon;
  const image = document.createElement("img");
  image.src = `${icon}`;
  futureImage.appendChild(image);
}
function getFutureCondition(data, i) {
  const futureCondition = document.querySelector(
    `.future.day${i + 1} .futureCondition`
  );
  const condition = data.forecast.forecastday[i].day.condition.text;
  futureCondition.textContent = `${condition}`;
}
