import database from "../assets/js/database";
import setAnswers from "./setAnswers";
import { variables } from "../index";
import сontentRendering from "./сontentRendering";
import questionArtistContent from "../pages/question-artist";
import questionPaintingContent from "../pages/question-painting";
import popupContent from "../pages/popup";
import endGame from "./endGame";
import { startTimer } from "./timer";

const mainContentBlock = document.getElementById("main");
const popupMenuContentBlock = document.getElementById("popup");

function nextQuestion() {
  variables.questionNumber++;
  variables.paintingNumber++;

  if (variables.questionNumber > 9) {
    return endGame();
  }

  setTimeout(() => {
    if (variables.categoryType === "Artists") {
      сontentRendering(mainContentBlock, questionArtistContent);
      document.querySelector(".questionArtistPainting").src = `assets/img/paintings/${database[variables.paintingNumber].imageNum}.jpg`;
      document.getElementById("questionNumber").innerHTML = variables.questionNumber + 1;
      setAnswers();
    } else {
      сontentRendering(mainContentBlock, questionPaintingContent);
      document.querySelector(".artistName").innerHTML = database[variables.paintingNumber].author;
      document.getElementById("questionNumber").innerHTML = variables.questionNumber + 1;
      setAnswers();
    }
    сontentRendering(popupMenuContentBlock, popupContent);
  }, 700);
  startTimer();
}

export default nextQuestion;
