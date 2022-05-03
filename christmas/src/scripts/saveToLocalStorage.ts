import { cristmasApplicationData } from '../assets/data/applicationData';

function saveToLocalStorage() {
  window.localStorage.setItem('cristmas', JSON.stringify(cristmasApplicationData));
}

export default saveToLocalStorage;
