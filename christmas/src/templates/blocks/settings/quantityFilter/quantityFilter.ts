import './quantityFilter.css';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';
import * as noUiSlider from 'nouislider';

import { blockRendering } from '../../../../scripts/сontentRendering';
import getMinMaxCount from '../../../../scripts/getMinMaxCount';

const settingsQuantityFilterContent = `
<div id="main__quantityFilter" class="main__quantityFilter">
  <p>Количество экземпляров:</p>
  <div class="main__quantityFilterContainer">
    <output id="main__quantityFilterContainer-min">1</output>
    <div id="main__quantityRangeSlider"></div>
    <output id="main__quantityFilterContainer-max">12</output>
  </div>  
</div>
`;

function settingsQuantityFilterRendering(): void {
  const settings = document.getElementById('main__settings') as HTMLTemplateElement;

  blockRendering(settings, settingsQuantityFilterContent);

  const slider = document.getElementById('main__quantityRangeSlider') as noUiSlider.target;
  const paddingMin = document.getElementById('main__quantityFilterContainer-min') as HTMLTemplateElement;
  const paddingMax = document.getElementById('main__quantityFilterContainer-max') as HTMLTemplateElement;

  noUiSlider.create(slider, {
    start: getMinMaxCount(),
    step: 1,
    connect: true,
    range: {
      min: [getMinMaxCount()[0]],
      max: [getMinMaxCount()[1]],
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

export default settingsQuantityFilterRendering;
