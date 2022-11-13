var input = {
    persons:[
        {name: "Pawani", color:"red"},
        {name: "Dilki", color:"green"},
        {name: "Nuwan", color:"orange"}
    ],

    nextPerson:function (){
        var lastPerson = this.persons.pop();
        this.persons.unshift(lastPerson);
    }
}