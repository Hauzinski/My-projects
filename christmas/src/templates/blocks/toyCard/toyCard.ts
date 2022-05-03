import './toyCard.css';

import '../../../assets/svg/cardSelected.svg';

const toyCardContent = `
<div class="toyCard" data-number="">
  <h3 class="toyCard__title"></h3>
  <img class="toyCard__img" src="" alt="">
  <p class="toyCard__count">Количество: <span></span></p>
  <p class="toyCard__year">Год покупки: <span></span></p>
  <p class="toyCard__shape">Форма: <span></span></p>
  <p class="toyCard__color">Цвет: <span></span></p>
  <p class="toyCard__size">Размер: <span></span></p>
  <p class="toyCard__favorite">Любимая: <span></span></p>
  <div class="toyCard__logo_selected"></div>
</div>
`;

export default toyCardContent;
