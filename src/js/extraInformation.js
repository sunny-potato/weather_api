// wind scale : https://en.wikipedia.org/wiki/Beaufort_scale
export function getWindScale(windSpeed) {
  const windDescription = [
    "Calm",
    "Light air",
    "Light breeze",
    "Gentle breeze",
    "Moderate breeze",
    "Fresh breeze",
    "Strong breeze",
    "Near gale",
    "Fresh gale",
    "Strong gale",
    "Storm",
    "Violent storm",
    "Hurricane force",
  ];
  let wind;
  if (windSpeed < 1) {
    return (wind = windDescription[0]);
  } else if (windSpeed >= 1 && windSpeed < 4) {
    return (wind = windDescription[1]);
  } else if (windSpeed >= 4 && windSpeed < 8) {
    return (wind = windDescription[2]);
  } else if (windSpeed >= 8 && windSpeed < 13) {
    return (wind = windDescription[3]);
  } else if (windSpeed >= 13 && windSpeed < 19) {
    return (wind = windDescription[4]);
  } else if (windSpeed >= 19 && windSpeed < 25) {
    return (wind = windDescription[5]);
  } else if (windSpeed >= 25 && windSpeed < 32) {
    return (wind = windDescription[6]);
  } else if (windSpeed >= 32 && windSpeed < 39) {
    return (wind = windDescription[7]);
  } else if (windSpeed >= 39 && windSpeed < 47) {
    return (wind = windDescription[8]);
  } else if (windSpeed >= 47 && windSpeed < 55) {
    return (wind = windDescription[9]);
  } else if (windSpeed >= 55 && windSpeed < 64) {
    return (wind = windDescription[10]);
  } else if (windSpeed >= 64 && windSpeed < 73) {
    return (wind = windDescription[11]);
  } else {
    return (wind = windDescription[12]);
  }
}

// uv index : https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index
export function getUvIndex(uvIndex) {
  let uvCondition;
  if (uvIndex <= 2) {
    return (uvCondition = "Low");
    //	You can safely enjoy being outside!
  } else if (uvIndex > 2 && uvIndex <= 5) {
    return (uvCondition = "Moderate");
    // Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!
  } else if (uvIndex > 5 && uvIndex <= 7) {
    return (uvCondition = "High");
    // Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!
  } else if (uvIndex > 7 && uvIndex <= 10) {
    return (uvCondition = "Very high");
    // 	Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!
  } else if (uvIndex > 10) {
    return (uvCondition = "Extreme");
    // 	Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!
  }
}
