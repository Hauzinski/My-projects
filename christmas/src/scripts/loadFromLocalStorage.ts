import { cristmasApplicationData } from '../assets/data/applicationData';

function loadFromLocalStorage() {
  if (window.localStorage.getItem('cristmas')) {
    const localStorage = JSON.parse(`${window.localStorage.getItem('cristmas')}`);

    // Checking compatibility of application data and local storage data
    Object.keys(cristmasApplicationData).forEach((value) => {
      if (!(value in localStorage)) {
        window.localStorage.clear();
      }
    });

    cristmasApplicationData.filters = localStorage.filters;
    cristmasApplicationData.filteredToyNumbers = localStorage.filteredToyNumbers;
    cristmasApplicationData.selectedToyCards = localStorage.selectedToyCards;
    cristmasApplicationData.options = localStorage.options;
  }
}

export default loadFromLocalStorage;
