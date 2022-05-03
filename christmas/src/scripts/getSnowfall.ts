import { cristmasApplicationData } from '../assets/data/applicationData';

function getSnowfall(): void {
  if (document.getElementById('main__gamePage')) {
    const snowflakes = document.getElementById('gameTree__snowflakes') as HTMLTemplateElement;
    const snowflake = '<div class="snowflake"></div>';
    const snowflakeNumber = 50;
    if (cristmasApplicationData.options.isSnow) {
      snowflakes.innerHTML = '';
      for (let i = 0; i < snowflakeNumber; i++) {
        snowflakes.insertAdjacentHTML('afterbegin', snowflake);
      }
    } else {
      snowflakes.innerHTML = '';
    }
  }
}

export default getSnowfall;
