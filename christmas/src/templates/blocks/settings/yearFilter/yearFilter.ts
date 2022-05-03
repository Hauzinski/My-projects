import './yearFilter.css';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';
import * as noUiSlider from 'nouislider';

import { blockRendering } from '../../../../scripts/сontentRendering';
import getMinMaxYear from '../../../../scripts/getMinMaxYear';

const settingsYearFilterContent = `
<div id="main__yearFilter" class="main__yearFilter">
  <p>Год покупки:</p>
  <div class="main__yearFilterContainer">
    <output id="main__yearFilterContainer-min">1</output>
    <div id="main__yearRangeSlider"></div>
    <output id="main__yearFilterContainer-max">12</output>
  </div>  
</div>
`;

function settingsYearFilterRendering(): void {
  const settings = document.getElementById('main__settings') as HTMLTemplateElement;

  blockRendering(settings, settingsYearFilterContent);

  const slider = document.getElementById('main__yearRangeSlider') as noUiSlider.target;
  const paddingMin = document.getElementById('main__yearFilterContainer-min') as HTMLTemplateElement;
  const paddingMax = document.getElementById('main__yearFilterContainer-max') as HTMLTemplateElement;

  noUiSlider.create(slider, {
    start: getMinMaxYear(),
    step: 10,
    connect: true,
    range: {
      min: [getMinMaxYear()[0]],
      max: [getMinMaxYear()[1]],
    },
    format: wNumb({
      decimals: 0,
    }),
  });

  (slider.noUiSlider as noUiSlider.API).on('update', (values, handle) => {
    if (handle) {
      paddingMax.innerHTML = `${values[handle]}`;
    } else {
      paddingMin.innerHTML = `${values[handle]}`;
    }
  });
}

export default settingsYearFilterRendering;
