import * as noUiSlider from 'nouislider';
import { cristmasApplicationData } from '../assets/data/applicationData';

function getFilters(): void {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  const quantityFilterSlider = document.getElementById('main__quantityRangeSlider') as noUiSlider.target;
  const yearFilterSlider = document.getElementById('main__yearRangeSlider') as noUiSlider.target;

  cristmasApplicationData.filters.count = [];
  cristmasApplicationData.filters.year = [];
  cristmasApplicationData.filters.shape = [];
  cristmasApplicationData.filters.color = [];
  cristmasApplicationData.filters.size = [];
  cristmasApplicationData.filters.favorite = false;

  checkboxes.forEach((value: HTMLInputElement) => {
    if (value.id !== 'main__sound' && value.id !== 'main__snowflake' && value.checked) {
      if (value.dataset.filter === 'color') {
        cristmasApplicationData.filters.color.push(value.name);
      } else if (value.dataset.filter === 'favourite') {
        cristmasApplicationData.filters.favorite = true;
      } else if (value.dataset.filter === 'shape') {
        cristmasApplicationData.filters.shape.push(value.name);
      } else if (value.dataset.filter === 'size') {
        cristmasApplicationData.filters.size.push(value.name);
      }
    }
  });

  cristmasApplicationData.filters.count = (quantityFilterSlider.noUiSlider as noUiSlider.API).get() as Array<string>;
  cristmasApplicationData.filters.year = (yearFilterSlider.noUiSlider as noUiSlider.API).get() as Array<string>;
}

export default getFilters;
