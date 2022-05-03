import toyCardContent from '../templates/blocks/toyCard/toyCard';

import { ToyData } from '../assets/data/data';
import { blockRendering } from './сontentRendering';

function toyCardsRendering(data: Array<ToyData>): void {
  const cardContainer = document.getElementById('main__cardContainer') as HTMLTemplateElement;
  cardContainer.innerHTML = '';

  data.reverse().forEach((value: ToyData) => {
    blockRendering(cardContainer, toyCardContent);
    (document.querySelector('.toyCard') as HTMLTemplateElement).dataset.number = value.num;
    (document.querySelector('.toyCard__img') as HTMLImageElement).src = `./src/assets/img/toys/${value.num}.png`;
    (document.querySelector('.toyCard__img') as HTMLImageElement).alt = value.name;
    (document.querySelector('.toyCard__title') as HTMLTemplateElement).innerHTML = value.name;
    (document.querySelector('.toyCard__count > span') as HTMLTemplateElement).innerHTML = value.count;
    (document.querySelector('.toyCard__year > span') as HTMLTemplateElement).innerHTML = value.year;
    (document.querySelector('.toyCard__shape > span') as HTMLTemplateElement).innerHTML = value.shape;
    (document.querySelector('.toyCard__color > span') as HTMLTemplateElement).innerHTML = value.color;
    (document.querySelector('.toyCard__size > span') as HTMLTemplateElement).innerHTML = value.size;
    (document.querySelector('.toyCard__favorite > span') as HTMLTemplateElement).innerHTML = value.favorite
      ? 'да'
      : 'нет';
  });
}

export default toyCardsRendering;
