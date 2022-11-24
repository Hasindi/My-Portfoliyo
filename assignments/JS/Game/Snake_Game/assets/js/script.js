var blockSize = 27;
var column = 30;
var row = 20;
var board;
var grid;


window.onload = function () {
    board = document.getElementById("board");

    /*game boad width height*/
    board.height = row * blockSize;
    board.width = column * blockSize;

    grid = board.getContext("2d");

    setFoodPlace();
    update();
}

/*snake head*/
/*7=place*/
var snakeX = blockSize * 7;
var snakeY = blockSize * 7;

/*snake food*/
/*10=place*/
var foodX;
var foodY;


/*snake and food*/
function update() {
    /*game board style*/
    grid.fillStyle = "black";
    grid.fillRect(0, 0, board.width, board.height);

    /*snake head style*/
    grid.fillStyle = "green";
    grid.fillRect(snakeX, snakeY, blockSize, blockSize);/*snake head style*/

    /*food style*/
    grid.fillStyle = "crimson";
    grid.fillRect(foodX, foodY, blockSize, blockSize);
}


/*change food place*/
function setFoodPlace() {
    foodX = Math.floor(Math.random() * column) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}