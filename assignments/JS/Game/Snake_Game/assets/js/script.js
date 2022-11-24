var blockSize = 27;
var column = 30;
var row = 20;
var board;
var grid;

/*snake head*/
/*7=place*/
var snakeX = blockSize * 7;
var snakeY = blockSize * 7;

/*snake food*/
/*10=place*/
var foodX;
var foodY;

/*snake speed*/
var timerX = 0;
var timerY = 0;

/*snake body*/
var snakeBody = [];

var gameOver = false;

window.onload = function () {
    board = document.getElementById("board");

    /*game boad width height*/
    board.height = row * blockSize;
    board.width = column * blockSize;

    grid = board.getContext("2d");

    setFoodPlace();
    document.addEventListener("keyup", setSnakeMove);
    /*update();*/
    setInterval(update, 1000 / 10);
}

/*snake and food*/
function update() {
    /*if game over make retur*/
    if (gameOver) {
        return;
    }

    /*game board style*/
    grid.fillStyle = "black";
    grid.fillRect(0, 0, board.width, board.height);

    /*food style*/
    grid.fillStyle = "crimson";
    grid.fillRect(foodX, foodY, blockSize, blockSize);

    /*snake touch foods*/
    if (snakeX == foodX && snakeY == foodY) {

        /*push food for body*/
        snakeBody.push([foodX, foodY]);

        setFoodPlace();
    }

    /*collect food for body part*/
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    /*snake head style*/
    grid.fillStyle = "green";
    snakeX += timerX * blockSize;
    snakeY += timerY * blockSize;
    grid.fillRect(snakeX, snakeY, blockSize, blockSize);

    /*push food for body part*/
    for (let i = 0; i < snakeBody.length; i++) {
        grid.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }


    /*game over Conditions*/
    if (snakeX < 0 || snakeX > column * blockSize || snakeY < 0 || snakeY > row * blockSize) {
        gameOver = true;
        alert("Game Over...!!!");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over...!!!");
        }
    }
}

/*snake move*/
function setSnakeMove(s) {
    if (s.code == "ArrowUp") {
        timerX = 0;
        timerY = -1;
    } else if (s.code == "ArrowDown") {
        timerX = 0;
        timerY = 1;
    } else if (s.code == "ArrowLeft") {
        timerX = -1;
        timerY = 0;
    } else if (s.code == "ArrowRight") {
        timerX = 1;
        timerY = 0;
    }

}


/*change food place*/
function setFoodPlace() {
    foodX = Math.floor(Math.random() * column) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}