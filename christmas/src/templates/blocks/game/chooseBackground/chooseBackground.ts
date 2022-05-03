import './chooseBackground.css';
import { blockRendering } from '../../../../scripts/сontentRendering';

const numberOfBackgrounds = 10;
const gameChooseBackgroundContent = `
<div class="main__chooseBackground">
  <h3>Выбрать фон</h3>
  <div class="main__backgroundContainer"></div>
</div>
`;

function setBackgroundOptions(): void {
  const backgroundContainer = document.querySelector('.main__backgroundContainer') as HTMLTemplateElement;

  for (let i = numberOfBackgrounds; i > 0; i--) {
    blockRendering(backgroundContainer, `<div class="backgroundContainer__background" data-background="${i}"></div>`);
  }
}

export { gameChooseBackgroundContent, setBackgroundOptions };
