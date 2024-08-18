let links = document.querySelectorAll("a");
console.log(links);
links.forEach((e) => {
  e.style.color = "red";
});

let button = document.getElementsByTagName("button")[0];

button.style.backgroundColor = "yellow";

let links1 = Array.from(links);

links1.map((e) => e.setAttribute("href", "https://www.bing.com"));
