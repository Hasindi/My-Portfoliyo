/*Save*/
$("#btnCustomer").click(function () {

    let customerID = $("#txtCustomerID").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    var CustomerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    }

    Customers.push(CustomerObject);

    loadAllCustomers();
    bindRowClickEvents();

});

/*loard all*/
$("#getAll").click(function () {
    loadAllCustomers();

});

function loadAllCustomers(){
    $("#tblCustomer").empty();

    for (var customer of Customers){

        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}


/*select data in table*/
function bindRowClickEvents(){

    $("#tblCustomer>tr").click(function (){
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();

        console.log(id, name, address, salary);
    });
}
