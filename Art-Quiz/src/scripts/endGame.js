import popupRoundResultsContent from "../pages/popup-round-results";
import { showPopupMenu, hiddePopupMenu } from "./show-hiddePopupMenu";
import playAudio from "./playAudio";

import сontentRendering from "./сontentRendering";

const mainContentBlock = document.getElementById("main");
const popupMenuContentBlock = document.getElementById("popup");

import { variables } from "../index";

function endGame() {
  hiddePopupMenu(popupMenuContentBlock);
  setTimeout(() => {
    mainContentBlock.innerHTML = "";
    сontentRendering(popupMenuContentBlock, popupRoundResultsContent);
    document.querySelector(".rightAnswer").innerHTML = `${correctAnswersNumber}`;
    showPopupMenu(popupMenuContentBlock);
    playAudio("isover");
  }, 1000);
  const correctAnswersNumber = variables.categoryAnswers.filter((value) => value === "correct").length;
}

export default endGame;
