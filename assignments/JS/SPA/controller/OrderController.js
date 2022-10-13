function loadAllCustomersForOption() {
    $("#inputCustomerID").empty();
    for (let cus of Customers) {
        $("#inputCustomerID").append(`<option>${cus.id}</option>`);
    }
}