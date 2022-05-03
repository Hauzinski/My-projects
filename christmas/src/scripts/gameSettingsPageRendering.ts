import gameSettingsPageContent from '../templates/pages/gameSettings/gameSettings';
import settingsColorContent from '../templates/blocks/settings/color/color';
import settingsFavouriteContent from '../templates/blocks/settings/favourite/favourite';
import settingsQuantityFilterRendering from '../templates/blocks/settings/quantityFilter/quantityFilter';
import settingsResetContent from '../templates/blocks/settings/reset/reset';
import settingsSearchOptionsContent from '../templates/blocks/settings/search-options/search-options';
import settingsShapeContent from '../templates/blocks/settings/shape/shape';
import settingsSizeContent from '../templates/blocks/settings/size/size';
import settingsSortingContent from '../templates/blocks/settings/sorting/sorting';
import settingsYearFilterRendering from '../templates/blocks/settings/yearFilter/yearFilter';

import { сontentRendering, blockRendering } from './сontentRendering';

const main = document.getElementById('main') as HTMLTemplateElement;

function gameSettingsPageRendering(): void {
  сontentRendering(main, gameSettingsPageContent);
  const settings = document.getElementById('main__settings') as HTMLTemplateElement;
  blockRendering(settings, settingsResetContent);
  blockRendering(settings, settingsFavouriteContent);
  settingsYearFilterRendering();
  settingsQuantityFilterRendering();
  blockRendering(settings, settingsSizeContent);
  blockRendering(settings, settingsColorContent);
  blockRendering(settings, settingsShapeContent);
  blockRendering(settings, settingsSortingContent);
  blockRendering(settings, settingsSearchOptionsContent);
}

export default gameSettingsPageRendering;
