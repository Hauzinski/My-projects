import gamePageContent from '../templates/pages/game/game';
import {
  gameChooseBackgroundContent,
  setBackgroundOptions,
} from '../templates/blocks/game/chooseBackground/chooseBackground';
import { gameChooseGarlandContent, setGarlandOptions } from '../templates/blocks/game/chooseGarland/chooseGarland';
import { gameChooseTreeContent, setTreeOptions } from '../templates/blocks/game/chooseTree/chooseTree';
import gameOptionsContent from '../templates/blocks/game/options/options';
import gameToysContent from '../templates/blocks/game/toys/toys';
import gameTreeContent from '../templates/blocks/game/tree/tree';

import { сontentRendering, blockRendering } from './сontentRendering';
import gameToyCardsRendering from './gameToyCardsRendering';

const main = document.getElementById('main') as HTMLTemplateElement;

function gamePageRendering(): void {
  сontentRendering(main, gamePageContent);
  const menu = document.getElementById('main__gameMenu') as HTMLTemplateElement;
  const tree = document.getElementById('main__gameTree') as HTMLTemplateElement;
  const toys = document.getElementById('main__gameToys') as HTMLTemplateElement;

  blockRendering(menu, gameChooseGarlandContent);
  setGarlandOptions();
  blockRendering(menu, gameChooseBackgroundContent);
  setBackgroundOptions();
  blockRendering(menu, gameChooseTreeContent);
  setTreeOptions();
  blockRendering(menu, gameOptionsContent);

  blockRendering(tree, gameTreeContent);

  blockRendering(toys, gameToysContent);
  gameToyCardsRendering();
}

export default gamePageRendering;
