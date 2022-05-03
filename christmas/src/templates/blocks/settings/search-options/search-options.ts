import './search-options.css';

import '../../../../assets/svg/soundOn.svg';
import '../../../../assets/svg/soundOff.svg';
import '../../../../assets/svg/snowflake.svg';
import '../../../../assets/svg/search.svg';

const settingsSearchOptionsContent = `
<div class="main__options">
  <input type="checkbox" id="main__sound" class="main__sound" name="sound">
  <label for="main__sound"></label>
  <input type="checkbox" id="main__snowflake" class="main__snowflake" name="snowflake">
  <label for="main__snowflake"></label>
  <input type="search" id="search" class="main__search"
  placeholder="Введите название игрушки" autocomplete="off" autofocus />
</div>
`;

export default settingsSearchOptionsContent;
