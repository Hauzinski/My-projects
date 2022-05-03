import './options.css';

import '../../../../assets/svg/soundOn.svg';
import '../../../../assets/svg/soundOff.svg';
import '../../../../assets/svg/snowflake.svg';

const gameOptionsContent = `
<div class="main__options">
  <input type="checkbox" id="main__sound" class="main__sound" name="sound" />
  <label for="main__sound"></label>
  <input type="checkbox" id="main__snowflake" class="main__snowflake" name="snowflake" />
  <label for="main__snowflake"></label>
</div>
`;

export default gameOptionsContent;
