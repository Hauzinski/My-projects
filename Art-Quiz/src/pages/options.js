const optionsContent = `
<h2>Настройки</h2>
<fieldset>
  <legend>Настройки звука</legend>
  <label><input id="audioCheck" type="checkbox" name="audio" />Включить звук</label>
  <input id="volume" class="volume" type="range" value="50" min="0" max="100" step="1" />
</fieldset>
<fieldset>
  <legend>Настройки таймера</legend>
  <label><input id="timerCheck" type="checkbox" name="audio" />Включить таймер</label>        
  <h6>Время таймера</h6>
  <div class="timerOptions">          
    <button type="button" onclick="this.nextElementSibling.stepDown()">–</button>
    <input id="timer" class="timerOptions-number" type="number" min="5" max="30" value="30" step="5" readonly />
    <button type="button" onclick="this.previousElementSibling.stepUp()">+</button>
  </div>
</fieldset>
<input id="options__back" class="options__btnBack" type="button" value="Назад">
`;

export default optionsContent;
