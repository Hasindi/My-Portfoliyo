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
    console.log(Customers);

    loadAllCustomers();

});

/*loard all*/
$("#getAll").click(function () {
    loadAllCustomers();

});

function loadAllCustomers(){
    $("#tblCustomer").empty();

    for (var customer of Customers){
        /* console.log(Customer);*/

        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}
