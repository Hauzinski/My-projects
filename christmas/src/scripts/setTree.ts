import { cristmasApplicationData } from '../assets/data/applicationData';

function setTree(target: HTMLTemplateElement): void {
  if (target.dataset.tree) {
    const tree = document.querySelector('.gameTree__tree') as HTMLImageElement;
    tree.src = `./src/assets/img/tree/${target.dataset.tree}.png`;
    cristmasApplicationData.options.treeNumber = target.dataset.tree;
  }
}

export default setTree;
