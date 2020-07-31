async function loadJson (url) {
    await fetch (url)
    .then
}

let pokeCtn = document.getElementById("pokeCtn");
console.info(pokeCtn);

let poke1 = document.getElementById("poke1");
let poke2 = document.getElementById("poke2");
let poke3 = document.getElementById("poke3");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Pokemón 1: " + poke1.value);
    console.log("Pokemón 2: " + poke2.value);
    console.log("Pokemón 3: " + poke3.value);

    validationPokemon(poke1.value);
    validationPokemon(poke2.value);
    validationPokemon(poke3.value);

    let pokeFetch1 = fetchPokemon(poke1.value);
    let pokeFetch2 = fetchPokemon(poke2.value);
    let pokeFetch3 = fetchPokemon(poke3.value);
  
function callPokemon (pokeFetch, poke) {
    pokeFetch.then((poke) => {
        createCardPokemon(poke)
    }).catch(error => {
        console.log("No se encontró dicho pokemón")
    });
}

callPokemon(pokeFetch1, poke1);
callPokemon(pokeFetch2, poke2);
callPokemon(pokeFetch3, poke3);
});

function fetchPokemon (pokeValue) {
    let poke = fetch("https://pokeapi.co/api/v2/pokemon/" + pokeValue).then(response => response.json());
    return poke;
}

function validationPokemon(pokemonInput) {
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