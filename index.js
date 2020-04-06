var name1 = prompt("Enter player 1 name!");
var name2 = prompt("Enter player 2 name!");

var ran = Math.floor(Math.random() * 6) + 1;

var image1 = "dice" + ran + ".png";

var folder = "images/" + image1;

var img = document.querySelectorAll("img")[0];

img.setAttribute("src", folder);


var ran2 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + ran2 +".png";

var randomImageSource = "images/" + randomImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

document.querySelectorAll("p")[0].innerHTML = name1;
document.querySelectorAll("p")[1].innerHTML = name2;

if(ran > ran2) {
  document.querySelector("h1").innerHTML = "🚩 " + name1 +" wins!";
}
else if(ran2 > ran) {
  document.querySelector("h1").innerHTML = name2 +" wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
