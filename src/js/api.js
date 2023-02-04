export async function callApi(location) {
  const apiKey = "c96bb8ac630c44bd8be143846230202";
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    );
    const data = await response.json(); //location, current

    if (!response.ok) {
      console.log(response.status);
      console.log(data.error.message);
    }
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
