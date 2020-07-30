
let pokeCtn = document.getElementById("pokeCtn");
console.info(pokeCtn);

let poke1 = document.getElementById("poke1");
poke1.setAttribute("type", "number");
let poke2 = document.getElementById("poke2");
poke2.setAttribute("type", "number");
let poke3 = document.getElementById("poke3");
poke3.setAttribute("type", "number");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Pokemón 1: " + poke1.value);
    console.log("Pokemón 2: " + poke2.value);
    console.log("Pokemón 3: " + poke3.value);

    validationP(poke1.value);
    validationP(poke2.value);
    validationP(poke3.value);


    let pokeF1 = fetch("https://pokeapi.co/api/v2/pokemon/" + poke1.value).then(response => response.json());
    let pokeF2 = fetch("https://pokeapi.co/api/v2/pokemon/" + poke2.value).then(response => response.json());
    let pokeF3 = fetch("https://pokeapi.co/api/v2/pokemon/" + poke3.value).then(response => response.json());


    pokeF1.then((poke1) => {
        createCardPokemon(poke1)
    }).then(() => {
        pokeF2.then((poke2) => {
            createCardPokemon(poke2)
        }).then(() => {
            pokeF3.then((poke3) => {
                createCardPokemon(poke3)
            })
        });
    });   
});

function validationP(pokemonInput) {
    if (pokemonInput > 800 || pokemonInput <= 0) {
        alert("El pokemón " + pokemonInput + " no existe, escoge un número entre 1 a 800");
    }
}

function createCardPokemon(pokemon) {
    let ctn = document.createElement("div");
    let name = document.createElement("h2");
    name.textContent = pokemon.name + " " + "#" + pokemon.id;
    let img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.front_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}