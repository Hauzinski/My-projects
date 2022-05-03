import { variables } from "../index";

function setCategoryNumber(event) {
  variables.categoryNumber = +event.target.closest(".categoryMenu__category").dataset.categoryNumber;
}

export default setCategoryNumber;
