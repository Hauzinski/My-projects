const conTime = document.getElementById("timeContainer__time");
const conDate = document.getElementById("timeContainer__date");
const greeting = document.getElementById("greeting");
const formatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
const userName = document.getElementById("userName");
const btnName = document.getElementById("btnName");
const btnDelName = document.getElementById("btnDelName");
let langTimeDate = "en-US"; //en-US, ru-RU
let Greetings = "Good";
let TimesofDay = "";
let bgSection = "";

function showTimeDate() {
  if (localStorage.getItem("language") === "english") {
    langTimeDate = "en-US";
    userName.placeholder = "[Enter name]";  
  } else if (localStorage.getItem("language") === "russian") {
    langTimeDate = "ru-RU";
    userName.placeholder = "[Введите имя]";   
  }

  const nowDate = new Date();
  const formatter = new Intl.DateTimeFormat(langTimeDate, formatOptions);
  const [{ value: weekday }, , { value: month }, , { value: day }, , { value: year }, , { value: hour }, , { value: minute }, , { value: second }] = formatter.formatToParts(nowDate);
  getTimeOfDay(hour);

  conTime.innerHTML = `${hour}:${minute}:${second}`;
  conDate.innerHTML = `${weekday}, ${month} ${day}`;
  greeting.innerHTML = `${Greetings} ${TimesofDay}`;
}

function getTimeOfDay(hour) {
  if (hour >= 6 && hour <= 11) {
    bgSection = "morning";
  } else if (hour >= 12 && hour <= 17) {
    bgSection = "afternoon";
  } else if (hour >= 18 && hour <= 23) {
    bgSection = "evening";
  } else {
    bgSection = "night";
  }

  if (langTimeDate === "en-US") {
    Greetings = "Good";
    TimesofDay = bgSection;
  } else if (langTimeDate === "ru-RU") {
    if (bgSection === "morning") {
      Greetings = "Доброе";
      TimesofDay = "утро";
    } else if (bgSection === "afternoon") {
      Greetings = "Добрый";
      TimesofDay = "день";
    } else if (bgSection === "evening") {
      Greetings = "Добрый";
      TimesofDay = "вечер";
    } else if (bgSection === "night") {
      Greetings = "Спокойной";
      TimesofDay = "ночи";
    }
  }
}

function setLocalStorage() {
  if (!userName.value) {
    return;
  }
  localStorage.setItem("userName", userName.value);
}

function getLocalStorage() {
  if (!localStorage.getItem("userName")) {
    return;
  }
  userName.value = localStorage.getItem("userName");
  userName.style.width = localStorage.getItem("userNameLength");
}

function delLocalStorage() {
  userName.value = "";
  localStorage.setItem("userName", userName.value);
  userName.style.width = "";
  localStorage.setItem("userNameLength", userName.style.width);
}

function resizeInput() {
  this.style.width = this.value.length + 1 + "ch";
  localStorage.setItem("userNameLength", this.style.width);
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
userName.addEventListener("input", resizeInput);
btnName.addEventListener("click", setLocalStorage);
btnDelName.addEventListener("click", delLocalStorage);
userName.addEventListener("focus", () => {
  btnName.hidden = false;
  btnDelName.hidden = false;
});
userName.addEventListener("blur", () => {
  setTimeout(() => {
    btnName.hidden = true;
    btnDelName.hidden = true;
  }, 150);
});

btnName.hidden = true;
btnDelName.hidden = true;

showTimeDate();
setInterval(showTimeDate, 1000);
