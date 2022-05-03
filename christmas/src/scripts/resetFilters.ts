import * as noUiSlider from 'nouislider';
import { cristmasApplicationData } from '../assets/data/applicationData';

function resetFilters(): void {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  const quantityFilterSlider = document.getElementById('main__quantityRangeSlider') as noUiSlider.target;
  const yearFilterSlider = document.getElementById('main__yearRangeSlider') as noUiSlider.target;

  checkboxes.forEach((value: HTMLInputElement) => {
    if (value.id !== 'main__sound' && value.id !== 'main__snowflake') {
      value.checked = false;
    }
  });

  (quantityFilterSlider.noUiSlider as noUiSlider.API).reset();
  (yearFilterSlider.noUiSlider as noUiSlider.API).reset();

  cristmasApplicationData.filters.count = (quantityFilterSlider.noUiSlider as noUiSlider.API).get() as Array<string>;
  cristmasApplicationData.filters.year = (yearFilterSlider.noUiSlider as noUiSlider.API).get() as Array<string>;
  cristmasApplicationData.filters.shape = [];
  cristmasApplicationData.filters.color = [];
  cristmasApplicationData.filters.size = [];
  cristmasApplicationData.filters.favorite = false;
}

export default resetFilters;
