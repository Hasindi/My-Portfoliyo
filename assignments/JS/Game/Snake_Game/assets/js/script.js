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
var timerX=0;
var timerY=0;

window.onload = function () {
    board = document.getElementById("board");

    /*game boad width height*/
    board.height = row * blockSize;
    board.width = column * blockSize;

    grid = board.getContext("2d");

    setFoodPlace();
    document.addEventListener("keyup", setSnakeMove);
    /*update();*/
    setInterval(update, 1000/10);
}

/*snake and food*/
function update() {
    /*game board style*/
    grid.fillStyle = "black";
    grid.fillRect(0, 0, board.width, board.height);

    /*food style*/
    grid.fillStyle = "crimson";
    grid.fillRect(foodX, foodY, blockSize, blockSize);

    /*snake  touch foods*/
    if (snakeX==foodX&&snakeY==foodY){
        setFoodPlace();
    }

    /*snake head style*/
    grid.fillStyle = "green";
    snakeX+=timerX* blockSize;
    snakeY+=timerY* blockSize;
    grid.fillRect(snakeX, snakeY, blockSize, blockSize);
}

/*snake move*/
function setSnakeMove(s) {
    if (s.code == "ArrowUp"){
        timerX=0;
        timerY=-1;
    }
    else if (s.code == "ArrowDown"){
        timerX=0;
        timerY=1;
    }
    else if (s.code == "ArrowLeft"){
        timerX=-1;
        timerY=0;
    }
    else if (s.code == "ArrowRight"){
        timerX=1;
        timerY=0;
    }

}


/*change food place*/
function setFoodPlace() {
    foodX = Math.floor(Math.random() * column) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}