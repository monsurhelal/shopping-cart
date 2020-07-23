//plus button click event phone
const addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click",function() {
    var currentitem = document.getElementById("currentitem").value;
    var currentitemNumber = parseFloat(currentitem);
    currentitem = currentitemNumber + 1;
    document.getElementById("currentitem").value = currentitem;
    const price = document.getElementById("currentPrice").innerText;
    const priceNumber = parseFloat(price);
    const newPrice = priceNumber + 1219;

    const itemPrice = document.getElementById("currentPrice").innerText = newPrice;

    const subtotal = document.getElementById("subtotal").innerText;
    const subtotalNum = parseFloat(subtotal);
    const totalPrice = subtotalNum + 1219;
    document.getElementById("subtotal").innerText = totalPrice;


    const total = document.getElementById("total").innerText;
    const totalNum = parseFloat(total);
    const totalAmount = totalNum + 1219;
    document.getElementById("total").innerText = totalAmount;

});

//minus button click event phone

const removebutton = document.getElementById("removebutton");
removebutton.addEventListener("click",function() {
    var currentitem = document.getElementById("currentitem").value;
    var currentitemNumber = parseFloat(currentitem);
    currentitem = currentitemNumber - 1;
    document.getElementById("currentitem").value = currentitem;
    const price = document.getElementById("currentPrice").innerText;
    const priceNumber = parseFloat(price);
    const newPrice = priceNumber - 1219;
    itemPrice = document.getElementById("currentPrice").innerText = newPrice;

    const subtotal = document.getElementById("subtotal").innerText;
    const subtotalNum = parseFloat(subtotal);
    const totalPrice = subtotalNum - 1219;
    document.getElementById("subtotal").innerText = totalPrice;


    const total = document.getElementById("total").innerText;
    const totalNum = parseFloat(total);
    const totalAmount = totalNum - 1219;
    document.getElementById("total").innerText = totalAmount;

});

// plus button click event case

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(){
    const currentValue = document.getElementById("currentValue").value;
    const currentValueNumber = parseFloat(currentValue);
    const newCurrentValue = currentValueNumber + 1;
    document.getElementById("currentValue").value = newCurrentValue;
    const price = document.getElementById("price").innerText;
    const priceNumber = parseFloat(price);
    const newPriceNumber = priceNumber + 59;
    itemPrice = document.getElementById("price").innerText= newPriceNumber;

    const subtotal = document.getElementById("subtotal").innerText;
    const subtotalNum = parseFloat(subtotal);
    const totalPrice = subtotalNum + 59;
    document.getElementById("subtotal").innerText = totalPrice;

    const subtotalPlus = document.getElementById("total").innerText;
    const subtotalNumPlus = parseFloat(subtotalPlus);
    const totalPricePlus = subtotalNumPlus + 59;
    document.getElementById("total").innerText = totalPricePlus;
});

// minus button click event case

const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click",function(){
    const currentValue = document.getElementById("currentValue").value;
    const currentValueNumber = parseFloat(currentValue);
    const newCurrentValue = currentValueNumber - 1;
    document.getElementById("currentValue").value = newCurrentValue;
    const price = document.getElementById("price").innerText;
    const priceNumber = parseFloat(price);
    const newPriceNumber = priceNumber - 59;
    itemPrice = document.getElementById("price").innerText= newPriceNumber;

    const subtotal = document.getElementById("subtotal").innerText;
    const subtotalNum = parseFloat(subtotal);
    const totalPrice = subtotalNum - 59;
    document.getElementById("subtotal").innerText = totalPrice;

    const subtotalPlus = document.getElementById("total").innerText;
    const subtotalNumPlus = parseFloat(subtotalPlus);
    const totalPricePlus = subtotalNumPlus - 59;
    document.getElementById("total").innerText = totalPricePlus;
});

