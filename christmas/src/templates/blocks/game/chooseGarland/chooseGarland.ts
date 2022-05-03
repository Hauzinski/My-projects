import './chooseGarland.css';
import { blockRendering } from '../../../../scripts/сontentRendering';

const numberOfRadioButtons = 5;
const RadioButtonValues: Array<string> = [
  'garlandColor_multicolor',
  'garlandColor_red',
  'garlandColor_blue',
  'garlandColor_yellow',
  'garlandColor_green',
];
const gameChooseGarlandContent = `
<div id="main__chooseGarland" class="main__chooseGarland">
  <h3>Выберите фон</h3>
  <div class="main__garlandContainer"></div>
</div>
`;
const garlandSwitchContent = `
<div class="onoffswitch">
  <input type="checkbox" id="main__garlandCheckbox" class="main__garlandCheckbox" name="onoffswitch" />
  <label class="onoffswitch-label" for="main__garlandCheckbox">
    <div class="onoffswitch-inner"></div>
    <div class="onoffswitch-switch"></div>
  </label>
</div>
`;

function setGarlandOptions(): void {
  const garlandContainer = document.querySelector('.main__garlandContainer') as HTMLTemplateElement;

  blockRendering(garlandContainer, garlandSwitchContent);

  for (let i = numberOfRadioButtons; i > 0; i--) {
    const radio = `
    <label for="${RadioButtonValues[i - 1]}">
      <input type="radio" name="garlandColor" class="${RadioButtonValues[i - 1]}" id="${RadioButtonValues[i - 1]}" 
      value="${RadioButtonValues[i - 1]}" />
      <div class="dot"></div>
    </label>
    `;

    blockRendering(garlandContainer, radio);
  }

  (document.getElementById('garlandColor_multicolor') as HTMLInputElement).checked = true;
}

export { gameChooseGarlandContent, setGarlandOptions };
