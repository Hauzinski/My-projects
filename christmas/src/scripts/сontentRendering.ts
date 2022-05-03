function сontentRendering(block: HTMLTemplateElement, value: string): void {
  block.innerHTML = '';
  block.insertAdjacentHTML('afterbegin', value);
}

function blockRendering(block: HTMLTemplateElement, value: string): void {
  block.insertAdjacentHTML('afterbegin', value);
}

export { сontentRendering, blockRendering };
