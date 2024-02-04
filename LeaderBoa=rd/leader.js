let PlayersList1 = [];
let selectedPlayerIndex = null;
function addPlayer(event) {
    event.preventDefault();

    let playerStart = document.getElementById("player-list");
    let firstName1 = document.getElementById("first-name").value;
    let lastName1 = document.getElementById("last-name").value;
    let country1 = document.getElementById("country").value;
    let Score1 = document.getElementById("score").value;
    const playerDate = {
        name: firstName1 + " " + lastName1,
        country: country1,
        score: Score1
        
    }
    PlayersList1.push(playerDate);
    PlayersList1.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score))


    for (let index = 0; index < PlayersList1.length; index++) {
        const player = PlayersList1[index];

        const liEl = document.getElementById("li")
        const firstName2 = document.createElement("span")
        const countryName1 = document.createElement("span")
        const Score2 = document.createElement("span")
        const Increment1 = document.createElement("button")
        const decreaseScore1 = document.createElement("button")
        const del = document.createElement("button");


        Increment1.innerText = "+5";
        decreaseScore1.innerText = "-5";
        del.innerText = "Del";

        Increment1.setAttribute("onclick", `increaseScoreHandler(${index})`);
        decreaseScore1.setAttribute("onclick", `decreaseScore12(${index})`);
        del.setAttribute("onclick", Taskdelete());

        firstName2.innerText = player.name;
        countryName1.inert = player.country;
        Score2.innerText = player.score;

        liEl.append(firstName2 , countryName1 , Score2 , Increment1, decreaseScore1 , del);

        playerStart.append(liEl);
        




    }

}

function refreshList(){
const PlayerList1 = document.getElementById("player-list");

    PlayersList1.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score))


    for (let index = 0; index < PlayersList1.length; index++) {
        const player = PlayersList1[index];

        const liEl = document.getElementById("li")
        const firstName2 = document.createElement("span")
        const countryName1 = document.createElement("span")
        const Score2 = document.createElement("span")
        const Increment1 = document.createElement("button")
        const decreaseScore1 = document.createElement("button")
        const del = document.createElement("button");


        Increment1.innerText = "+5";
        decreaseScore1.innerText = "-5";
        del.innerText = "Del";

        Increment1.setAttribute("click", increaseScoreHandler());
        decreaseScore1.setAttribute("click", decreaseScore12());
        del.setAttribute("click", Taskdelete());


        firstName2.innerText = player.name;
        countryName1.inert = player.country;
        Score2.innerText = player.score;

        liEl.append(firstName2 , countryName1 , Score2 , Increment1, decreaseScore1 , del);

        playerStart.append(liEl);
        




    }
}

function increaseScoreHandler(){

}
function decreaseScore12(){

}
function Taskdelete(){

}