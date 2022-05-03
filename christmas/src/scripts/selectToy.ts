import { showPopupMenu } from './show-hiddePopupMenu';
import { cristmasApplicationData } from '../assets/data/applicationData';

const values: { selectedCardsCount: number; maxSelectedCards: number } = {
  selectedCardsCount: cristmasApplicationData.selectedToyCards.length,
  maxSelectedCards: 20,
};

function selectToy(target: HTMLTemplateElement) {
  const index = cristmasApplicationData.selectedToyCards.indexOf(`${target.dataset.number}`);

  if (values.selectedCardsCount < values.maxSelectedCards) {
    target.classList.toggle('toyCard_selected');

    if (target.classList.contains('toyCard_selected')) {
      cristmasApplicationData.selectedToyCards.push(`${target.dataset.number}`);
    } else {
      cristmasApplicationData.selectedToyCards.splice(index, 1);
    }
  } else if (target.classList.contains('toyCard_selected')) {
    target.classList.remove('toyCard_selected');
    cristmasApplicationData.selectedToyCards.splice(index, 1);
  } else {
    showPopupMenu('Извините, все слоты заполнены. Не более 20 игрушек!');
    return;
  }

  values.selectedCardsCount = cristmasApplicationData.selectedToyCards.length;

  const toysCount = document.getElementById('main__toysCount') as HTMLTemplateElement;
  toysCount.innerHTML = `${values.selectedCardsCount}`;
}

export { selectToy, values };
