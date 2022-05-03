import { values } from './selectToy';
import loadOptions from './loadOptions';
import { playAudio } from './playAudio';
import { cristmasApplicationData } from '../assets/data/applicationData';
import { defaultTreeNumber, defaultBackgroundNumber, defaultGarlandColor } from '../assets/data/options';

function resetOptions(): void {
  cristmasApplicationData.selectedToyCards.length = 0;
  values.selectedCardsCount = cristmasApplicationData.selectedToyCards.length;
  cristmasApplicationData.options.isMute = false;
  cristmasApplicationData.options.isSnow = false;
  cristmasApplicationData.options.treeNumber = defaultTreeNumber;
  cristmasApplicationData.options.backgroundNumber = defaultBackgroundNumber;
  cristmasApplicationData.options.isGarland = false;
  cristmasApplicationData.options.garlandColor = defaultGarlandColor;

  if (document.getElementById('main__gameSettingsPage')) {
    const toyCards = document.querySelectorAll('.toyCard') as NodeListOf<HTMLTemplateElement>;
    const toysCount = document.getElementById('main__toysCount') as HTMLTemplateElement;

    toyCards.forEach((value: HTMLElement) => {
      if (value.classList.contains('toyCard_selected')) {
        value.classList.remove('toyCard_selected');
      }
    });

    toysCount.innerHTML = `${values.selectedCardsCount}`;
  }

  loadOptions();
  playAudio();

  setTimeout(() => {
    window.localStorage.clear();
  }, 0);
}

export default resetOptions;
