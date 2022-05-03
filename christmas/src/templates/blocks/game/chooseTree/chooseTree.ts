import './chooseTree.css';
import { blockRendering } from '../../../../scripts/сontentRendering';

const numberOfTree = 6;
const gameChooseTreeContent = `
<div class="main__chooseTree">
  <h3>Выбрать ёлку</h3>
  <div class="main__treeContainer"></div>
</div>
`;

function setTreeOptions(): void {
  const treeContainer = document.querySelector('.main__treeContainer') as HTMLTemplateElement;

  for (let i = numberOfTree; i > 0; i--) {
    blockRendering(treeContainer, `<div class="treeContainer__tree" data-tree="${i}"></div>`);
  }
}

export { gameChooseTreeContent, setTreeOptions };
