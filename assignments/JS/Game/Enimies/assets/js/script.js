var girl = document.getElementById("girl");

var idleImageNumber=0;
var idleAnimationNumber=0;

function idleAnimation(){
    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber===11){
        idleImageNumber=1;
    }

    girl.src="assets/Idle ("+idleImageNumber+").png";
}

function idleStartAnimation(){
    idleAnimationNumber = setInterval(idleAnimation, 200);
}