import database from "../assets/js/database";
import { variables } from "../index";

function getCorrectAnswer() {
  if (variables.categoryType === "Artists") {
    return database[variables.paintingNumber].author;
  } else {
    return database[variables.paintingNumber];
  }
}

export default getCorrectAnswer;
