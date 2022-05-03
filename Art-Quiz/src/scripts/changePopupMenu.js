import database from "../assets/js/database";
import { variables } from "../index";
import setPaintingNumber from "./setPaintingNumber";

function changePopupMenu(event) {
  if (event.target.parentNode.className === "categoryResultsMenu__container") {
    setPaintingNumber(event);
    document.getElementById("popupMenu__next").classList.add("display-none");
    document.getElementById("popupMenu__close").classList.remove("display-none");
    document.getElementById("popupMenu__answerLogo").classList.add("display-none");
  } else if (event.target.className === "artistAnswerMenu__artistAnswer" || event.target.parentNode.className === "paintingAnswerMenu__paintingAnswer") {
    document.getElementById("popupMenu__next").classList.remove("display-none");
    document.getElementById("popupMenu__close").classList.add("display-none");
    document.getElementById("popupMenu__answerLogo").classList.remove("display-none");
  }
  document.querySelector(".popupMenu > img").src = `assets/img/paintings/${database[variables.paintingNumber].imageNum}.jpg`;
  document.querySelector(".popupMenu__artist").innerHTML = database[variables.paintingNumber].author;
  document.querySelector(".popupMenu__painting").innerHTML = database[variables.paintingNumber].name;
  document.querySelector(".popupMenu__year").innerHTML = database[variables.paintingNumber].year;
}

export default changePopupMenu;
