const animationEffect = document.querySelector(".animationEffect");

export function rainEffect() {
  for (let i = 0; i < 50; i++) {
    const drop = document.createElement("span");
    drop.className = "rain";
    const dropWidth = Math.random() * 3;
    drop.style.width = `${dropWidth}px`;
    drop.style.height = `1rem`;
    const dropPosX = Math.floor(Math.random() * 99);
    drop.style.left = `${dropPosX}%`;
    const dropDelay = Math.random() * -3;
    drop.style.animationDelay = `${dropDelay}s`;
    animationEffect.appendChild(drop);
  }
}

export function snowEffect() {
  for (let i = 0; i < 50; i++) {
    const snow = document.createElement("span");
    snow.className = "snow";
    const snowSize = Math.random() * (11 - 5) + 5;
    snow.style.width = `${snowSize}px`;
    snow.style.height = `${snowSize}px`;
    snow.style.borderRadius = "50%";
    const snowPosX = Math.floor(Math.random() * 99);
    snow.style.left = `${snowPosX}%`;
    const snowDelay = Math.random() * -3;
    snow.style.animationDelay = `${snowDelay}s`;
    animationEffect.appendChild(snow);
  }
}

export function lightningEffect() {
  for (let i = 0; i < 40; i++) {
    const lightning = document.createElement("span");
    lightning.className = "lightning";
    const lightningWidth = Math.random() * (12 - 5) + 5;
    const lightningHeight = lightningWidth + 5;
    lightning.style.width = `${lightningWidth}px`;
    lightning.style.height = `${lightningHeight}px`;
    lightning.style.transform = "skew(-40deg)";
    const lightningPosX = Math.floor(Math.random() * 99);
    lightning.style.left = `${lightningPosX}%`;
    const lightningPosY = Math.floor(Math.random() * 99);
    lightning.style.top = `${lightningPosY}%`;
    const lightningDelay = Math.random() * -4;
    lightning.style.animationDelay = `${lightningDelay}s`;
    animationEffect.appendChild(lightning);
  }
}
