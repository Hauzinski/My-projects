import { cristmasApplicationData } from '../assets/data/applicationData';

function setBackground(target: HTMLTemplateElement): void {
  if (target.dataset.background) {
    const background = document.querySelector('.main__gameTree') as HTMLTemplateElement;
    background.style.backgroundImage = `url('./src/assets/img/backgrounds/${target.dataset.background}.jpg')`;
    cristmasApplicationData.options.backgroundNumber = target.dataset.background;
  }
}

export default setBackground;
