import { displayError } from "./error";

export async function callApi(location) {
  const apiKey = "c96bb8ac630c44bd8be143846230202";
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=4&aqi=no`
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(response.status);
      console.log(data.error.message);
    }

    return data;
  } catch (error) {
    console.log(error);
    displayError();
  }
}
