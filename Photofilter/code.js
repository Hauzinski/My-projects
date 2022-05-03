const btnReset = document.querySelector(".buttons__reset");
const btnNextPicture = document.querySelector(".buttons__nextPicture");
const btnSavePicture = document.querySelector(".buttons__savePicture");
const btnLoadPicture = document.querySelector(".buttons__loadPicture");
const elementNormal = document.querySelector(".presets__element-normal");
const element1972 = document.querySelector(".presets__element-1972");
const elementBrannan = document.querySelector(".presets__element-brannan");
const elementBrooklyn = document.querySelector(".presets__element-brooklyn");
const elementInkwell = document.querySelector(".presets__element-inkwell");

const presetsImg = document.querySelectorAll(".presets__element__img");

const inputBlur = document.querySelector("input[name='blur']");
const inputBrightness = document.querySelector("input[name='brightness']");
const inputContrast = document.querySelector("input[name='contrast']");
const inputGrayscale = document.querySelector("input[name='grayscale']");
const inputHueRotate = document.querySelector("input[name='hue-rotate']");
const inputInvert = document.querySelector("input[name='invert']");
const inputOpacity = document.querySelector("input[name='opacity']");
const inputSaturate = document.querySelector("input[name='saturate']");
const inputSepia = document.querySelector("input[name='sepia']");

let pictureNumber = 1;

function nextPicture() {
  if (pictureNumber === 12) {
    pictureNumber = 0;
  }
  pictureNumber += 1;
  document.querySelector(".containerPicture__img").setAttribute("src", `img/picture-${pictureNumber}.jpg`);

  for (let value of presetsImg) {
    value.setAttribute("src", `img/picture-${pictureNumber}.jpg`);
  }
}

function handelUpdate() {
  const sizing = this.dataset.sizing;
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
  document.querySelector(`output[name=${this.name}]`).innerHTML = this.value;
}

function filterReset() {
  document.documentElement.removeAttribute("style");
  inputBlur.value = 0;
  document.querySelector("output[name='blur']").innerHTML = inputBlur.value;

  inputBrightness.value = 100;
  document.querySelector("output[name='brightness']").innerHTML = inputBrightness.value;

  inputContrast.value = 100;
  document.querySelector("output[name='contrast']").innerHTML = inputContrast.value;

  inputGrayscale.value = 0;
  document.querySelector("output[name='grayscale']").innerHTML = inputGrayscale.value;

  inputHueRotate.value = 0;
  document.querySelector("output[name='hue-rotate']").innerHTML = inputHueRotate.value;

  inputInvert.value = 0;
  document.querySelector("output[name='invert']").innerHTML = inputInvert.value;

  inputOpacity.value = 100;
  document.querySelector("output[name='opacity']").innerHTML = inputOpacity.value;

  inputSaturate.value = 100;
  document.querySelector("output[name='saturate']").innerHTML = inputSaturate.value;

  inputSepia.value = 0;
  document.querySelector("output[name='sepia']").innerHTML = inputSepia.value;
}

inputBlur.addEventListener("change", handelUpdate);
inputBlur.addEventListener("mousemove", handelUpdate);

inputBrightness.addEventListener("change", handelUpdate);
inputBrightness.addEventListener("mousemove", handelUpdate);

inputContrast.addEventListener("change", handelUpdate);
inputContrast.addEventListener("mousemove", handelUpdate);

inputGrayscale.addEventListener("change", handelUpdate);
inputGrayscale.addEventListener("mousemove", handelUpdate);

inputHueRotate.addEventListener("change", handelUpdate);
inputHueRotate.addEventListener("mousemove", handelUpdate);

inputInvert.addEventListener("change", handelUpdate);
inputInvert.addEventListener("mousemove", handelUpdate);

inputOpacity.addEventListener("change", handelUpdate);
inputOpacity.addEventListener("mousemove", handelUpdate);

inputSaturate.addEventListener("change", handelUpdate);
inputSaturate.addEventListener("mousemove", handelUpdate);

inputSepia.addEventListener("change", handelUpdate);
inputSepia.addEventListener("mousemove", handelUpdate);

