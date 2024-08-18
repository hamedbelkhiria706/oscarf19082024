const randomNumber1 = () => {
  return Math.floor(Math.random() * 6 + 1);
};
let num1 = randomNumber1();
let num2 = randomNumber1();
console.log(num1);
console.log(num2);
let images = document.querySelectorAll("img");
images[0].setAttribute("src", `/images/dice${num1}.png`);
images[1].setAttribute("src", `/images/dice${num2}.png`);
let title = document.querySelector("h1");
let resultat = "Player 1 wins";
if (num2 == num1) {
  resultat = "Draw";
} else if (num2 > num1) {
  resultat = "Player 2 wins";
}
title.textContent = resultat;
