import click from "../assets/audio/click.mp3";
import correct from "../assets/audio/correct.mp3";
import isover from "../assets/audio/round is over.mp3";
import wrong from "../assets/audio/wrong.mp3";

const audioList = {
  click: click,
  wrong: wrong,
  correct: correct,
  isover: isover,  
};

function playAudio(name) {
  const audio = new Audio();
  let obj = JSON.parse(window.localStorage.getItem("ARTQUIZ"));
  audio.volume = 0;
  if (obj.isMute) {
    audio.volume = obj.volume / 100;
  }
  audio.src = audioList[name];
  audio.currentTime = 0;
  audio.play();  
}

export default playAudio;
