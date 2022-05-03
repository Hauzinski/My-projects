import { data } from '../assets/data/data';
import { cristmasApplicationData } from '../assets/data/applicationData';
import { showPopupMenu } from './show-hiddePopupMenu';

function getFilteredToyNumbers(): void {
  let correct: boolean;
  cristmasApplicationData.filteredToyNumbers.length = 0;

  data.forEach((value) => {
    const toyName = (document.getElementById('search') as HTMLInputElement).value;
    correct = true;

    if (!cristmasApplicationData.filters.shape.includes(value.shape) && cristmasApplicationData.filters.shape.length) {
      correct = false;
    }

    if (!cristmasApplicationData.filters.color.includes(value.color) && cristmasApplicationData.filters.color.length) {
      correct = false;
    }

    if (!cristmasApplicationData.filters.size.includes(value.size) && cristmasApplicationData.filters.size.length) {
      correct = false;
    }

    if (!value.favorite && cristmasApplicationData.filters.favorite) {
      correct = false;
    }

    if (
      !(
        +value.count >= +cristmasApplicationData.filters.count[0] &&
        +value.count <= +cristmasApplicationData.filters.count[1]
      )
    ) {
      correct = false;
    }

    if (
      !(
        +value.year >= +cristmasApplicationData.filters.year[0] &&
        +value.year <= +cristmasApplicationData.filters.year[1]
      )
    ) {
      correct = false;
    }

    if (toyName && !value.name.toLocaleLowerCase().includes(toyName.toLocaleLowerCase())) {
      correct = false;
    }

    if (correct) {
      cristmasApplicationData.filteredToyNumbers.push(value.num);
    }
  });

  if (!cristmasApplicationData.filteredToyNumbers.length) {
    showPopupMenu('Извините, совпадений не обнаружено.');
  }
}

export default getFilteredToyNumbers;
