const btnOptions = document.getElementById("btnOptions");
const btnCloseOptions = document.getElementById("btnCloseOptions");
const options = document.querySelector(".optionsContainer");

function openOptions() {
  options.style.visibility = "visible";
  options.style.right = "0px";
  btnOptions.removeEventListener("click", openOptions);
  btnOptions.addEventListener("click", closeOptions);
}

function closeOptions() {
  options.style.visibility = "hidden";
  options.style.right = "-5000px";
  btnOptions.removeEventListener("click", closeOptions);
  btnOptions.addEventListener("click", openOptions);
}

btnOptions.addEventListener("click", openOptions);
btnCloseOptions.addEventListener("click", closeOptions);

let blockClasses = {
  audioCheck: ".audioContainer",
  weatherCheck: ".weatherContainer",
  timeCheck: ".timeContainer__time",
  dateCheck: ".timeContainer__date",
  greetingCheck: ".greetingContainer",
  quoteCheck: ".quoteContainer",
};

let visibleOption = {
  audioCheck: "visible",
  weatherCheck: "visible",
  timeCheck: "visible",
  dateCheck: "visible",
  greetingCheck: "visible",
  quoteCheck: "visible",
};

function hideBlocks(event) {
  const target = event.target;

  if (target.checked) {
    visibleOption[target.id] = "visible";
    localStorage.setItem("visibleOption", JSON.stringify(visibleOption));
    return appear(document.querySelector(blockClasses[target.id]));
    // return (document.querySelector(blockClasses[target.id]).style.visibility = "visible");
  }
  visibleOption[target.id] = "hidden";
  localStorage.setItem("visibleOption", JSON.stringify(visibleOption));
  return fade(document.querySelector(blockClasses[target.id]));
  // return (document.querySelector(blockClasses[target.id]).style.visibility = "hidden");
}

const checkOptions = document.querySelector(".checkOptions");

checkOptions.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    hideBlocks(event);
  }
});

if (localStorage.getItem("visibleOption")) {
  let json = JSON.parse(localStorage.getItem("visibleOption"));
  for (let value of Object.keys(visibleOption)) {
    visibleOption[value] = json[value];
    if (visibleOption[value] === "visible") {
      document.querySelector(blockClasses[value]).style.visibility = "visible";
      document.getElementById(value).checked = true;
    } else if (visibleOption[value] === "hidden") {
      document.querySelector(blockClasses[value]).style.visibility = "hidden";
      document.getElementById(value).checked = false;
    }
  }
}
