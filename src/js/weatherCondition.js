// weahter image by day & night

const cloudCodes = [
  1006, 1009, 1030, 1072, 1114, 1135, 1147, 1150, 1153, 1168, 1171, 1183, 1189,
  1195, 1198, 1201, 1204, 1207, 1213, 1219, 1225, 1237, 1276, 1282,
];
const sunOrMoonCodes = [1000];
const combinationCodes = [
  1003, 1063, 1066, 1069, 1087, 1180, 1186, 1192, 1210, 1216, 1222, 1240, 1243,
  1246, 1249, 1252, 1255, 1258, 1261, 1264, 1273, 1279,
];

export function getWeatherImage(code, isDay) {
  const isCloudy = cloudCodes.includes(code);
  const isSunOrMoon = sunOrMoonCodes.includes(code);
  const isCombination = combinationCodes.includes(code);
  if (isCloudy) {
    const cloudImage = document.querySelector(".cloud");
    cloudImage.style.visibility = "visible";
  } else if (isSunOrMoon) {
    if (isDay == 0) {
      const moonImage = document.querySelector(".moon");
      moonImage.style.visibility = "visible";
    } else {
      const sunImage = document.querySelector(".sun");
      sunImage.style.visibility = "visible";
    }
  } else if (isCombination) {
    if (isDay == 0) {
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

export function getWeatherAnimation(code) {
  const isSnow = snowCodes.includes(code);
  const isRainy = rainCodes.includes(code);
  const isSnowRainy = snowRainCodes.includes(code);
  const isLightning = lightningCodes.includes(code);
  const isLightningRain = lightningRainCodes.includes(code);
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

export function getWeatherBackGround(code) {
  const isCloudy = cloudCodes.includes(code);
  const isSunOrMoon = sunOrMoonCodes.includes(code);
  const isCombination = combinationCodes.includes(code);
  const displayContainer = document.querySelector(".displayContainer");
  if (isCloudy) {
    displayContainer.style.backgroundImage =
      "linear-gradient(120deg, #85ffbd 0%, #f574b9 100%)";
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
