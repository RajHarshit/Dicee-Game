var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);


var Image1 = "Images/dice" + randomNumber1 + ".png";
var Image2 = "Images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", Image1);
document.querySelector(".dice .img2").setAttribute("src", Image2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}