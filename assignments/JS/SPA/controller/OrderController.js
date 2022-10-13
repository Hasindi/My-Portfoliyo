/*load customer ids to combobox*/
function loadAllCustomersForOption() {
    $("#inputCustomerID").empty();
    for (let cus of Customers) {
        $("#inputCustomerID").append(`<option>${cus.id}</option>`);
    }
}

/*load item ids to combobox*/
function loadAllItemsForOption() {
    $("#inputItemCode").empty();
    for (let item of Items) {
        $("#inputItemCode").append(`<option>${item.code}</option>`);
    }
}

/*fill other textfields of customer*/
$("#inputCustomerID").change(function () {
    let cusID = $("#inputCustomerID").val();
    let customer = searchCustomer(cusID);
    if (customer != null) {
        $("#customerName").val(customer.name);
        $("#customerAddress").val(customer.address);
        $("#customerSalary").val(customer.salary);
    }
});

