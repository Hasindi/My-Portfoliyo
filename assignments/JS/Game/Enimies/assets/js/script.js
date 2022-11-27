var girl = document.getElementById("girl");

var idleImageNumber = 1;
var idleAnimationNumber = 0;
var runImageNumber = 1;
var runAnimationNumber = 0;
var backgroundPositionX = 0;
var moveBackgroundAnimationID = 0;
var jumpImageNumber = 1;
var jumpAnimationNumber = 0;


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
    }
}


function moveBackground() {
    backgroundPositionX = backgroundPositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";
}

function jumpAnimation() {
    jumpImageNumber = jumpImageNumber + 1;

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
