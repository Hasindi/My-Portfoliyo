var input = {
    persons: [
        {name: "Pawani", color: "red"},
        {name: "Dilki", color: "green"},
        {name: "Nuwan", color: "orange"}
    ],

    nextPerson: function () {
        var lastPerson = this.persons.pop();
        this.persons.unshift(lastPerson);
    }
}

renderDivs();

function renderDivs() {
    $(".sec2").empty();
    for (let i = 0; i < input.persons.length; i++) {
        $(".sec2").append(`<div style="background-color: ${input.persons[i].color}"><h5>${input.persons[i].name}</h5></div>`);
    }
    input.nextPerson();
}

setInterval(renderDivs, 400);

$("#btn").click(function () {
    let name = $("#name").val();
    let color = $("#color").val();

    var Object = {
        name: name,
        color: color
    }

    input.persons.unshift(Object);
});