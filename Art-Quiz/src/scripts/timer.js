import playAudio from "./playAudio";
import { showPopupMenu } from "./show-hiddePopupMenu";
import { variables } from "../index";
import database from "../assets/js/database";

const popupMenuContentBlock = document.getElementById("popup");
let interval;

function getTimer() {
  const obj = JSON.parse(window.localStorage.getItem("ARTQUIZ"));
  if (obj.isGameTimer) {
    return obj.timer;
  } else {
    return null;
  }
}

function startTimer() {
  let time = getTimer();
  if (time === null) {
    return;
  }
  interval = setInterval(() => {
    const timer = document.querySelector(".timer");
    if (!time) {
      clearInterval(interval);
      timer.classList.add("hidden");
      showPopupMenu(popupMenuContentBlock);
      document.querySelector(".popupMenu__answerLogo").classList.remove("popupMenu__answerLogo-correct");
      document.querySelector(".popupMenu__answerLogo").classList.add("popupMenu__answerLogo-wrong");
      document.getElementById("popupMenu__next").classList.remove("display-none");
      document.getElementById("popupMenu__close").classList.add("display-none");
      document.getElementById("popupMenu__answerLogo").classList.remove("display-none");
      document.querySelector(".popupMenu > img").src = `assets/img/paintings/${database[variables.paintingNumber].imageNum}.jpg`;
      document.querySelector(".popupMenu__artist").innerHTML = database[variables.paintingNumber].author;
      document.querySelector(".popupMenu__painting").innerHTML = database[variables.paintingNumber].name;
      document.querySelector(".popupMenu__year").innerHTML = database[variables.paintingNumber].year;
      variables.categoryAnswers.push("wrong");
      playAudio("wrong");
      return;
    }
    setTimer(time);
    time--;
  }, 1000);
}

function setTimer(value) {
  const timer = document.querySelector(".timer");
  if (getTimer()) {
    timer.innerHTML = value;
    timer.classList.remove("hidden");
  }
}

export { startTimer, interval };
