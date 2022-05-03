import database from "../assets/js/database";
import changePopupMenu from "./changePopupMenu";
import { variables } from "../index";
import playAudio from "./playAudio";
import { interval } from "./timer";

function checkAnswer(event) {
  if (variables.categoryType === "Artists") {
    if (database[variables.paintingNumber].author === event.target.value) {
      document.querySelector(".popupMenu__answerLogo").classList.add("popupMenu__answerLogo-correct");
      document.querySelector(".popupMenu__answerLogo").classList.remove("popupMenu__answerLogo-wrong");
      variables.categoryAnswers.push("correct");
      event.target.style.backgroundColor = "var(--green)";
      playAudio("correct");
    } else {
      document.querySelector(".popupMenu__answerLogo").classList.remove("popupMenu__answerLogo-correct");
      document.querySelector(".popupMenu__answerLogo").classList.add("popupMenu__answerLogo-wrong");
      variables.categoryAnswers.push("wrong");
      event.target.style.backgroundColor = "var(--red)";
      playAudio("wrong");
    }
  } else {
    if (database[variables.paintingNumber].imageNum === event.target.dataset.imageNumber) {
      document.querySelector(".popupMenu__answerLogo").classList.add("popupMenu__answerLogo-correct");
      document.querySelector(".popupMenu__answerLogo").classList.remove("popupMenu__answerLogo-wrong");
      variables.categoryAnswers.push("correct");
      event.target.parentNode.style.backgroundColor = "var(--green)";
      playAudio("correct");
    } else {
      document.querySelector(".popupMenu__answerLogo").classList.remove("popupMenu__answerLogo-correct");
      document.querySelector(".popupMenu__answerLogo").classList.add("popupMenu__answerLogo-wrong");
      variables.categoryAnswers.push("wrong");
      event.target.parentNode.style.backgroundColor = "var(--red)";
      playAudio("wrong");
    }
    event.target.style.opacity = "0.5";
  }
  clearInterval(interval);
  changePopupMenu(event);
}

export default checkAnswer;
