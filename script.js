function randomizeer() {
    var rand = Math.floor(Math.random() * 6) + 1;
    return rand;
}


var dice1 = randomizeer();
var path1 = "images/dice" + dice1 + ".png";
document.querySelector("img.dice1").setAttribute("src", path1);

var dice2 = randomizeer();
var path2 = "images/dice" + dice2 + ".png";
document.querySelector("img.dice2").setAttribute("src", path2);

if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}

if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}

if (dice1 === dice2) {
    document.querySelector("h1").innerHTML = "Draw!";
}



