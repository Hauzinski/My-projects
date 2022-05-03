import { cristmasApplicationData } from '../assets/data/applicationData';

function setStyleToSelectedToys(): void {
  const toyCards = document.querySelectorAll('.toyCard') as NodeListOf<HTMLTemplateElement>;
  const toysCount = document.getElementById('main__toysCount') as HTMLTemplateElement;

  toyCards.forEach((value: HTMLElement) => {
    if (cristmasApplicationData.selectedToyCards.includes(`${value.dataset.number}`)) {
      value.classList.add('toyCard_selected');
    }
  });

  toysCount.innerHTML = `${cristmasApplicationData.selectedToyCards.length}`;
}

export default setStyleToSelectedToys;
