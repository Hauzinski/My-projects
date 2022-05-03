let questionPaintingContent = ``;

for (let i = 1; i <= 4; i++) {
  if (i === 1) {
    questionPaintingContent += `
    <p class="timer hidden">30</p>
    <p class="questionPainting">Какую из этих картин написал <span class="artistName"></span>?</p>
    <div class="paintingAnswerMenu">   
    `;
  }
  questionPaintingContent += `
  <figure class="paintingAnswerMenu__paintingAnswer">
    <img src="" alt="painting" data-image-number="" />
  </figure>    
  `;

  if (i === 4) {
    questionPaintingContent += `
    </div>
    <p class="answerProgress"><span id="questionNumber"></span>/10</p> 
    `;
  }
}

export default questionPaintingContent;
