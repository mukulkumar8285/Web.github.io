for(let i=0;i<32;i++){
    let colorContainer = document.getElementById("div");
    colorContainer.classList.add("color-Container");
    //classlist.toggle
}
function randomcolor(){
    let str = "123456789abcdef";
    let colorstr ="#";
    for(let i=0;i<6;i++){
        let rendomindex = Math.floor(Math.random()*str.length)
        colorstr+=str[rendomindex];
    }
    return colorstr;
}