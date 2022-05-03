import { cristmasApplicationData } from '../assets/data/applicationData';

function getOptions(): void {
  const audionOptions = document.getElementById('main__sound') as HTMLInputElement;
  const snowOptions = document.getElementById('main__snowflake') as HTMLInputElement;

  cristmasApplicationData.options.isMute = audionOptions.checked;
  cristmasApplicationData.options.isSnow = snowOptions.checked;

  if (document.getElementById('main__gamePage')) {
    const radios = document.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
    const garlandCheckbox = document.getElementById('main__garlandCheckbox') as HTMLInputElement;

    radios.forEach((value: HTMLInputElement) => {
      if (value.checked) {
        cristmasApplicationData.options.garlandColor = value.value;
      }
    });

    cristmasApplicationData.options.isGarland = garlandCheckbox.checked;
  }
}

export default getOptions;
