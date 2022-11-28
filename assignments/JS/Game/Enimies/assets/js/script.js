var girl = document.getElementById("girl");

var idleImageNumber = 1;
var idleAnimationNumber = 0;
var runImageNumber = 1;
var runAnimationNumber = 0;
var backgroundPositionX = 0;
var moveBackgroundAnimationID = 0;
var jumpImageNumber = 1;
var jumpAnimationNumber = 0;
var girlMarginTop = 567;
var boxAnimationID = 0;
var deadImageNumber = 1;
var deadAnimationNumber = 0;
var score = 0;


/*girl Animation*/
function idleAnimation() {
    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber === 11) {
        idleImageNumber = 1;
    }

    girl.src = "assets/Idle (" + idleImageNumber + ").png";
}

function idleStartAnimation() {
    idleAnimationNumber = setInterval(idleAnimation, 200);
}


/*run for girl*/
function runAnimation() {
    runImageNumber = runImageNumber + 1;

    if (runImageNumber === 11) {
        runImageNumber = 1;
    }

    girl.src = "assets/Run (" + runImageNumber + ").png";

}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNumber);

}

/*Enter key Press*/
function keyCheck(event) {
    var keyCode = event.which;

    if (keyCode === 13) {
        if (runAnimationNumber === 0) {
            runAnimationStart();
        }

        /*move background*/
        if (moveBackgroundAnimationID == 0) {
            moveBackgroundAnimationID = setInterval(moveBackground, 100);
        }

        /*move gif*/
        if (boxAnimationID == 0) {
            boxAnimationID = setInterval(boxAnimation, 100);
        }
    }

    /*space button for jump*/
    if (keyCode === 32) {
        if (jumpAnimationNumber === 0) {
            jumpAnimationStart();
        }

        /*move background*/
        if (moveBackgroundAnimationID === 0) {
            moveBackgroundAnimationID = setInterval(moveBackground, 100);
        }

        /*move gif*/
        if (boxAnimationID == 0) {
            boxAnimationID = setInterval(boxAnimation, 100);
        }
    }
}


function moveBackground() {
    backgroundPositionX = backgroundPositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";

    /*score*/
    score = score + 10;
    document.getElementById("score").innerHTML = "Score : " + score;
}

function jumpAnimation() {
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6) {
        girlMarginTop = girlMarginTop - 35;
        girl.style.marginTop = girlMarginTop + "px";
    }

    if (jumpImageNumber >= 7) {
        girlMarginTop = girlMarginTop + 35;
        girl.style.marginTop = girlMarginTop + "px";
    }

    if (jumpImageNumber === 11) {
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }

    girl.src = "assets/Jump (" + jumpImageNumber + ").png";
}

function jumpAnimationStart() {
    clearInterval(idleAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation, 100);

}

let boxMarginLeft = 1600;

/*barriers*/
function createBarriers() {

    for (var i = 0; i <= 10; i++) {
        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id = "box" + i;

        /*boxMarginLeft = boxMarginLeft + 1000;*/

        if (i < 5) {
            boxMarginLeft += 2000;
        }

        if (i >= 5) {
            boxMarginLeft += 1000;
        }
    }
}

function boxAnimation() {
    for (var i = 0; i < 10; i++) {
        var box = document.getElementById("box" + i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";


        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (girlMarginTop > 500) {
                clearInterval(boxAnimationID);

                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackgroundAnimationID);
                moveBackgroundAnimationID = -1;

                deadAnimationNumber = setInterval(deadAnimation, 100);

            }
        }
    }
}

/*dead for girl*/
function deadAnimation() {
    deadImageNumber = deadImageNumber + 1;

    if (deadImageNumber == 11) {
        deadImageNumber = 10;
    }

    girl.src = "assets/Dead (" + deadImageNumber + ").png";

}
