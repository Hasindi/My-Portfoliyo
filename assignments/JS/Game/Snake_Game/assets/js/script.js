var blockSize = 8;
var board;
var grid;


window.onload = function () {
    board = document.getElementById("board");
    grid = board.getContext("2d");

    update();
}

/*snake head*/
/*7=place*/
var snakeX = blockSize * 7;
var snakeY = blockSize * 7;

/*snake food*/
/*10=place*/
var foodX = blockSize * 20;
var foodY = blockSize * 10;

function update() {
    /*snake head style*/
    grid.fillStyle = "green";
    grid.fillRect(snakeX, snakeY, blockSize, blockSize);

    /*food style*/
    grid.fillStyle = "crimson";
    grid.fillRect(foodX, foodY, blockSize, blockSize);
}