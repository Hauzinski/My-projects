import * as noUiSlider from 'nouislider';
import { cristmasApplicationData } from '../assets/data/applicationData';

function loadFilters(): void {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  const quantityFilterSlider = document.getElementById('main__quantityRangeSlider') as noUiSlider.target;
  const yearFilterSlider = document.getElementById('main__yearRangeSlider') as noUiSlider.target;

  checkboxes.forEach((value: HTMLInputElement) => {
    if (value.id !== 'main__sound' && value.id !== 'main__snowflake') {
      if (value.dataset.filter === 'color') {
        if (cristmasApplicationData.filters.color.includes(`${value.name}`)) {
          value.checked = true;
        }
      } else if (value.dataset.filter === 'favourite') {
        if (cristmasApplicationData.filters.favorite) {
          value.checked = true;
        }
      } else if (value.dataset.filter === 'shape') {
        if (cristmasApplicationData.filters.shape.includes(`${value.name}`)) {
          value.checked = true;
        }
      } else if (value.dataset.filter === 'size') {
        if (cristmasApplicationData.filters.size.includes(`${value.name}`)) {
          value.checked = true;
        }
      }
    }
  });

  (quantityFilterSlider.noUiSlider as noUiSlider.API).set(cristmasApplicationData.filters.count);
  (yearFilterSlider.noUiSlider as noUiSlider.API).set(cristmasApplicationData.filters.year);
}

export default loadFilters;
