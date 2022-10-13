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