let categoryResultsContent = ``;

for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    categoryResultsContent += `
    <h2>Результаты</h2>
    <figure class="categoryResults__category">
      <img src="" alt="category" />
      <figcaption>
        <p class="categoryMenu__catNumber"></p>
        <p class="categoryMenu__catProgress"></p>
      </figcaption>
    </figure>
    <div class="categoryResultsMenu">
    `;
  }
  categoryResultsContent += `
  <div class="categoryResultsMenu__container">
    <img src="" alt="picture" data-image-number="${i - 1}" />
  </div>
  `;
  if (i === 10) {
    categoryResultsContent += `
    </div>
<input id="categoryResultsMenu__back" class="categoryResultsMenu__btnBack" type="button" value="Назад" /> 
    `;
  }
}

export default categoryResultsContent;
