var numSquare=6;
var colors = generateRandomColor(numSquare);
var squares = document.querySelectorAll(".box");
var correctColor = cColor();
var pickColor = document.getElementById("colorDisplay");
var displayText = document.getElementById("display");
var headerColor = document.getElementById("header");
pickColor.textContent = correctColor;
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var newColor=document.getElementById("newcolor");
hard.classList.add("selected");

for (var i = 0; i < squares.length; i++) {
    //to add colors to the squares
    squares[i].style.backgroundColor = colors[i];
    //to  add click listeners to square
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === correctColor) {

            displayText.textContent = "Correct!!"
            changeColors();
            newColor.textContent=("Play Again?");

        }
        else {
            this.style.backgroundColor = "black";
            displayText.textContent = ("Try again");
        };

    });
}
function changeColors() {
    //loop through all the squares
    for (var i = 0; i < squares.length; i++)


    //change the color of the squares and header
    squares[i].style.backgroundColor = correctColor;
    headerColor.style.backgroundColor = correctColor;

}
function cColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}
function generateRandomColor(num) {
    //create an array
    var arr = [];
    //reapeat num 
    for (var i = 0; i < num; i++) {
        //push random color function into array
        arr.push(randomColor())
    }
    return arr;
}
function randomColor() {
    //select random number b/w 0-255 for rgb
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
easy.addEventListener("click",function(){
    displayText.textContent="";
    numSquare=3;
    easy.classList.add("selected");
    hard.classList.remove("selected");  
    colors=generateRandomColor(numSquare);
    correctColor=cColor();
    pickColor.textContent = correctColor;
    for(var i=0;i<squares.length;i++){
        headerColor.style.backgroundColor="Steelblue";
    
        if (colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});
hard.addEventListener("click",function(){
    numSquare=6;
    displayText.textContent="";
    easy.classList.remove("selected");
    hard.classList.add("selected");
    colors=generateRandomColor(numSquare);

    correctColor=cColor();
    pickColor.textContent = correctColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.display="block";
        headerColor.style.backgroundColor="Steelblue";
    
        if (colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
    }
});

newColor.addEventListener("click",function(){
    newColor.textContent=("New Color");
    //generate random color
    displayText.textContent="";
   colors= generateRandomColor(numSquare);
   //pick a new random color from array
   correctColor = cColor();
   //change color display to mathc picked color
   pickColor.textContent = correctColor;
   //change header to default square.
   for(var i=0;i<squares.length;i++){
    headerColor.style.backgroundColor="Steelblue";
   }
   //check if square is correct/wrong with dsiaplay effects
   for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === correctColor) {

            displayText.textContent = "Correct!!"
            changeColors();
            newColor.textContent=("Play Again?");
            
        }
        else {
            this.style.backgroundColor = "black";
            displayText.textContent = ("Try again");
        };

    });
}

});