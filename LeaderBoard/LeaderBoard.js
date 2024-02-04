const PlayerList1 = []
let selectedPlayerIndex = null;

function addPlayer(event) {

    event.preventDefault()

/********************************************************************************************************************* 
 
 Here I am getting a id Of a Element  @param playerList

*********************************************************************************************************************/
    const playerList = document.getElementById('player-list')
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const country = document.getElementById('country').value
    const score = document.getElementById('score').value


/*******************************************************************************************************************
* 
* Here I am Create a Key And Value & Object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
* 
**************************************************************************************************************** */

    const playerData = {
        name: firstName + " " + lastName,
        country: country,
        score: Number(score)
    }

    PlayerList1.push(playerData)
    PlayerList1.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score))

    playerList.innerHTML = ''
    for (let index = 0; index < PlayerList1.length; index++) {
        const player = PlayerList1[index];
        
        const liEl = document.createElement('li')
        const nameContent = document.createElement('span')
        const countryContent = document.createElement('span')
        const curentScore = document.createElement('span')
        const increaseScore = document.createElement('button')
        const decreaseScore = document.createElement('button')

        increaseScore.innerText = '+5'
        decreaseScore.innerText = '-5'
        increaseScore.setAttribute('onclick', `increaseScoreHandler(${index})`)
        decreaseScore.setAttribute('onclick', `decreaseScoreHandler(${index})`)

        // liEl.dataset.index = index; // Set a data attribute to identify the index

        liEl.addEventListener('click', function() {
            selectedPlayerIndex = index;
            refreshList();
        });
       
        curentScore.innerText = player.score
        countryContent.innerText = player.country
        nameContent.innerText = player.name

        liEl.append(nameContent, countryContent, curentScore, increaseScore, decreaseScore)
        playerList.append(liEl)

/*************************************************************************************************************************

Here I am Add A styling Of Text A Background Color In Add Text Input

*************************************************************************************************************************/

        liEl.style.backgroundColor = 'lightgreen';
        liEl.style.marginBottom = "15px";
        liEl.style.height = "90px" ;
        increaseScore.style.background = "none";
        increaseScore.style.border = "none";
        increaseScore.style.marginRight = "10px";
        decreaseScore.style.background = "none";
        decreaseScore.style.border = "none";
        liEl.style.boxShadow =  "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.30)";

    }
}

function refreshList() {

    const playerList = document.getElementById('player-list')
    PlayerList1.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score))

    playerList.innerHTML = ''
    for (let index = 0; index < PlayerList1.length; index++) {
        const player = PlayerList1[index];

        const liEl = document.createElement('li')
        const nameContent = document.createElement('span')
        const countryContent = document.createElement('span')
        const curentScore = document.createElement('span')

        const increaseScore = document.createElement('button')
        const decreaseScore = document.createElement('button')

        increaseScore.innerText = '+5'
        decreaseScore.innerText = '-5'
        increaseScore.setAttribute('onclick', `increaseScoreHandler(${index})`)
        decreaseScore.setAttribute('onclick', `decreaseScoreHandler(${index})`)

        curentScore.innerText = player.score
        countryContent.innerText = player.country
        nameContent.innerText = player.name

        liEl.append(nameContent, countryContent, curentScore, increaseScore, decreaseScore)
        playerList.append(liEl)


    
/*************************************************************************************************************************

Here I am Add A styling Of Text A Background Color In Add Text Input When I am click A +5 Button To apply Same Styling

*************************************************************************************************************************/
        liEl.style.backgroundColor = 'lightgreen';
        liEl.style.marginBottom = "15px";
        liEl.style.height = "90px" ;
        increaseScore.style.background = "none";
        increaseScore.style.border = "none";
        increaseScore.style.marginRight = "10px";
        decreaseScore.style.background = "none";
        decreaseScore.style.border = "none";
        liEl.style.boxShadow =  "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.30)";



/*************************************************************************************************************************/

    }
}


/*************************************************************************************************************************
 
Here I am Perform Increment & Decrement Operation ......................................................
 
**************************************************************************************************************************/
function increaseScoreHandler(index) {
    PlayerList1[index].score += 5
    refreshList()
}

function decreaseScoreHandler(index) {
    PlayerList1[index].score -= 5
    refreshList()
}

/***************************************************************************************************************************/

