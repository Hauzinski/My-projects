import './assets/styles/CSS-Reset.css';
import './assets/styles/commonStyles.css';
import { data } from './assets/data/data';

import headerContent from './templates/blocks/header/header';
import mainPageContent from './templates/pages/main/main';
import footerContent from './templates/blocks/footer/footer';
import popupMenuContent from './templates/blocks/popupMenu/popupMenu';

import { сontentRendering } from './scripts/сontentRendering';
import gamePageRendering from './scripts/gamePageRendering';
import gameSettingsPageRendering from './scripts/gameSettingsPageRendering';
import getFilteredToyNumbers from './scripts/getFilteredToyNumbers';
import getFilters from './scripts/getFilters';
import getGarland from './scripts/getGarland';
import getOptions from './scripts/getOptions';
import getSnowfall from './scripts/getSnowfall';
import loadFilters from './scripts/loadFilters';
import loadFromLocalStorage from './scripts/loadFromLocalStorage';
import loadOptions from './scripts/loadOptions';
import { audio, playAudio } from './scripts/playAudio';
import resetFilters from './scripts/resetFilters';
import resetOptions from './scripts/resetOptions';
import saveToLocalStorage from './scripts/saveToLocalStorage';
import { selectToy } from './scripts/selectToy';
import setBackground from './scripts/setBackground';
import setFilters from './scripts/setFilters';
import setStyleToSelectedToys from './scripts/setStyleToSelectedToys';
import setTree from './scripts/setTree';
import { hiddePopupMenu } from './scripts/show-hiddePopupMenu';
import { sortByMinName, sortByMaxName } from './scripts/sortByName';
import { sortByMinYear, sortByMaxYear } from './scripts/sortByYear';
import toyCardsRendering from './scripts/toyCardsRendering';

const header = document.getElementById('header') as HTMLTemplateElement;
const main = document.getElementById('main') as HTMLTemplateElement;
const footer = document.getElementById('footer') as HTMLTemplateElement;
const popupMenu = document.getElementById('popupMenu') as HTMLTemplateElement;

сontentRendering(header, headerContent);
сontentRendering(main, mainPageContent);
сontentRendering(footer, footerContent);
сontentRendering(popupMenu, popupMenuContent);

function getEventClickBody(event: Event): void {
  const target = event.target as HTMLTemplateElement;

  if (target.id === 'main__goToSettings' || target.closest('#header__goToSettings')) {
    gameSettingsPageRendering();
    toyCardsRendering(sortByMinName(data));
    loadFromLocalStorage();
    loadFilters();
    getFilteredToyNumbers();
    setFilters();
    loadOptions();
    setStyleToSelectedToys();
  } else if (target.id === 'main__startGame' || target.closest('#header__startGame')) {
    gamePageRendering();
    loadFromLocalStorage();
    loadOptions();
    getSnowfall();
    getGarland();
  } else if (target.closest('#header__logo')) {
    сontentRendering(main, mainPageContent);
  } else if (target.id === 'main__resetOptions') {
    resetOptions();
    saveToLocalStorage();
    getSnowfall();
    getGarland();
  } else if (target.id === 'main__resetFilters') {
    resetFilters();
    getFilteredToyNumbers();
    setFilters();
    saveToLocalStorage();
  } else if (target.classList.contains('toyCard')) {
    selectToy(target);
    saveToLocalStorage();
  } else if (target.id === 'popupMenu__button') {
    hiddePopupMenu();
  } else if (target.closest('#main__quantityFilter') || target.closest('#main__yearFilter')) {
    getFilters();
    getFilteredToyNumbers();
    setFilters();
    saveToLocalStorage();
  } else if (target.classList.contains('backgroundContainer__background')) {
    setBackground(target);
    saveToLocalStorage();
  } else if (target.classList.contains('treeContainer__tree')) {
    setTree(target);
    saveToLocalStorage();
  }
}

function getEventChangeBody(event: Event): void {
  if ((event.target as HTMLTemplateElement).closest('#main__settings')) {
    const target = event.target as HTMLSelectElement;

    if (target.id === 'main__sortSelect') {
      if (target.value === 'sortNameMin') {
        toyCardsRendering(sortByMinName(data));
      } else if (target.value === 'sortNameMax') {
        toyCardsRendering(sortByMaxName(data));
      } else if (target.value === 'sortYearMin') {
        toyCardsRendering(sortByMinYear(data));
      } else if (target.value === 'sortYearMax') {
        toyCardsRendering(sortByMaxYear(data));
      }
      setStyleToSelectedToys();
    }
    getFilters();
    getFilteredToyNumbers();
    getOptions();
    setFilters();
    saveToLocalStorage();
  } else if ((event.target as HTMLInputElement).closest('#main__gameMenu')) {
    getOptions();
    saveToLocalStorage();
  }

  if ((event.target as HTMLInputElement).id === 'main__sound') {
    playAudio();
  }

  if ((event.target as HTMLInputElement).id === 'main__snowflake') {
    getSnowfall();
  }

  if ((event.target as HTMLInputElement).closest('.main__garlandContainer')) {
    getGarland();
  }
}

function getEventInputBody(event: Event): void {
  const target = event.target as HTMLInputElement;
  if (target.id === 'search') {
    getFilters();
    getFilteredToyNumbers();
    getOptions();
    setFilters();
    saveToLocalStorage();
  }
}

function startAudio(): void {
  playAudio();
  document.body.removeEventListener('click', startAudio);
}

document.body.addEventListener('change', getEventChangeBody);
document.body.addEventListener('click', getEventClickBody);
document.body.addEventListener('input', getEventInputBody);
document.body.addEventListener('click', startAudio);
audio.addEventListener('timeupdate', () => {
  const buffer = 0.4;
  if (audio.currentTime > audio.duration - buffer) {
    playAudio();
  }
});

loadFromLocalStorage();
