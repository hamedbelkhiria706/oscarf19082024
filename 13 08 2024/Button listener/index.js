const handleClick = (i) => {
  alert("I got clicked I am button " + i);
};
let d = document.querySelectorAll(".btn1, .btn2, .btn3, .btn4"); //.click-me

//String.fromCharCode(64 + num) => convert 1 to A
console.log(d);
let e = Array.from(d);

e.map((f, i) => f.addEventListener("click", () => handleClick(f.textContent)));
