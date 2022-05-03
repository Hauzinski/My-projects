import { variables } from "../index";

let ARTQUIZ = {
  answers: setArray(),
  isMute: false,
  volume: 50,
  isGameTimer: false,
  timer: 30,
};

function setArray() {
  return new Array(24).fill([], 0, 24);
}

function createApplicationData() {
  if (!window.localStorage.getItem("ARTQUIZ")) {
    window.localStorage.setItem("ARTQUIZ", JSON.stringify(ARTQUIZ));
  }
}

function saveApplicationData(event) {
  let obj = JSON.parse(window.localStorage.getItem("ARTQUIZ"));

  if (event.target.id === "popupRoundResult__end") {
    let categoryNumber = variables.categoryType === "Artists" ? variables.categoryNumber : 12 + variables.categoryNumber;
    obj.answers[categoryNumber] = variables.categoryAnswers;
  } else if (event.target.id === "options__back" || event.target.id === "volume") {
    if (document.getElementById("audioCheck").checked) {
      obj.isMute = true;
    } else {
      obj.isMute = false;
    }
    obj.volume = document.getElementById("volume").value;
    if (document.getElementById("timerCheck").checked) {
      obj.isGameTimer = true;
    } else {
      obj.isGameTimer = false;
    }
    obj.timer = document.getElementById("timer").value;
  }

  window.localStorage.setItem("ARTQUIZ", JSON.stringify(obj));
}

function loadApplicationData(event) {
  let obj = JSON.parse(window.localStorage.getItem("ARTQUIZ"));

  if (event.target.id === "mainMenu__categoryArtists" || event.target.id === "mainMenu__categoryPainting" || event.target.id === "categoryResultsMenu__back" || event.target.id === "popupRoundResult__end") {
    const category = document.querySelectorAll(".categoryMenu__category");
    const categoryProgress = document.querySelectorAll(".categoryMenu__catProgress");
    for (let i = 0; i < 12; i++) {
      if (obj.answers[variables.categoryType === "Artists" ? i : 12 + i].length === 0) {
        categoryProgress[i].classList.add("hidden");
      } else {
        category[i].classList.add("category-complete");
        categoryProgress[i].innerHTML = `${obj.answers[variables.categoryType === "Artists" ? i : 12 + i].filter((value) => value === "correct").length}/10`;
      }
    }
  } else if (event.target.id === "categoryMenu__catProgress") {
    const currentСategoryNumber = +event.target.closest(".categoryMenu__category").dataset.categoryNumber;
    const categoryNumber = variables.categoryType === "Artists" ? currentСategoryNumber : 12 + currentСategoryNumber;

    document.querySelector(".categoryMenu__catProgress").innerHTML = `${obj.answers[categoryNumber].filter((value) => value === "correct").length}/10`;

    const images = document.querySelectorAll(".categoryResultsMenu__container > img");
    images.forEach((value, index) => {
      if (obj.answers[categoryNumber][index] === "wrong") {
        value.classList.add("black-white");
      }
    });
  } else if (event.target.id === "mainMenu__options") {
    if (obj.isMute) {
      document.getElementById("audioCheck").checked = true;
    }
    if (obj.isGameTimer) {
      document.getElementById("timerCheck").checked = true;
    }
    document.getElementById("volume").value = obj.volume;
    document.getElementById("volume").style.background = `linear-gradient(to right, var(--gold) 0%, var(--gold) ${obj.volume}%, var(--grey) ${obj.volume}%, var(--grey) 100%)`;
    document.getElementById("timer").value = obj.timer;
  }
}

export { createApplicationData, saveApplicationData, loadApplicationData };
