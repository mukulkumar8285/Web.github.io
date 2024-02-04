let originalValue = 0;

function Add_Qty() {
    let value = parseInt(document.querySelector("#number").value);
    value++;
    document.querySelector("#number").value = value;
    console.log(value);
}

function addToCart() {
    let currentValue = parseInt(document.getElementById("number").value);

    // Add the current quantity to the original value
    originalValue += currentValue;

    // Reset the value to zero
    document.getElementById("number").value = 0;

    // Display and log the updated total value
    document.getElementById("result1").innerHTML = originalValue * 100;
    console.log("Updated Total Value: " + originalValue);
}

// Repeat the same pattern for other items

// Example for item 1
function Add_Qty1() {
    let value = parseInt(document.querySelector("#number1").value);
    value++;
    document.querySelector("#number1").value = value;
    console.log(value);
}

function addToCart1() {
    let currentValue = parseInt(document.getElementById("number1").value);

    // Add the current quantity to the original value
    originalValue += currentValue;

    // Reset the value to zero
    document.getElementById("number1").value = 0;

    // Display and log the updated total value
    document.getElementById("result2").innerHTML = originalValue * 200;
    console.log("Updated Total Value: " + originalValue);
}

// Example for item 2
function Add_Qty2() {
    let value = parseInt(document.querySelector("#number2").value);
    value++;
    document.querySelector("#number2").value = value;
    console.log(value);
}

function addToCart2() {
    let currentValue = parseInt(document.getElementById("number2").value);

    // Add the current quantity to the original value
    originalValue += currentValue;

    // Reset the value to zero
    document.getElementById("number2").value = 0;

    // Display and log the updated total value
    document.getElementById("result3").innerHTML = originalValue * 300;
    console.log("Updated Total Value: " + originalValue);
}
