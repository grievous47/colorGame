var mode = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	resetGame();
	}

function setupModeButtons(){
	//mode buttons event listeners
for (var i = 0 ; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", setMode);
	}
}

function setupSquares(){
	//setting colors to squares
for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", clickedColor);
}
}


function resetGame(){
	//generate all new colors
	colors = generateRandomColors(mode);
	//pick a new random color
	pickedColor = randomPickColor();
	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	if (colors[i]) {
		//add colors to the active squares
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
		}
	else{
		//remove color from inactive squares
		squares[i].style.display = "none";
		}
	}
	// set text to default
	messageDisplay.textContent = "";
	// set h1 back to default
	h1.style.background = "steelblue";
	// set the button text to default
	this.textContent = "NEW COLORS"
	resetButton.addEventListener("click", resetGame);
}






function clickedColor(){
		// grab color of clicked square
	var clickedColor = this.style.background;
		//compare color to pickedColor
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct";
		changeColors(pickedColor);
		resetButton.textContent = "PLAY AGAIN?"
	}
	else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
}

function changeColors(color){
	//loop through all squares
	for (var i = mode - 1; i >= 0; i--) {
		//change each color to match pickedColor
		squares[i].style.background = color;
	}
	h1.style.background = color;
}

function randomPickColor(){
	//pick a random number from 0 to 5
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	// add num random colors to arr
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		}
		//return that array
		return arr;
}

function randomColor(){
	//pick a red
	var r = Math.floor(Math.random() *256)
	//pick a green
	var g = Math.floor(Math.random() *256)
	//pick a blue
	var b = Math.floor(Math.random() *256)
	//return rgb
	return "rgb(" + r  + ", " + g + ", "+ b + ")";
}



function setMode(){
	// color the selected button
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	//set the mode of the game
	this.textContent === "EASY" ? mode = 3: mode = 6;
	/*if (this.textContent === "EASY") {
		console.log(modeButtons[i])
		mode = 3;
	}
	else {
		mode = 6;
	}*/
	resetGame();
}