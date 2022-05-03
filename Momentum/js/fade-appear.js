function appear(element) {
  element.style.visibility = "visible";
  let opacity = 0;

  let timer = setInterval(() => {
    if (opacity > 1){
      clearInterval(timer);      
      return;
    }
    element.style.opacity = opacity;       
    opacity += 0.1;
  }, 50);
}

function fade(element) {
  let opacity = 1;

  let timer = setInterval(() => {
    if (opacity < 0){
      element.style.visibility = "hidden";
      clearInterval(timer);      
      return;
    }
    element.style.opacity = opacity;      
    opacity -= 0.1;
  }, 50);
}
