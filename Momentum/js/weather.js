const city = document.getElementById("city");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weatherDescription");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherApiKey = document.getElementById("weatherApiKey");

let keyApiWeather = "";
// const keyApiWeather = "3334bee40e40a6837daed80bc4728faa";

let langWeather = "en";
let cityWeather = "Minsk";
let windSpeedDesc = "Wind speed";
let humidityDesc = "Humidity";
errorCity = "Error! City not found";
errorApiKey = "Error! Check API key";
city.value = cityWeather;

async function getWeather() {
  if (localStorage.getItem("cityWeather")) {
    cityWeather = localStorage.getItem("cityWeather");
    city.value = cityWeather;
  }

  if (localStorage.getItem("language") === "english") {
    langWeather = "en";
    windSpeedDesc = "Wind speed";
    humidityDesc = "Humidity";
    errorCity = "Error! City not found";
    errorApiKey = "Error! Check API key";
  } else if (localStorage.getItem("language") === "russian") {
    langWeather = "ru";
    windSpeedDesc = "Скорость ветра";
    humidityDesc = "Влажность";
    errorCity = "Ошибка! Город не найден";
    errorApiKey = "Ошибка! Проверте ключ API";
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&lang=${langWeather}&appid=${keyApiWeather}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === "404") {
    weatherIcon.className = "weather-icon owf";
    temperature.textContent = "";
    weatherDescription.textContent = "";
    humidity.textContent = "";
    wind.textContent = errorCity;
    return;
  } else if (data.cod === 401) {
    weatherIcon.className = "weather-icon owf";
    temperature.textContent = "";
    weatherDescription.textContent = "";
    humidity.textContent = "";
    wind.textContent = errorApiKey;
    return;
  }

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${windSpeedDesc}: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `${humidityDesc}: ${Math.round(data.main.humidity)}%`;
}

function checkApiKey() {
  if (!sessionStorage.getItem("weatherApiKey")) {
    keyApiWeather = "778d47d4c7d6fda27884475401b56da7";
  } else {
    keyApiWeather = sessionStorage.getItem("weatherApiKey");
    weatherApiKey.value = keyApiWeather;
  }
}

city.addEventListener("change", () => {
  cityWeather = city.value;
  localStorage.setItem("cityWeather", city.value);
  getWeather();
});

weatherApiKey.addEventListener("change", () => {
  keyApiWeather = weatherApiKey.value;
  sessionStorage.setItem("weatherApiKey", keyApiWeather);
  checkApiKey();
  getWeather();
});

checkApiKey();
getWeather();