btnNextPicture.addEventListener("click", nextPicture);
btnReset.addEventListener("click", filterReset);
btnSavePicture.addEventListener("click", () => {
  alert("Coming soon... Sorry!");
});
btnLoadPicture.addEventListener("click", () => {
  alert("Coming soon... Sorry!");
});

elementNormal.addEventListener("click", filterReset);

element1972.addEventListener("click", () => {
  document.documentElement.removeAttribute("style");

  inputBlur.value = 0;
  document.documentElement.style.setProperty("--blur", `${inputBlur.value}px`);
  document.querySelector("output[name='blur']").innerHTML = inputBlur.value;

  inputBrightness.value = 110;
  document.documentElement.style.setProperty("--brightness", `${inputBrightness.value}%`);
  document.querySelector("output[name='brightness']").innerHTML = inputBrightness.value;

  inputContrast.value = 110;
  document.documentElement.style.setProperty("--contrast", `${inputContrast.value}%`);
  document.querySelector("output[name='contrast']").innerHTML = inputContrast.value;

  inputGrayscale.value = 0;
  document.documentElement.style.setProperty("--grayscale", `${inputGrayscale.value}%`);
  document.querySelector("output[name='grayscale']").innerHTML = inputGrayscale.value;

  inputHueRotate.value = 0;
  document.documentElement.style.setProperty("--hue-rotate", `${inputHueRotate.value}deg`);
  document.querySelector("output[name='hue-rotate']").innerHTML = inputHueRotate.value;

  inputInvert.value = 0;
  document.documentElement.style.setProperty("--invert", `${inputInvert.value}%`);
  document.querySelector("output[name='invert']").innerHTML = inputInvert.value;

  inputOpacity.value = 100;
  document.documentElement.style.setProperty("--opacity", `${inputOpacity.value}%`);
  document.querySelector("output[name='opacity']").innerHTML = inputOpacity.value;

  inputSaturate.value = 130;
  document.documentElement.style.setProperty("--saturate", `${inputSaturate.value}%`);
  document.querySelector("output[name='saturate']").innerHTML = inputSaturate.value;

  inputSepia.value = 0;
  document.documentElement.style.setProperty("--sepia", `${inputSepia.value}%`);
  document.querySelector("output[name='sepia']").innerHTML = inputSepia.value;
});

elementBrannan.addEventListener("click", () => {
  document.documentElement.removeAttribute("style");

  inputBlur.value = 0;
  document.documentElement.style.setProperty("--blur", `${inputBlur.value}px`);
  document.querySelector("output[name='blur']").innerHTML = inputBlur.value;

  inputBrightness.value = 100;
  document.documentElement.style.setProperty("--brightness", `${inputBrightness.value}%`);
  document.querySelector("output[name='brightness']").innerHTML = inputBrightness.value;

  inputContrast.value = 140;
  document.documentElement.style.setProperty("--contrast", `${inputContrast.value}%`);
  document.querySelector("output[name='contrast']").innerHTML = inputContrast.value;

  inputGrayscale.value = 0;
  document.documentElement.style.setProperty("--grayscale", `${inputGrayscale.value}%`);
  document.querySelector("output[name='grayscale']").innerHTML = inputGrayscale.value;

  inputHueRotate.value = 0;
  document.documentElement.style.setProperty("--hue-rotate", `${inputHueRotate.value}deg`);
  document.querySelector("output[name='hue-rotate']").innerHTML = inputHueRotate.value;

  inputInvert.value = 0;
  document.documentElement.style.setProperty("--invert", `${inputInvert.value}%`);
  document.querySelector("output[name='invert']").innerHTML = inputInvert.value;

  inputOpacity.value = 100;
  document.documentElement.style.setProperty("--opacity", `${inputOpacity.value}%`);
  document.querySelector("output[name='opacity']").innerHTML = inputOpacity.value;

  inputSaturate.value = 100;
  document.documentElement.style.setProperty("--saturate", `${inputSaturate.value}%`);
  document.querySelector("output[name='saturate']").innerHTML = inputSaturate.value;

  inputSepia.value = 50;
  document.documentElement.style.setProperty("--sepia", `${inputSepia.value}%`);
  document.querySelector("output[name='sepia']").innerHTML = inputSepia.value;
});

