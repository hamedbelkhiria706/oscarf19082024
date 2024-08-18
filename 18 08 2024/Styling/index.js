const texte = document.querySelector("#texte");
const boutons = document.querySelectorAll("#style-btn,#reset-btn");
boutons[0].addEventListener("click", () => {
  texte.classList.addClass(".styled");
});
boutons[1].addEventListener("click", () => {
  texte.classList.removeClass(".styled");
});
