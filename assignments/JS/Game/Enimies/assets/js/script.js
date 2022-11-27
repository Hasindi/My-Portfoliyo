var girl = document.getElementById("girl");

var idleImageNumber = 0;
var idleAnimationNumber = 0;
var runImageNumber = 0;
var runAnimationNumber = 0;
var backgroundPositionX = 0;
var moveBackgroundAnimationID = 0;


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
    }

    /*move background*/
    if (moveBackgroundAnimationID == 0) {
        moveBackgroundAnimationID = setInterval(moveBackground, 100);
    }
}


function moveBackground() {
    backgroundPositionX = backgroundPositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";
}