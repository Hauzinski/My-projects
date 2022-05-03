const body = document.body;
const clock = document.querySelectorAll(".clock");
const hourHand1 = document.querySelector(".clock__hourHand-1");
const hourHand2 = document.querySelector(".clock__hourHand-2");
const hourHand3 = document.querySelector(".clock__hourHand-3");
const minHand = document.querySelectorAll(".clock__minHand");
const secHand = document.querySelectorAll(".clock__secHand");
const btnTheme = document.querySelector(".btnTheme");
const conTimeDate = document.querySelector(".timeDateContainer");
const conTime = document.querySelector(".timeDateContainer__time");
const conDate = document.querySelector(".timeDateContainer__date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setDate() {
  const nowDate = new Date();
  const londonDate = new Date(nowDate - 2 * 3.6e6);
  const newYorkDate = new Date(nowDate - 7 * 3.6e6);
  const seconds = nowDate.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  const minutes = nowDate.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  const hours1 = londonDate.getHours();
  const hours2 = nowDate.getHours();
  const hours3 = newYorkDate.getHours();
  const hoursDeg1 = (hours1 / 12) * 360 + 90; // London
  const hoursDeg2 = (hours2 / 12) * 360 + 90;
  const hoursDeg3 = (hours3 / 12) * 360 + 90; // New-York
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth();
  const date = nowDate.getDate();
  const day = nowDate.getDay();

  for (let value of minHand) {
    value.style.transform = `rotate(${minutesDeg}deg)`;
  }
  for (let value of secHand) {
    value.style.transform = `rotate(${secondsDeg}deg)`;
  }

  hourHand1.style.transform = `rotate(${hoursDeg1}deg)`;
  hourHand2.style.transform = `rotate(${hoursDeg2}deg)`;
  hourHand3.style.transform = `rotate(${hoursDeg3}deg)`;

  conTime.innerHTML = `${hours2 < 10 ? `0${hours2}` : hours2} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
  conDate.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}`;
}

btnTheme.addEventListener("click", () => {
  body.classList.toggle("background-light");
  body.classList.toggle("background-dark");
  for (let value of document.querySelectorAll(".cityContainer>p")) {
    value.classList.toggle("city-light");
    value.classList.toggle("city-dark");
  }

  for (let value of clock) {
    value.classList.toggle("clock_style-light");
    value.classList.toggle("clock_style-dark");
  }
  hourHand1.classList.toggle("clock__hourHand_style-light");
  hourHand1.classList.toggle("clock__hourHand_style-dark");
  hourHand2.classList.toggle("clock__hourHand_style-light");
  hourHand2.classList.toggle("clock__hourHand_style-dark");
  hourHand3.classList.toggle("clock__hourHand_style-light");
  hourHand3.classList.toggle("clock__hourHand_style-dark");
  for (let value of minHand) {
    value.classList.toggle("clock__minHand_style-light");
    value.classList.toggle("clock__minHand_style-dark");
  }
  for (let value of secHand) {
    value.classList.toggle("clock__secHand_style-light");
    value.classList.toggle("clock__secHand_style-dark");
  }
  conTimeDate.classList.toggle("timeDateContainer_style-light");
  conTimeDate.classList.toggle("timeDateContainer_style-dark");
  btnTheme.classList.toggle("btnTheme_style-light");
  btnTheme.classList.toggle("btnTheme_style-dark");
});

setDate();
setInterval(setDate, 1000);
