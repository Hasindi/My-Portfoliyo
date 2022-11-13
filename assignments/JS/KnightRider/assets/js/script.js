var knightRider = {
    count: 0,
    tempArray: [],
    leftColorArray: ['white', 'white', 'white', 'white', 'white', 'white', "#c7b7ab", '#AD9275FF', '#AB7F5FFF', '#855630FF', '#8C4D21FF', '#8C3F04FF'],
    rightColorArray: ['white', 'white', 'white', 'white', 'white', 'white', '#8C3F04FF', '#8C4D21FF', '#855630FF', '#AB7F5FFF', '#AD9275FF', "#c7b7ab"],
    nextColor: function () {
        var lastColor = this.tempArray.pop();
        this.tempArray.unshift(lastColor);
    },

    reverseColor: function () {
        var firstColor = this.tempArray.shift();
        this.tempArray.push(firstColor);
    },

    animate: function () {
        this.count++;
        if (this.count <= this.leftColorArray.length) {
            this.tempArray = this.leftColorArray;
            this.nextColor();
        } else {
            if (this.count >= (this.rightColorArray.length * 2)) {
                this.count = 0;
            }
            this.tempArray = this.rightColorArray;
            this.reverseColor();
        }
    }
}

renderDivs();

function renderDivs() {
    $("#content").empty();
    for (let i = 0; i < (knightRider.tempArray.length) / 2; i++) {
        $("#content").append(`<div style="background-color: ${knightRider.tempArray[i]}"></div>`);
    }
    knightRider.animate();
}

var rider = 0;

$('#btnStart').click(function () {
    rider = setInterval(renderDivs, 50);
});

$('#btnEnd').click(function () {
    clearInterval(rider);
});