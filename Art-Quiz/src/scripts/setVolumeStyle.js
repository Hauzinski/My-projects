function setVolumeStyle() {
  this.style.background = `linear-gradient(to right, var(--gold) 0%, var(--gold) ${this.value}%, var(--grey) ${this.value}%, var(--grey) 100%)`;
}

export default setVolumeStyle;
