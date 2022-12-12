const langSelect = document.getElementById("language");

langSelect.addEventListener("change", () => {
  if (langSelect[0].selected) {
    setLanguage("english");
  } else if (langSelect[1].selected) {
    setLanguage("russian");
  }
});

function setLanguage(e) {
  if (e === "english") {
    localStorage.setItem("language", "english");
    langSelect[0].textContent = "English";
    langSelect[1].textContent = "Russian";

    document.querySelector(".lagendCheck").textContent = "Display blocks";
    document.querySelector(".labelAudio").textContent = "Audio player";
    document.querySelector(".labelWeather").textContent = "Weather";
    document.querySelector(".labelTime").textContent = "Time";
    document.querySelector(".labelDate").textContent = "Date";
    document.querySelector(".labelGreeting").textContent = "Greeting";
    document.querySelector(".labelQuote").textContent = "Quote";
    document.querySelector(".languageText").textContent = "Select language:";
    document.querySelector(".weatherApiText").textContent = "OpenWeatherMap API key:";
    document.querySelector(".weatherApiLink").textContent = "Get API key (openweathermap.org)";
  } else if (e === "russian") {
    localStorage.setItem("language", "russian");
    langSelect[0].textContent = "Английский";
    langSelect[1].textContent = "Русский";

    document.querySelector(".lagendCheck").textContent = "Отображать блоки";
    document.querySelector(".labelAudio").textContent = "Аудиоплеер";
    document.querySelector(".labelWeather").textContent = "Погода";
    document.querySelector(".labelTime").textContent = "Время";
    document.querySelector(".labelDate").textContent = "Дата";
    document.querySelector(".labelGreeting").textContent = "Приветствие";
    document.querySelector(".labelQuote").textContent = "Цитата";
    document.querySelector(".languageText").textContent = "Выбрать язык:";
    document.querySelector(".weatherApiText").textContent = "API ключ от OpenWeatherMap:";
    document.querySelector(".weatherApiLink").textContent = "Получить API ключ (openweathermap.org)";
  }
  getQuote();
  getWeather();
  showTimeDate();
}

if (localStorage.getItem("language") === "english") {
  langSelect[0].selected = true;
  langSelect[0].textContent = "English";
  langSelect[1].textContent = "Russian";
} else if (localStorage.getItem("language") === "russian") {
  langSelect[1].selected = true;
  langSelect[0].textContent = "Английский";
  langSelect[1].textContent = "Русский";
}

if (localStorage.getItem("language")) {
  if (localStorage.getItem("language") === "english") {
    langSelect[0].selected;
    setLanguage("english");
  } else if (localStorage.getItem("language") === "russian") {
    langSelect[1].selected;
    setLanguage("russian");
  }
}
