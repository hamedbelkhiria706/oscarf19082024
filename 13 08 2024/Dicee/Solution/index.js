var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var title = document.querySelector("h1");

document.querySelector(".img1").setAttribute("src" , "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src" , "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    title.innerHTML = "Player 1 wins !";
}

else if (randomNumber1 < randomNumber2){
    title.innerHTML = "Player 2 wins !";
}

else {
    title.innerHTML = "Draw !";
}