const texte = document.getElementById("comment-input");

const bouton = document.getElementById("add-comment-btn");
//works with react
//bouton.setAttribute("disabled", "true");
//bouton.classList.add("disabled");
//need always listener
/*texte.addEventListener("keydown", () => {
  console.log(texte.value.trim());
  if (texte.value.trim()) {
    bouton.setAttribute("disabled", "true");
    bouton.classList.add("disabled");
  } else {
    bouton.setAttribute("disabled", "false");
    bouton.classList.remove("disabled");
  }
});*/
bouton.addEventListener("click", () => {
  let message = document.getElementById("comment-input");
  if (message.value.trim()) {
    const parent = document.getElementById("comment-list");
    const newElement = document.createElement("li");
    newElement.textContent = message.value;
    const commentList = document.getElementById("comment-list");
    commentList.appendChild(newElement);
    message.value = "";
  } else {
    alert("Please type a message");
  }
});
