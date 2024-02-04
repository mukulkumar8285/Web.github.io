let age = document.getElementById("age");
let button = document.getElementById("button");
let input = document.getElementById("input");

button.addEventListener("click" , function(){
    if(input.value ===""){
        alert("Please Enter Your Birthday!!!");
    }else{
        let val = calculateAge(input.value);
        age.innerHTML=val;
    }
});
function calculateAge(birthday){
    const curr = new Date();
    const birth = new Date(birthday);

    let output = curr.getFullYear()-birth.getFullYear();
    
    if(curr.getMonth()<birth.getFullYear()){
        output--;
    }
    return output;

}