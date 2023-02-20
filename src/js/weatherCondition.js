import { rainEffect, snowEffect, lightningEffect } from "./weatherAnimation";

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
  const cloudImage = document.querySelector(".cloud");
  const moonImage = document.querySelector(".moon");
  const sunImage = document.querySelector(".sun");
  const moonCloudImage = document.querySelector(".moonCloud");
  const sunCloudImage = document.querySelector(".sunCloud");
  const listOfImages = [
    cloudImage,
    moonImage,
    sunImage,
    moonCloudImage,
    sunCloudImage,
  ];

  // for (let i = 0; i < listOfImages.length; i++) {
  //   listOfImages[i].style.visibility = "hidden";
  // }

  // Fancy måte
  for (const image of listOfImages) {
    image.style.visibility = "hidden";
  }

  const isCloudy = cloudCodes.includes(code);
  const isSunOrMoon = sunOrMoonCodes.includes(code);
  const isCombination = combinationCodes.includes(code);
  if (isCloudy) {
    cloudImage.style.visibility = "visible";
  } else if (isSunOrMoon) {
    if (isDay) {
      sunImage.style.visibility = "visible";
    } else {
      moonImage.style.visibility = "visible";
    }
  } else if (isCombination) {
    if (isDay) {
      sunCloudImage.style.visibility = "visible";
    } else {
      moonCloudImage.style.visibility = "visible";
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
  removeAllEffects();

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

function removeAllEffects() {
  const animationEffect = document.querySelector(".animationEffect");
  while (animationEffect.firstChild) {
    animationEffect.removeChild(animationEffect.firstChild);
  }
}

export function getWeatherBackGround(code) {
  const isCloudy = cloudCodes.includes(code);
  const isSunOrMoon = sunOrMoonCodes.includes(code);
  const isCombination = combinationCodes.includes(code);
  const pageContainer = document.querySelector(".pageContainer");
  if (isCloudy) {
    pageContainer.style.background =
      "linear-gradient(120deg, #19547b 0%, #ffd89b 100%)";
  } else if (isSunOrMoon) {
    pageContainer.style.background =
      "linear-gradient(120deg, #516395 0%, #614385 100%)";
  } else if (isCombination) {
    pageContainer.style.background =
      "linear-gradient(120deg, #f574b9 0%, #85ffbd 100%)";
  } else {
    // when not found, image
  }
}
