/********************************************************************************************************
 
Here I am Fetch API >>>>>>>>>>>>>>>>>>>>

****************************************************************************************************** */
async function SearchImage(){
const my_url = "UixsqNPFiP_VfxnzZ005M9GcaY2wLUOs3QTXlLsNq-c";

const query = document.querySelector("#Search").value;

const url = "https://api.unsplash.com/search/photos?client_id=" + my_url + "&query=" + query;


const response = await fetch(url)

const data = await response.json();

console.log(data);

let result = document.createElement("div");;

data.results.forEach(element => {
/**********************************************************************************
 * 
 * Here Is a Two Way To Do This Task ---------- One Way Is This..................
 * 
 ********************************************************************************** */


    
    // result += `<div>
    // <img src = "${element.urls.regular}" alt = "${element.alt_description}">
    // <span>${element.alt_description}</span>  </div>`



/**********************************************************************************
 * 
 * Other Way To do This Task.......................................................
 * 
 ********************************************************************************** */



    const divouter = document.createElement("div");
    const image = document.createElement("img");
    image.src = `${element.urls.regular}`; 
    imagealt=`${element.alt_description}`;
   
    divouter.appendChild(image);

    result.appendChild(divouter);

});
/*********************************************************************************
 * 
 * First Way.................
 * 
 * ****************************************************************************** */

// document.querySelector("#StoreImage").innerHTML = result;


/**********************************************************************************
 * 
 * Other Way To Do This Task........................................
 * 
 **********************************************************************************/


document.getElementById("StoreImage").appendChild(result);

console.log(result);

}