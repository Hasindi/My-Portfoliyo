/*Save*/
$("#btnSaveItem").click(function () {
    saveItem();
});

function saveItem(){

    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let qty = $("#txtQTY").val();
    let unitPrice = $("#txtUnitPrice").val();

    var ItemObject = {
        code: itemCode,
        name: itemName,
        qty: qty,
        unitPrice: unitPrice
    }

    Items.push(ItemObject);

    loadAllItems();
    alert("Item Saved Successfully...!");
    clearAllItemTexts();
    bindRowClickEvents();
}

/*Update*/
$("#btnUpdateItem").click(function () {
    let itemCode = $("#txtItemCode").val();
    let response = updateItem(itemCode);
    if (response) {
        alert("Item Updated Successfully...!");
        setTextfieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");
    }
});

/*delete*/
$("#btnDeleteIItem").click(function () {
    let deleteID = $("#txtItemCode").val();

    let option = confirm("Do you really want to delete Item code :" + deleteID);
    if (option) {
        if (deleteItem(deleteID)) {
            alert("Item Successfully Deleted...!");
            setTextfieldValues("", "", "", "");
        } else {
            alert("There is no such item to delete. please check the id.");
        }
    }
    loadAllItems();
});

function loadAllItems() {
    $("#tblItems").empty();

    for (var item of Items) {

        var row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.unitPrice}</td></tr>`;

        $("#tblItems").append(row);
    }
}

/*select data in table*/
function bindRowClickEvents() {

    $("#tblItems>tr").click(function () {
        let code = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let qty = $(this).children(":eq(2)").text();
        let unitPrice = $(this).children(":eq(3)").text();

        /*
                console.log(code, name, qty, unitPrice);
        */

        /*set table details to text field*/
        $('#txtItemCode').val(code);
        $('#txtItemName').val(name);
        $('#txtQTY').val(qty);
        $('#txtUnitPrice').val(unitPrice);
    });
}

$("#txtItemCode").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedCode = $("#txtItemCode").val();
        let Item = searchItem(typedCode);
        if (Item != null) {
            setTextfieldValues(Item.code, Item.name, Item.qty, Item.unitPrice);
        } else {
            alert("There is no item available for that " + typedCode);
            setTextfieldValues("", "", "", "");
        }
    }
});

function setTextfieldValues(code, name, qty, unitPrice) {
    $("#txtItemCode").val(code);
    $("#txtItemName").val(name);
    $("#txtQTY").val(qty);
    $("#txtUnitPrice").val(unitPrice);
}

function searchItem(code) {
    for (let Item of Items) {
        if (Item.id == code) {
            return Item;
        }
    }
    return null;
}

function updateItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        item.code = $("#txtItemCode").val();
        item.name = $("#txtItemName").val();
        item.qty = $("#txtQTY").val();
        item.unitPrice = $("#txtUnitPrice").val();
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        let indexNumber = Items.indexOf(item);
        Items.splice(indexNumber, 1);
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////////////////////
/*validation*/

$("#txtItemCode").focus();

// item reguler expressions
const itemCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{4,20}$/;
const qtyRegEx = /^[1-9/A-z. ,]{2,}$/;
const unitPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let itemValidations = [];
itemValidations.push({
    reg: itemCodeRegEx,
    field: $('#txtItemCode'),
    error: 'Item Code Pattern is Wrong : I00-001'
});
itemValidations.push({
    reg: itemNameRegEx,
    field: $('#txtItemName'),
    error: 'Item Name Pattern is Wrong : A-z 5-20'
});
itemValidations.push({
    reg: qtyRegEx,
    field: $('#txtQTY'),
    error: 'Item Quntity Pattern is Wrong : A-z 0-9 ,/'
});
itemValidations.push({
    reg: unitPriceRegEx,
    field: $('#txtUnitPrice'),
    error: 'Unit Price of item Pattern is Wrong : 100 or 100.00'
});


$("#txtItemCode,#txtItemName,#txtQTY,#txtUnitPrice").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


$("#txtItemCode,#txtItemName,#txtQTY,#txtUnitPrice").on('keyup', function (event) {
    checkValidityofItems();
});

$("#txtItemCode,#txtItemName,#txtQTY,#txtUnitPrice").on('blur', function (event) {
    checkValidityofItems();
});


$("#txtItemCode").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemCodeRegEx, $("#txtItemCode"))) {
        $("#txtItemName").focus();
    } else {
        focusItemText($("#txtItemCode"));
    }
});


$("#txtItemName").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemNameRegEx, $("#txtItemName"))) {
        focusItemText($("#txtQTY"));
    }
});


$("#txtQTY").on('keydown', function (event) {
    if (event.key == "Enter" && check(qtyRegEx, $("#txtQTY"))) {
        focusItemText($("#txtUnitPrice"));
    }
});


$("#txtUnitPrice").on('keydown', function (event) {
    if (event.key == "Enter" && check(unitPriceRegEx, $("#txtUnitPrice"))) {
        let res = confirm("Do you want to add this Item..?");
        if (res) {
            saveItem();
        }
    }
});

function checkValidityofItems() {
    let errorCount = 0;
    for (let validation of itemValidations) {
        if (checkItems(validation.reg, validation.field)) {
            textItemSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setItemTextError(validation.field, validation.error);
        }
    }
    setItemButtonState(errorCount);
}

function checkItems(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setItemTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textItemSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultItemText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusItemText(txtField) {
    txtField.focus();
}

function setItemButtonState(value) {
    if (value > 0) {
        $("#btnSaveItem").attr('disabled', true);
    } else {
        $("#btnSaveItem").attr('disabled', false);
    }
}

function clearAllItemTexts() {
    $("#txtItemCode").focus();
    $("#txtItemCode,#txtItemName,#txtQTY,#txtUnitPrice").val("");
    checkValidityofItems();
}



