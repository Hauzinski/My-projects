const quoteBlock = document.querySelector(".quote");
const authorBlock = document.querySelector(".author");
const btnQuote = document.getElementById("btnQuote");

const minQuote = 0;
const maxQuote = 12;
let randomQuote = +getRandomQuote(minQuote, maxQuote);
const pathQuote = "https://raw.githubusercontent.com/Hauzinski/Momentum-images/master/quotes.json";
let langQuote = "en";

function getRandomQuote(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

async function getQuote() {
  if (localStorage.getItem("language") === "english") {
    langQuote = "en";
  } else if (localStorage.getItem("language") === "russian") {
    langQuote = "ru";
  }

  const res = await fetch(pathQuote);
  const data = await res.json();

  if (langQuote === "en") {
    quoteBlock.textContent = data[randomQuote].textEN;
    authorBlock.textContent = data[randomQuote].authorEN;
  } else if (langQuote === "ru") {
    quoteBlock.textContent = data[randomQuote].textRU;
    authorBlock.textContent = data[randomQuote].authorRU;
  }
}

btnQuote.addEventListener("click", () => {
  randomQuote = +getRandomQuote(minQuote, maxQuote);
  getQuote();
});

getQuote();
