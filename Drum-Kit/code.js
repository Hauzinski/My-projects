const body = document.body;
const btnInstLeft = document.querySelector(".btnInstLeft");
const btnInstRight = document.querySelector(".btnInstRight");
const btnKeys = document.querySelectorAll(".keys__key");
const btnTheme = document.querySelector(".btnTheme");
const sounds = document.querySelectorAll("audio");

let keyActiveStyle = "key-active-light";

function soundClick(x) {
  let audio = new Audio();
  audio.src = x;
  audio.currentTime = 0;
  audio.autoplay = true;
}

window.addEventListener("keyup", (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
});

window.addEventListener("keydown", (event) => {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.toggle(`${keyActiveStyle}`);
});

window.addEventListener("keyup", (event) => {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.toggle(`${keyActiveStyle}`);
});

function addDrum() {
  let i = 1;
  for (let value of btnKeys) {
    value.setAttribute("onclick", `soundClick("files/sounds/drum-0${i}.wav")`);
    i++;
  }
}

function addSoundDrum() {
  let i = 1;
  for (let value of sounds) {
    value.setAttribute("src", `files/sounds/drum-0${i}.wav`);
    i++;
  }
}

function addPiano() {
  let i = 1;
  for (let value of btnKeys) {
    value.setAttribute("onclick", `soundClick("files/sounds/piano-0${i}.wav")`);
    i++;
  }
}

function addSoundPiano() {
  let i = 1;
  for (let value of sounds) {
    value.setAttribute("src", `files/sounds/piano-0${i}.wav`);
    i++;
  }
}

btnTheme.addEventListener("click", () => {
  body.classList.toggle("background-light");
  body.classList.toggle("background-dark");
  btnInstLeft.classList.toggle("theme-light");
  btnInstLeft.classList.toggle("theme-dark");
  btnInstRight.classList.toggle("theme-light");
  btnInstRight.classList.toggle("theme-dark");

  for (let value of btnKeys) {
    value.classList.toggle("theme-light");
    value.classList.toggle("theme-dark");
  }
  btnTheme.classList.toggle("theme-light");
  btnTheme.classList.toggle("theme-dark");

  if (keyActiveStyle === "key-active-light"){
    keyActiveStyle = "key-active-dark";
  } else {
    keyActiveStyle = "key-active-light";
  }
});

btnInstLeft.addEventListener("click", () => {
  addDrum();
  addSoundDrum();
  btnInstLeft.classList.add("btn-active");
  btnInstRight.classList.remove("btn-active");
});

btnInstRight.addEventListener("click", () => {
  addPiano();
  addSoundPiano();
  btnInstLeft.classList.remove("btn-active");
  btnInstRight.classList.add("btn-active");  
});

addDrum();
addSoundDrum();
