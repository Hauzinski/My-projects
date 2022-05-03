import database from "../assets/js/database";
import setPaintingNumber from "./setPaintingNumber";
import setAnswers from "./setAnswers";
import { variables } from "../index";
import сontentRendering from "./сontentRendering";
import questionArtistContent from "../pages/question-artist";
import questionPaintingContent from "../pages/question-painting";
import popupContent from "../pages/popup";
import { startTimer } from "./timer";

const mainContentBlock = document.getElementById("main");
const popupMenuContentBlock = document.getElementById("popup");

function startGame(event) {
  variables.questionNumber = 0;
  variables.categoryAnswers = [];
  if (variables.categoryType === "Artists") {
    сontentRendering(mainContentBlock, questionArtistContent);
    setPaintingNumber(event);
    document.querySelector(".questionArtistPainting").src = `assets/img/paintings/${database[variables.paintingNumber].imageNum}.jpg`;
    document.getElementById("questionNumber").innerHTML = variables.questionNumber + 1;
    setAnswers();
  } else {
    сontentRendering(mainContentBlock, questionPaintingContent);
    setPaintingNumber(event);
    document.querySelector(".artistName").innerHTML = database[variables.paintingNumber].author;
    document.getElementById("questionNumber").innerHTML = variables.questionNumber + 1;
    setAnswers();
  }
  сontentRendering(popupMenuContentBlock, popupContent);

  startTimer();
}

export default startGame;
