async function fetchOnePockemon(url) {
    const response = await fetch(url);
    const data = await response.json();

    const pokemonData = {
        name: data.name,
        types: data.types.map(elem => elem.type.name), // Corrected this line
        front_pic: data.sprites.front_default,
        back_pic: data.sprites.back_default,
        abilities: data.abilities.map(elem => elem.ability.name)
    };

    return pokemonData;
}

var allpokemonData = [];

async function fetchAllPokemon() {
    const nums = 151;
    for (let i = 1; i <= nums; i++) {
        const data = await fetchOnePockemon(`https://pokeapi.co/api/v2/pokemon/${i}`);
        // allpokemonData.push("#"+i);
        allpokemonData.push(data);
    }
    return allpokemonData;
}

async function DisplyPokeMon() {
    const allpokemonData = await fetchAllPokemon();
    const div = document.createElement("div");
    div.id = "maindiv";

    var count = 1;

    

    allpokemonData.forEach(pokemonData => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.id = 'divId';
        count++;

        const ImagePokemon = document.createElement('img');
        ImagePokemon.src = pokemonData.front_pic; // Corrected this line
        pokemonDiv.appendChild(ImagePokemon);



        const nameParagraph = document.createElement('p');
        nameParagraph.id = "front_text";
        nameParagraph.textContent = Upper_Case(pokemonData.name);
        pokemonDiv.appendChild(nameParagraph);



        function Upper_Case(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }


        const typesParagraph = document.createElement('p');
        typesParagraph.textContent = Upper_Case(pokemonData.types.join(', ')); // Corrected this line
        pokemonDiv.appendChild(typesParagraph);
        typesParagraph.id = "background";
        pokemonDiv.style.backgroundColor = ChangeBackground(pokemonData.types);
        // typesParagraph.style.backgroundColor = ChangeBackground(pokemonData.types);
    

        function ChangeBackground(types) {
            if (types.includes("water")) {
                return pokemonDiv.style.backgroundColor = "#4F98C7";
            } else if (types.includes("fire")) {
                return pokemonDiv.style.backgroundColor = "#FD842F";
            } else if (types.includes("grass")) {
                return pokemonDiv.style.backgroundColor = "#A0CF59";
            } else if (types.includes("normal")) {
                return pokemonDiv.style.backgroundColor = "#A9B0B3";
            } else if (types.includes("electric" && "ground")) {
                return pokemonDiv.style.backgroundColor = "#EFD73F";
            } else if (types.includes("bug")) {
                return pokemonDiv.style.backgroundColor = "#79A449";
            } else if (types.includes("poison")) {
                return pokemonDiv.style.backgroundColor = "#BD86CC";
            } else if (types.includes("fairy")) {
                return pokemonDiv.style.backgroundColor = "#FDBDEA";
            } else if (types.includes("fighting")) {
                return pokemonDiv.style.backgroundColor = "#D76F2E";
            } else if (types.includes("psychic")) {
                return pokemonDiv.style.backgroundColor = "#F46EBD";
            } else if (types.includes("rock")) {
                return pokemonDiv.style.backgroundColor = "#A8922C";
            } else if (types.includes("ghost")) {
                return pokemonDiv.style.backgroundColor = "#826AA8";
            } else if (types.includes("ice")) {
                return pokemonDiv.style.backgroundColor = "#5AC7E8";
            } else if (types.includes("ice")) {
                return pokemonDiv.style.backgroundColor = "#5AC7E8";
            } else if (types.includes("dragon")) {
                return pokemonDiv.style.backgroundColor = "#DCAA2B";
            }

        }
        const abilities = document.createElement("p");
        abilities.textContent = `abilities ${pokemonData.abilities}`;
        pokemonDiv.appendChild(abilities);
        abilities.id = "Text_Abilities";

        div.appendChild(pokemonDiv);
        console.log(pokemonDiv);
    });

    document.body.appendChild(div);
}

DisplyPokeMon();


async function fetchPokemonType(typeName) {
    const response = await fetch(typeName);
    const data = await response.json();

    const pokemonType = {
        name: data.name,
        // Add other properties as needed
    };
    return pokemonType;
    // console.log(pokemonType);
}

var allTypesList = [];

async function Type_fetch() {
    let types = 18;
    for (let i = 1; i <= types; i++) {
        const data = await fetchPokemonType(`https://pokeapi.co/api/v2/type/${i}`);
        allTypesList.push(data);


        const dropDown = document.getElementById("Drop_Down");
        const option = document.createElement("option");
        option.text = data.name;
        dropDown.add(option);

    }
    console.log(allTypesList);
}
Type_fetch();



