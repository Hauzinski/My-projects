import './size.css';

import '../../../../assets/svg/shapes/ball.svg';

const settingsSizeContent = `
<div class="main__size">
  <p>Размер:</p>
  <input type="checkbox" id="main__size_large" class="main__size_large" data-filter="size" name="большой">
  <label for="main__size_large"></label>
  <input type="checkbox" id="main__size_medium" class="main__size_medium" data-filter="size" name="средний">
  <label for="main__size_medium"></label>
  <input type="checkbox" id="main__size_small" class="main__size_small" data-filter="size" name="малый">
  <label for="main__size_small"></label>          
</div>
`;

export default settingsSizeContent;
