function сontentRendering(block, value) {
  block.innerHTML = "";
  block.insertAdjacentHTML("afterbegin", value);
}

export default сontentRendering;
