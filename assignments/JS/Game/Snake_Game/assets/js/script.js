var blockSize = 10;
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

function update() {
    /*snake head style*/
    grid.fillStyle = "green";
    grid.fillRect(snakeX, snakeY, blockSize, blockSize)
}