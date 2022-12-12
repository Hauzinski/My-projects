const wrapper = document.querySelector(".wrapper");
const sldText = document.querySelector(".sliderText");
const sldPicture = document.querySelector(".sliderPicture");
const items = document.querySelectorAll(".sliderPicture__pictureItem").length;
const btnUp = document.querySelector(".control__btnUp");
const btnDown = document.querySelector(".control__btnDown");
const btnLeft = document.querySelector(".control__btnLeft");
const btnRight = document.querySelector(".control__btnRight");
const btnOrientation = document.querySelector(".control__btnOrientation");

sldPicture.style.top = `-${(items - 1) * 100}vh`;

let slideNow = 0;

btnUp.addEventListener("click", () => {
  changeSlide("up");
});
btnDown.addEventListener("click", () => {
  changeSlide("down");
});
btnLeft.addEventListener("click", () => {
  changeSlideVertical("left");
});
btnRight.addEventListener("click", () => {
  changeSlideVertical("right");
});

btnOrientation.addEventListener("click", () => {
  sldText.classList.toggle("sliderText_position-hirozontal");
  sldText.classList.toggle("sliderText_position-vertical");
  for (let value of document.querySelectorAll(".sliderText__textItem")) {
    value.classList.toggle("background-none");
  }
  for (let value of document.querySelectorAll(".sliderPicture__pictureItem")) {
    value.classList.toggle("sliderPicture__pictureItem_order");
  }
  sldPicture.classList.toggle("sliderPicture_position-hirozontal");
  sldPicture.classList.toggle("sliderPicture_position-vertical");

  btnDown.classList.toggle("control__btnDown_position-vertical");
  btnDown.classList.toggle("control__btnDown_position-hirozontal");
  btnUp.classList.toggle("control__btnUp_position-vertical");
  btnUp.classList.toggle("control__btnUp_position-hirozontal");
  btnLeft.classList.toggle("control__btnLeft_position-vertical");
  btnLeft.classList.toggle("control__btnLeft_position-hirozontal");
  btnRight.classList.toggle("control__btnRight_position-vertical");
  btnRight.classList.toggle("control__btnRight_position-hirozontal");
  
  sldPicture.style.transform = `translateY(0px)`;
  sldText.style.transform = `translateY(0px)`;
  sldPicture.style.transform = `translateX(0px)`;
  sldText.style.transform = `translateX(0px)`;
});

function changeSlide(e) {
  if (e === "up") {
    slideNow++;
    if (slideNow === items) {
      slideNow = 0;
    }
  } else if (e === "down") {
    slideNow--;
    if (slideNow < 0) {
      slideNow = items - 1;
    }
  }
  sldPicture.style.transform = `translateY(${wrapper.clientHeight * slideNow}px)`;
  sldText.style.transform = `translateY(-${wrapper.clientHeight * slideNow}px)`;
}

function changeSlideVertical(e) {
  if (e === "right") {
    slideNow++;
    if (slideNow === items) {
      slideNow = 0;
    }
  } else if (e === "left") {
    slideNow--;
    if (slideNow < 0) {
      slideNow = items - 1;
    }
  }
  sldPicture.style.transform = `translateX(${wrapper.clientWidth * slideNow}px)`;
  sldText.style.transform = `translateX(-${wrapper.clientWidth * slideNow}px)`;
}
