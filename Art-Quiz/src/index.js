import "../src/styles/CSS-Reset.css";
import "../src/styles/style.css";
import "../src/assets/svg/rs_school_js.svg";
import "../src/assets/svg/correct_answer.svg";
import "../src/assets/svg/wrong_answer.svg";
import "../src/assets/fonts/NotoSansMono.ttf";

import categoryResultsContent from "./pages/category-results";
import categoryContent from "./pages/category";
import mainContent from "./pages/main";
import optionsContent from "./pages/options";
import popupContent from "./pages/popup";

import сontentRendering from "./scripts/сontentRendering";
import setCategoryNumber from "./scripts/setCategoryNumber";
import { showPopupMenu, hiddePopupMenu } from "./scripts/show-hiddePopupMenu";
import changePopupMenu from "./scripts/changePopupMenu";
import changeCategoryResults from "./scripts/changeCategoryResults";
import startGame from "./scripts/startGame";
import checkAnswer from "./scripts/checkAnswer";
import nextQuestion from "./scripts/nextQuestion";
import { createApplicationData, saveApplicationData, loadApplicationData } from "./scripts/applicationData";
import setVolumeStyle from "./scripts/setVolumeStyle";
import playAudio from "./scripts/playAudio";

const mainContentBlock = document.getElementById("main");
const popupMenuContentBlock = document.getElementById("popup");

сontentRendering(mainContentBlock, mainContent);

let variables = {
  categoryType: null,
  categoryNumber: null,
  questionNumber: null,
  paintingNumber: null,
  categoryAnswers: null,
};

function getEventBody(event) {
  //* Кнопка "Художники" в главном меню
  if (event.target.id === "mainMenu__categoryArtists") {
    createApplicationData();
    сontentRendering(mainContentBlock, categoryContent);
    variables.categoryType = "Artists";
    loadApplicationData(event);

    //* Кнопка "Картины" в главном меню
  } else if (event.target.id === "mainMenu__categoryPainting") {
    createApplicationData();
    сontentRendering(mainContentBlock, categoryContent);
    variables.categoryType = "Painting";
    loadApplicationData(event);

    //* Кнопка "Опции" в главном меню
  } else if (event.target.id === "mainMenu__options") {
    createApplicationData();
    сontentRendering(mainContentBlock, optionsContent);
    loadApplicationData(event);
    document.getElementById("volume").addEventListener("input", setVolumeStyle);

    //* Кнопка "Назад" в меню "Опции"
  } else if (event.target.id === "options__back") {
    saveApplicationData(event);
    сontentRendering(mainContentBlock, mainContent);

    //* Изменение громкости
  } else if (event.target.id === "volume") {
    saveApplicationData(event);

    //* Кнопка "Назад" в меню "Категории"
  } else if (event.target.id === "categoryMenu__back") {
    сontentRendering(mainContentBlock, mainContent);

    //* Кнопка "Подробнее о категории" в меню "Категории"
  } else if (event.target.id === "categoryMenu__catProgress") {
    setCategoryNumber(event);
    сontentRendering(mainContentBlock, categoryResultsContent);
    changeCategoryResults(event); // Изменение содержимого меню "Подробнее о категории"
    loadApplicationData(event);

    //* Кнопка "Назад" в меню "Подробнее о категории"
  } else if (event.target.id === "categoryResultsMenu__back") {
    сontentRendering(mainContentBlock, categoryContent);
    loadApplicationData(event);

    //* Кнопка "О картине" в меню "Подробнее о категории"
  } else if (event.target.parentNode.className === "categoryResultsMenu__container") {
    сontentRendering(popupMenuContentBlock, popupContent);
    changePopupMenu(event); // Изменение содержимого меню
    showPopupMenu(popupMenuContentBlock);

    //* Кнопка "Закрыть" во всплывающем меню "О картине"
  } else if (event.target.id === "popupMenu__close") {
    hiddePopupMenu(popupMenuContentBlock);

    //* Начало игры
  } else if (!!event.target.closest(".categoryMenu__category")) {
    setCategoryNumber(event);
    startGame(event);

    //* Ответ на вопрос (Художники) и (Картины)
  } else if (event.target.className === "artistAnswerMenu__artistAnswer" || event.target.parentNode.className === "paintingAnswerMenu__paintingAnswer") {
    checkAnswer(event);
    showPopupMenu(popupMenuContentBlock);

    //* Следующий раунд
  } else if (event.target.id === "popupMenu__next") {
    hiddePopupMenu(popupMenuContentBlock);
    nextQuestion();

    //* Конец игры
  } else if (event.target.id === "popupRoundResult__end") {
    saveApplicationData(event);
    hiddePopupMenu(popupMenuContentBlock);
    сontentRendering(mainContentBlock, categoryContent);
    loadApplicationData(event);
  } else {
    return;
  }
}
document.body.addEventListener("click", getEventBody);
document.body.addEventListener("click", () => {
  playAudio("click");
});

export { variables };
