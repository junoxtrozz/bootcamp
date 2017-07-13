var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var squareContainer = document.querySelector("#container");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	resetButton.textContent = "New Colors";
});

easyButton.addEventListener("click", function(){
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	//add colors to first three squares
		squares[i].style.background = colors[i];
	}
	//hide second row of squares
	for(var j = 3; j < squares.length; j++){
		squares[j].style.background = "#232323";
	}
	h1.style.background = "#232323";
	resetButton.textContent = "New Colors";
})

hardButton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	resetButton.textContent = "New Colors";
})
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
	// grab color of clicked square
	var clickedColor = this.style.background;
	// compare color to pickedColor
	if(clickedColor === pickedColor){
		resetButton.textContent = "Play Again";
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again!";
	}

	});
};

function changeColors(color) {
	for (var i = 0; i <squares.length; i++) {
		squares[i].style.background = color;
		}
	messageDisplay.textContent = "Correct!";
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

};

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
};


function randomColor(){
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256);
	
	return "rgb(" + red + ", " + green + ", " + blue +")";

};
