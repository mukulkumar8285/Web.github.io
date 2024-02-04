var btn = document.getElementById("btn");
btn.addEventListener("click", clickHandler);
var p = document.querySelector("p");
function clickHandler() {
    //Fatch The Joke Via API

    let joke = "";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit=1");
    xhr.setRequestHeader("X-Api-Key", "iaWr4QmLKGqWL16AscLLcg==8rCWmO3xTnMBRpMz");
    xhr.send();
    btn.innerText = "LOADING...."
    btn.style.background = "green";
    btn.style.color = "white";
    xhr.onload = function () {
        if (xhr.status == 200) {
            const result = JSON.parse(xhr.responseText);
            joke = result[0].joke;
            console.log(joke);
            btn.style.background = "rgba(255,255,255,.3)";
            btn.style.color ="rgb(0,100,0)";
            p.innerText = joke;
            btn.innerText = "TELL ME A JOKE";
        }
    };

    //Update The Joke Inside API
}