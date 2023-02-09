# Weather API

This project is to provide current and forecasted weather data on searched location via weather API.

## Technologies

- Vite
- HTML
- CSS
- Javascript
- Netlify

## Link

- Link to the project
  -> ![Weather API](address)
  -> ![](screenshot)

## Getting started

- Clone the repository of project in terminal,

```bash
git clone "https://github.com/sunny-potato/weather_api.git"
```

- Go to the clone file "weather_api"

```bash
cd weather_api
```

- If Vite is not installed, install Vite

```bash
npm install
```

- Run Vite in terminal,

```bash
npm run dev
```

## Features

1. Display local date, time, name
2. Show current weather condition (temperature, image, text) in the searched location
3. Temperature changes of the day in line chart
4. Data on "feels-like" temperature, chance of rain, UV index, cloud, humidity, wind
5. Weather information about different countries/cities by searching
6. Next 3-days local weather forecast

## What I have learned in this project

- rem vs em
  : rem - relative to root element
  : em- relative to parent element
- set/get/change style of pseudo-element in Javascript
  problem : querySelector() with pseudo-element doesn't work -> ex) document.querySelector(".test::before");
  solution :

  1. to set pseudo-element
     -> create element and give classname to the element in js
     -> make the element's pseudo-element in CSS
  2. to change style of pseudo-element
     -> setAttribute() in js
     -> attr() (=get the value of an attribute of the selected pseudo-element) in css (more about attr() : https://developer.mozilla.org/en-US/docs/Web/CSS/attr)
     -> data-\* (= custom data attributes) in css (more about data-\* : https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)

## Reference

- Weather API : https://www.weatherapi.com/
- UV index : https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index
- Wind scale : https://en.wikipedia.org/wiki/Beaufort_scale
