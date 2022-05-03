import './color.css';

const settingsColorContent = `
<div class="main__color">
  <p>Цвет:</p>
  <input type="checkbox" id="main__color_white" class="main__color_white" data-filter="color" name="белый">
  <label for="main__color_white"></label>
  <input type="checkbox" id="main__color_yellow" class="main__color_yellow" data-filter="color" name="желтый">
  <label for="main__color_yellow"></label>
  <input type="checkbox" id="main__color_red" class="main__color_red" data-filter="color" name="красный">
  <label for="main__color_red"></label>
  <input type="checkbox" id="main__color_blue" class="main__color_blue" data-filter="color" name="синий">
  <label for="main__color_blue"></label>
  <input type="checkbox" id="main__color_green" class="main__color_green" data-filter="color" name="зелёный">
  <label for="main__color_green"></label>
</div>
`;

export default settingsColorContent;
