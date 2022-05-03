import gameToyCardContent from '../templates/blocks/game/gameToyCard/gameToyCard';
import { data, ToyData } from '../assets/data/data';
import { cristmasApplicationData } from '../assets/data/applicationData';

import { blockRendering } from './сontentRendering';
import { sortByMinPosition } from './sortByPosition';

function gameToyCardsRendering(): void {
  const toysContainer = document.getElementById('main__toysContainer') as HTMLTemplateElement;

  if (cristmasApplicationData.selectedToyCards.length) {
    cristmasApplicationData.selectedToyCards.forEach((value: string, index: number) => {
      const toy: ToyData | undefined = data.find((item) => item.num === value);
      if (typeof toy !== 'undefined') {
        blockRendering(toysContainer, gameToyCardContent);
        (document.querySelector('.gameToys__toy') as HTMLTemplateElement).dataset.number = `${index + 1}`;
        (document.querySelector('.gameToys__img') as HTMLImageElement).src = `./src/assets/img/toys/${toy.num}.png`;
        (document.querySelector('.gameToys__img') as HTMLImageElement).alt = toy.name;
        (document.querySelector('.gameToys__count') as HTMLTemplateElement).innerHTML = toy.count;
      }
    });
  } else {
    const maxToys = 20;

    sortByMinPosition(data).forEach((value: ToyData, index: number) => {
      if (index >= maxToys) {
        return;
      }
      blockRendering(toysContainer, gameToyCardContent);
      (document.querySelector('.gameToys__toy') as HTMLTemplateElement).dataset.number = `${index + 1}`;
      (document.querySelector('.gameToys__img') as HTMLImageElement).src = `./src/assets/img/toys/${value.num}.png`;
      (document.querySelector('.gameToys__img') as HTMLImageElement).alt = value.name;
      (document.querySelector('.gameToys__count') as HTMLTemplateElement).innerHTML = value.count;
    });
  }
}

export default gameToyCardsRendering;
