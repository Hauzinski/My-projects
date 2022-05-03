const btnNext = document.getElementById("btnSlider__next");
const btnPrev = document.getElementById("btnSlider__prev");

const minNum = 1;
const maxNum = 20;
let randomNum = +getRandomNum(minNum, maxNum);

function getRandomNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function setBg() {
  let imgSRC = `https://raw.githubusercontent.com/Hauzinski/Momentum-images/master/${bgSection}/${randomNum < 10 ? "0" + String(randomNum) : randomNum}.jpg`;
  const img = new Image();
  img.src = imgSRC;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${imgSRC})`;
  };
}

function getSlideNext() {
  randomNum++;
  if (randomNum > 20) {
    randomNum = 1;
  }
  setBg();
}

function getSlidePrev() {
  randomNum--;
  if (randomNum < 1) {
    randomNum = 20;
  }
  setBg();
}

btnNext.addEventListener("click", getSlideNext);
btnPrev.addEventListener("click", getSlidePrev);

setBg();
