import database from "../assets/js/database";
import getRandomNumber from "./getRandomNumber";
import getCorrectAnswer from "./getCorrectAnswer";
import { variables } from "../index";

function setAnswers() {
  const answerPosition = getRandomNumber(0, 3);
  const correctAnswer = getCorrectAnswer();
  let answers = [];

  if (variables.categoryType === "Artists") {
    while (answers.length < 3) {
      let variant = database[getRandomNumber(0, 240)].author;
      if (!answers.includes(variant) && variant !== correctAnswer) {
        answers.push(variant);
      }
    }
    answers.splice(answerPosition, 0, correctAnswer);

    const bottons = document.querySelectorAll(".artistAnswerMenu__artistAnswer");
    bottons.forEach((value, index) => {
      value.value = answers[index];
    });
    // console.log(correctAnswer); //! Отладка. Вывод правильного ответа!
  } else {
    while (answers.length < 3) {
      let variant = database[getRandomNumber(0, 240)];
      if (!answers.includes(variant.imageNum) && variant.imageNum !== correctAnswer.imageNum && correctAnswer.author !== variant.author) {
        answers.push(variant.imageNum);
      }
    }
    answers.splice(answerPosition, 0, correctAnswer.imageNum);

    const bottons = document.querySelectorAll(".paintingAnswerMenu__paintingAnswer > img");
    bottons.forEach((value, index) => {
      value.dataset.imageNumber = answers[index];
      value.src = `assets/img/paintings/${answers[index]}.jpg`;
    });
    // console.log(answerPosition + 1); //! Отладка. Вывод правильного ответа!
  }
}

export default setAnswers;
