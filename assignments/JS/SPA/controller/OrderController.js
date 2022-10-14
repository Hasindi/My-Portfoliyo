/*disable button*/
$("#btnAddToCart").attr('disabled', true);
$("#btnPlaceOrder").attr('disabled', true);

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
    updateQty();
    $("#btnAddToCart").attr("disabled", false);
});

/*add to cart*/
$("#btnAddToCart").click(function () {
    let QTYOnHand = parseInt($('#qtyOnHand').val());
    let orderQTY = parseInt($('#buyQty').val());
    if ($("#buyQty").val() != "") {
        if (QTYOnHand < orderQTY) {
            alert("There is no item Avilable for this Quntity...!")
        } else {
            updateQty();
            addToCart();
            loadAllCartDetails();
            clearInputQuntity();
        }
    } else {
        alert("Plese enter your Order Quntity...!");
    }
    $("#btnPlaceOrder").attr('disabled', false);
    getAmount();
});

subTotalArray = [];

//function add to cart
function addToCart() {
    let iCode = $("#inputItemCode").val();
    let iName = $("#itemName").val();
    let iPrice = $("#itemPrice").val();
    let buyqty = $('#buyQty').val();
    let total = iPrice * buyqty;

    subTotalArray.push(total);

    var CartObject = {
        iCode: iCode,
        iName: iName,
        iPrice: iPrice,
        buyqty: buyqty,
        total: total
    }

    Cart.push(CartObject);
}

/*total*/
function getAmount() {
    var amount = 0;
    for (var i = 0; i < subTotalArray.length; i++) {
        amount += subTotalArray[i];
    }
    $("#txtTotal").text(amount);
}

/*discount*/
$("#txtDiscount").on('keydown', function (event){
    if (event.key == 'Enter'){
        var discount = $("#txtDiscount").val();
        var tot = $("#txtTotal").text();
        var genarateDis = tot * discount/100;

        var subValue =  tot - genarateDis;
        $("#txtSubTotal").text(subValue);
    }
});

/*balance*/
$("#txtCash").on('keydown', function (event){
    if (event.key == 'Enter'){
        var subTotal = $("#txtSubTotal").text();
        var cash = $("#txtCash").val();
        var balance = cash - subTotal;

        $("#txtBalance").val(balance);
    }
});

/*update quntity*/
function updateQty() {
    let qtyOnHand = $("#qtyOnHand").val();
    let orderqty = $('#buyQty').val();
    let newQTY = qtyOnHand - orderqty;

    for (let item of Items) {
        if ($("#inputItemCode").val() === item.code) {
            item.qty = newQTY;
            $("#qtyOnHand").val(item.qty);

            loadAllCartDetails();
        }
    }
}

/*load all*/
function loadAllCartDetails() {
    $("#orderTable").empty();
    for (let cartData of Cart) {

        var row = `<tr><td>${cartData.iCode}</td><td>${cartData.iName}</td><td>${cartData.iPrice}</td>
                                  <td>${cartData.buyqty}</td><td>${cartData.total}</td></tr>`;

        $("#orderTable").append(row);
    }
    CartItemRemove();
}

/*clear text fields*/
function clearTextFields() {
    $("#inputCustomerID,#customerName,#customerAddress,#customerSalary").val("");
    $("#inputItemCode,#itemName,#itemPrice,#qtyOnHand,#buyQty").val("");
}

/*clear item text fields*/
function clearInputQuntity() {
    $("#buyQty").val("");
}

function CartItemRemove() {
    $("#orderTable>tr").on('dblclick', function () {
        $(this).remove();
    });
}