elementBrooklyn.addEventListener("click", () => {
  document.documentElement.removeAttribute("style");

  inputBlur.value = 0;
  document.documentElement.style.setProperty("--blur", `${inputBlur.value}px`);
  document.querySelector("output[name='blur']").innerHTML = inputBlur.value;

  inputBrightness.value = 110;
  document.documentElement.style.setProperty("--brightness", `${inputBrightness.value}%`);
  document.querySelector("output[name='brightness']").innerHTML = inputBrightness.value;

  inputContrast.value = 90;
  document.documentElement.style.setProperty("--contrast", `${inputContrast.value}%`);
  document.querySelector("output[name='contrast']").innerHTML = inputContrast.value;

  inputGrayscale.value = 0;
  document.documentElement.style.setProperty("--grayscale", `${inputGrayscale.value}%`);
  document.querySelector("output[name='grayscale']").innerHTML = inputGrayscale.value;

  inputHueRotate.value = 0;
  document.documentElement.style.setProperty("--hue-rotate", `${inputHueRotate.value}deg`);
  document.querySelector("output[name='hue-rotate']").innerHTML = inputHueRotate.value;

  inputInvert.value = 0;
  document.documentElement.style.setProperty("--invert", `${inputInvert.value}%`);
  document.querySelector("output[name='invert']").innerHTML = inputInvert.value;

  inputOpacity.value = 100;
  document.documentElement.style.setProperty("--opacity", `${inputOpacity.value}%`);
  document.querySelector("output[name='opacity']").innerHTML = inputOpacity.value;

  inputSaturate.value = 100;
  document.documentElement.style.setProperty("--saturate", `${inputSaturate.value}%`);
  document.querySelector("output[name='saturate']").innerHTML = inputSaturate.value;

  inputSepia.value = 0;
  document.documentElement.style.setProperty("--sepia", `${inputSepia.value}%`);
  document.querySelector("output[name='sepia']").innerHTML = inputSepia.value;
});

elementInkwell.addEventListener("click", () => {
  document.documentElement.removeAttribute("style");

  inputBlur.value = 0;
  document.documentElement.style.setProperty("--blur", `${inputBlur.value}px`);
  document.querySelector("output[name='blur']").innerHTML = inputBlur.value;

  inputBrightness.value = 110;
  document.documentElement.style.setProperty("--brightness", `${inputBrightness.value}%`);
  document.querySelector("output[name='brightness']").innerHTML = inputBrightness.value;

  inputContrast.value = 110;
  document.documentElement.style.setProperty("--contrast", `${inputContrast.value}%`);
  document.querySelector("output[name='contrast']").innerHTML = inputContrast.value;

  inputGrayscale.value = 0;
  document.documentElement.style.setProperty("--grayscale", `${inputGrayscale.value}%`);
  document.querySelector("output[name='grayscale']").innerHTML = inputGrayscale.value;

  inputHueRotate.value = 0;
  document.documentElement.style.setProperty("--hue-rotate", `${inputHueRotate.value}deg`);
  document.querySelector("output[name='hue-rotate']").innerHTML = inputHueRotate.value;

  inputInvert.value = 0;
  document.documentElement.style.setProperty("--invert", `${inputInvert.value}%`);
  document.querySelector("output[name='invert']").innerHTML = inputInvert.value;

  inputOpacity.value = 100;
  document.documentElement.style.setProperty("--opacity", `${inputOpacity.value}%`);
  document.querySelector("output[name='opacity']").innerHTML = inputOpacity.value;

  inputSaturate.value = 100;
  document.documentElement.style.setProperty("--saturate", `${inputSaturate.value}%`);
  document.querySelector("output[name='saturate']").innerHTML = inputSaturate.value;

  inputSepia.value = 30;
  document.documentElement.style.setProperty("--sepia", `${inputSepia.value}%`);
  document.querySelector("output[name='sepia']").innerHTML = inputSepia.value;
});
