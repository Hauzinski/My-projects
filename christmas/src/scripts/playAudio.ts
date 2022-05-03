import { cristmasApplicationData } from '../assets/data/applicationData';

const audio = new Audio();

function playAudio(): void {
  if (cristmasApplicationData.options.isMute) {
    audio.src = './src/assets/audio/audio.mp3';
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
}

export { audio, playAudio };
