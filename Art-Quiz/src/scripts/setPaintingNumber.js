import { variables } from "../index";

function setPaintingNumber(event) {
  let categoryNumber = variables.categoryType === "Artists" ? variables.categoryNumber : 12 + variables.categoryNumber;

  if (!!event.target.closest(".categoryMenu__category")) {
    variables.paintingNumber = Number(String(categoryNumber) + variables.questionNumber);
  } else if (event.target.parentNode.className === "categoryResultsMenu__container") {
    variables.paintingNumber = Number(categoryNumber + event.target.dataset.imageNumber);
  }
}
export default setPaintingNumber;
