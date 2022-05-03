import './shape.css';

import '../../../../assets/svg/shapes/ball.svg';
import '../../../../assets/svg/shapes/bell.svg';
import '../../../../assets/svg/shapes/cone.svg';
import '../../../../assets/svg/shapes/figure.svg';
import '../../../../assets/svg/shapes/snowflake.svg';

const settingsShapeContent = `
<div class="main__shape">
  <p>Форма:</p>
  <input type="checkbox" id="main__shape_bell" class="main__shape_bell" data-filter="shape" name="колокольчик">
  <label for="main__shape_bell"></label>
  <input type="checkbox" id="main__shape_ball" class="main__shape_ball" data-filter="shape" name="шар">
  <label for="main__shape_ball"></label>
  <input type="checkbox" id="main__shape_cone" class="main__shape_cone" data-filter="shape" name="шишка">
  <label for="main__shape_cone"></label>
  <input type="checkbox" id="main__shape_snowflake" class="main__shape_snowflake" data-filter="shape" name="снежинка">
  <label for="main__shape_snowflake"></label>
  <input type="checkbox" id="main__shape_figure" class="main__shape_figure" data-filter="shape" name="фигурка">
  <label for="main__shape_figure"></label>
</div>
`;

export default settingsShapeContent;
