// wind scale : https://en.wikipedia.org/wiki/Beaufort_scale
export function getWindScale(windSpeed) {
  const windCondition = {
    level: [
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
    ],
    description: [
      "Smoke rises vertically",
      "Smoke drift shows wind direction",
      "Wind can be felt on face, flag ripples",
      "Flag waves",
      "Paper and leaves are scattered",
      "Small trees sway, whitecaps form on waves",
      "Umbrellas are hard to use, large branches on trees move",
      "Trees sway, walking in the wind is difficult",
      "Twigs and branches break off of trees",
      "Roof tiles blow off buildings",
      "Trees are uprooted",
      "Widespread damage to vegetation and buildings, nearly no visibility at sea",
      "Hurricane,tornado. Widespread destruction",
    ],
  };
  let wind;
  if (windSpeed < 1) {
    return (wind = {
      level: windCondition.level[0],
      description: windCondition.description[0],
    });
  } else if (windSpeed >= 1 && windSpeed < 4) {
    return (wind = {
      level: windCondition.level[1],
      description: windCondition.description[1],
    });
  } else if (windSpeed >= 4 && windSpeed < 8) {
    return (wind = {
      level: windCondition.level[2],
      description: windCondition.description[2],
    });
  } else if (windSpeed >= 8 && windSpeed < 13) {
    return (wind = {
      level: windCondition.level[3],
      description: windCondition.description[3],
    });
  } else if (windSpeed >= 13 && windSpeed < 19) {
    return (wind = {
      level: windCondition.level[4],
      description: windCondition.description[4],
    });
  } else if (windSpeed >= 19 && windSpeed < 25) {
    return (wind = {
      level: windCondition.level[5],
      description: windCondition.description[5],
    });
  } else if (windSpeed >= 25 && windSpeed < 32) {
    return (wind = {
      level: windCondition.level[6],
      description: windCondition.description[6],
    });
  } else if (windSpeed >= 32 && windSpeed < 39) {
    return (wind = {
      level: windCondition.level[7],
      description: windCondition.description[7],
    });
  } else if (windSpeed >= 39 && windSpeed < 47) {
    return (wind = {
      level: windCondition.level[8],
      description: windCondition.description[8],
    });
  } else if (windSpeed >= 47 && windSpeed < 55) {
    return (wind = {
      level: windCondition.level[9],
      description: windCondition.description[9],
    });
  } else if (windSpeed >= 55 && windSpeed < 64) {
    return (wind = {
      level: windCondition.level[10],
      description: windCondition.description[10],
    });
  } else if (windSpeed >= 64 && windSpeed < 73) {
    return (wind = {
      level: windCondition.level[11],
      description: windCondition.description[11],
    });
  } else {
    return (wind = {
      level: windCondition.level[12],
      description: windCondition.description[12],
    });
  }
}

// uv index : https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index
export function getUvIndex(uvIndex) {
  let uvCondition;
  if (uvIndex <= 2) {
    return (uvCondition = {
      level: "Low",
      description: "You can safely enjoy being outside!",
    });
  } else if (uvIndex > 2 && uvIndex <= 5) {
    return (uvCondition = {
      level: "Moderate",
      description:
        "Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!",
    });
  } else if (uvIndex > 5 && uvIndex <= 7) {
    return (uvCondition = {
      level: "High",
      description:
        "Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!",
    });
  } else if (uvIndex > 7 && uvIndex <= 10) {
    return (uvCondition = {
      level: "Very high",
      description:
        "	Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!",
    });
  } else if (uvIndex > 10) {
    return (uvCondition = {
      level: "Extreme",
      description:
        "	Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen and hat are a must!",
    });
  }
}
