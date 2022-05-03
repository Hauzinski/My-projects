import { cristmasApplicationData } from '../assets/data/applicationData';

function loadOptions(): void {
  const audionOptions = document.getElementById('main__sound') as HTMLInputElement;
  const snowOptions = document.getElementById('main__snowflake') as HTMLInputElement;

  audionOptions.checked = cristmasApplicationData.options.isMute;
  snowOptions.checked = cristmasApplicationData.options.isSnow;

  if (document.getElementById('main__gamePage')) {
    const radios = document.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
    const garlandCheckbox = document.getElementById('main__garlandCheckbox') as HTMLInputElement;
    const background = document.querySelector('.main__gameTree') as HTMLTemplateElement;
    const tree = document.querySelector('.gameTree__tree') as HTMLImageElement;

    radios.forEach((value: HTMLInputElement) => {
      if (cristmasApplicationData.options.garlandColor === value.value) {
        value.checked = true;
      }
    });

    garlandCheckbox.checked = cristmasApplicationData.options.isGarland;
    const backgroundUrl = `url('./src/assets/img/backgrounds/${cristmasApplicationData.options.backgroundNumber}.jpg')`;
    background.style.backgroundImage = backgroundUrl;
    tree.src = `./src/assets/img/tree/${cristmasApplicationData.options.treeNumber}.png`;
  }
}

export default loadOptions;
