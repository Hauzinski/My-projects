import { cristmasApplicationData } from '../assets/data/applicationData';

function setFilters(): void {
  const toyCards = document.querySelectorAll('.toyCard') as NodeListOf<HTMLTemplateElement>;

  toyCards.forEach((value: HTMLElement) => {
    value.classList.remove('hide');
    if (!cristmasApplicationData.filteredToyNumbers.includes(`${value.dataset.number}`)) {
      value.classList.add('hide');
    }
  });
}

export default setFilters;
