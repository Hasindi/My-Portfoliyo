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

/*fill other textfields of items*/
$("#inputItemCode").change(function () {
    let itemCode = $("#inputItemCode").val();
    let item = searchItem(itemCode);
    if (item != null) {
        $("#itemName").val(item.name);
        $("#itemPrice").val(item.unitPrice);
        $("#qtyOnHand").val(item.qty);
    }
});
