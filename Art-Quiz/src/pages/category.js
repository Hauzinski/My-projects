let categoryContent = ``;

for (let i = 1; i <= 12; i++) {
  if (i === 1) {
    categoryContent += `
    <h2>Категории</h2>
    <div class="categoryMenu">
    `;
  }
  categoryContent += `
  <figure class="categoryMenu__category" data-category-number="${i - 1}">
    <img src="assets/img/category/cat${i}.jpg" alt="category">
    <figcaption>
      <p class="categoryMenu__catNumber">${i < 10 ? "0" + i : i}</p>
      <p id="categoryMenu__catProgress" class="categoryMenu__catProgress">00/10</p>
    </figcaption>
  </figure> 
  `;
  if (i === 12) {
    categoryContent += `
    </div>
    <input id="categoryMenu__back" class="categoryMenu__btnBack" type="button" value="Назад">    
    `;
  }
}

export default categoryContent;
