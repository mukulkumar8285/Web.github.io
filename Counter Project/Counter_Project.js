function increment(){
    let value  = parseInt(document.getElementById("number").value,10);
    value++;
    document.getElementById("number").value = value;
    console.log(value);

}
function decrement(){
    let dec = parseInt(document.getElementById("number").value);
    dec--;
    document.getElementById("number").value=dec;
    console.log(dec);
}
function submitValue() {
    let currentValue = parseInt(document.getElementById("number").value);
    let osiginalValue = currentValue;
    document.getElementById("number").value = 0;
    document.getElementById("result").innerText = "Result: " + osiginalValue;
    console.log("Result: " + osiginalValue);
  }
