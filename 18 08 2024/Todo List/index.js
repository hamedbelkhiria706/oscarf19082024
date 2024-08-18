let ajouter = document.querySelector("#addTaskButton");
let texte = document.querySelector("#taskInput");
let liste = document.querySelector("#taskList");
var autoinc = 1;
ajouter.addEventListener("click", () => {
  autoinc += 1;
  let newli = document.createElement("li");
  let dl = document.createElement("button");
  let t = document.createElement("span");
  newli.setAttribute("class", "a" + autoinc);
  t.textContent = texte.value;
  dl.textContent = "Retirer";
  dl.setAttribute("class", "deleteButton");
  newli.appendChild(dl);

  newli.appendChild(t);
  dl.addEventListener("click", () => {
    let n = document.querySelector(".a" + String(autoinc));
    n.remove();
  });
  liste.appendChild(newli);
  texte.value = "";
});
