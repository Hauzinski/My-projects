import getRandomNumber from "../scripts/getRandomNumber";

const mainContent = `
      <h1>Art quiz</h1>
      <div class="mainMenu">
        <input id="mainMenu__categoryArtists" class="mainMenu__btnArtists" type="button" value="Художники">
        <input id="mainMenu__categoryPainting" class="mainMenu__btnPaitings" type="button" value="Картины">
        <input id="mainMenu__options" class="mainMenu__btnOptions" type="button" value="Опции">
      </div>
      <img class="AppLogo" src="assets/img/paintings/${getRandomNumber(0, 240)}.jpg" alt="Art Quiz logo">
`;

export default mainContent;
