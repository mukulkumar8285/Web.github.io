function findemoji(){
    let inputvalue = document.getElementById("input_text").value;
    findresult(inputvalue);
}
function findresult(qure=""){
    let filterData = emojiList.filter((e)=>{
        if(e.description.indexOf(qure) != -1){
            return true;
        }
        if(e.tags.some(elem=>elem.startsWith(qure))){
            return true;
        }
        if(e.aliases.some(elem=>elem.startsWith(qure))){
            return true;
        } 
    })
    console.log(filterData);
    let parent = document.getElementById("search");
    console.log(parent);
    parent.innerHTML="";


    filterData.forEach((e)=>{
        let row = document.createElement("tr");
        let emoji = document.createElement("td");
        let alise = document.createElement("td");
        let dese = document.createElement("td");
        
        emoji.innerText = e.emoji;
        alise.innerText = e.aliases;
        dese.innerText= e.description;

        row.appendChild(emoji);
        row.appendChild(alise);
        row.appendChild(dese);
        parent.append(row);
    });
}
document.getElementById("input_text").addEventListener("keyup" , findemoji)
window.onload= ()=>findresult();