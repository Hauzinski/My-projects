import playListAudio from "./playListAudio.js";

const btnPlayPause = document.getElementById("btnPlayPause");
const btnPrevAudio = document.getElementById("btnPlay-prev");
const btnNextAudio = document.getElementById("btnPlay-next");
const playList = document.querySelector(".play-list");
const audio = new Audio();

let numberOfTracks;
let trackNow = 0;

function audioPlay() {
  btnPlayPause.classList.toggle("btnPlay");
  btnPlayPause.classList.toggle("btnPause");
  btnPlayPause.removeEventListener("click", audioPlay);
  btnPlayPause.addEventListener("click", audioPause);
  playAudio();
}

function audioPause() {
  btnPlayPause.classList.toggle("btnPlay");
  btnPlayPause.classList.toggle("btnPause");
  btnPlayPause.removeEventListener("click", audioPause);
  btnPlayPause.addEventListener("click", audioPlay);
  pauseAudio();
}

function playAudio() {
  if (!document.querySelector(".item-active")) {
    selectTrack();
  }
  audio.src = playListAudio[trackNow].src;
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function setSongList() {
  for (let i = 0; i < playListAudio.length; i++) {
    playList.append(document.createElement("li"));
    playList.children[i].classList.add("play-item");
    playList.children[i].textContent = `${playListAudio[i].title}`;
  }
  numberOfTracks = playList.children.length;
}

function selectTrack() {
  for (let value of playList.children) {
    value.classList.remove("item-active");
  }
  playList.children[trackNow].classList.add("item-active");
}

function playNextAudio() {
  trackNow++;
  if (trackNow > numberOfTracks - 1) {
    trackNow = 0;
  }
  selectTrack();
  audioPlay();
  btnPlayPause.classList.remove("btnPlay");
  btnPlayPause.classList.add("btnPause");
}

function playPrevAudio() {
  trackNow--;
  if (trackNow < 0) {
    trackNow = numberOfTracks - 1;
  }
  selectTrack();
  audioPlay();
  btnPlayPause.classList.remove("btnPlay");
  btnPlayPause.classList.add("btnPause");
}

audio.addEventListener("timeupdate", function () {
  let buffer = 0.4;  
  if (this.currentTime > this.duration - buffer) {
    playNextAudio();
  }
});

btnPlayPause.addEventListener("click", audioPlay);
btnNextAudio.addEventListener("click", playNextAudio);
btnPrevAudio.addEventListener("click", playPrevAudio);

setSongList();
