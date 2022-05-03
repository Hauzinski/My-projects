import './gameSettings.css';

import '../../../assets/svg/christmasBall.svg';

const gameSettingsPageContent = `
<div id="main__gameSettingsPage" class="main__gameSettingsPage">
  <div id="main__settings" class="main__settings">
    <button id="main__startGame" class="main__startGame">Начать игру</button>
  </div>
  <div id="main__settingsToys" class="main__settingsToys">
    <div id="main__settingsHeader" class="main__settingsHeader">
      <h2 class="main__title">Игрушки</h2>
      <p id="main__toysCount" class="main__toysCount">0</p>
    </div>
    <div id="main__cardContainer" class="main__cardContainer"></div>
  </div>
</div>
`;

export default gameSettingsPageContent;
