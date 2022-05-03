import { variables } from "../index";

function changeCategoryResults(event) {
  const img = document.querySelectorAll(".categoryResultsMenu__container > img");
  img.forEach((value) => {
    if (variables.categoryType === "Artists") {
      value.src = `assets/img/paintings/${Number(String(variables.categoryNumber) + value.dataset.imageNumber)}.jpg`;
    } else {
      value.src = `assets/img/paintings/${Number(String(12 + variables.categoryNumber) + value.dataset.imageNumber)}.jpg`;
    }
  });

  document.querySelector(".categoryResults__category > img").src = `assets/img/category/cat${variables.categoryNumber + 1}.jpg`;
  document.querySelector(".categoryMenu__catNumber").innerHTML = variables.categoryNumber < 9 ? "0" + (variables.categoryNumber + 1) : variables.categoryNumber + 1;
}

export default changeCategoryResults;
