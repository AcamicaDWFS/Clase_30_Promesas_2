//Fetch información de 3 pokémones con la pokeapi endpoint "https://pokeapi.co/api/v2/pokemon/:id"
//Hacer un promise.all para esperar que se hagan todos los fetchs
//Imprimir en el DOM los 3 pokémones en orden alfabético de los nombres
//Información a poner en el DOM: Nombre, id e Imagen (está en sprites)

let pokeCtn = document.getElementById("pokeCtn");
console.info(pokeCtn);

//Fetch información de 3 pokémones con la pokeapi endpoint "https://pokeapi.co/api/v2/pokemon/:id"
let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/70").then(response => response.json());
let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/452").then(response => response.json());
let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/371").then(response => response.json());
let pokemones = [fetchPoke1, fetchPoke2, fetchPoke3];

//Hacer un promise.all para esperar que se hagan todos los fetchs
Promise.all(pokemones).then(data => {
    // Sort personalizado con callback mostrado en clase 28
    data.sort((a, b) => {
        return a - b;
    });
    console.info(data);
    for (let index = 0, pokeLength = data.length; index < pokeLength; index += 1) {
        createCardPokemon(data[index]);
        createCardPokemonBack(data[index]);
    }
}).catch(error => console.error("Error: ", error));

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

function createCardPokemonBack(pokemon) {
    let ctn = document.createElement("div");
    let name = document.createElement("h2");
    name.textContent = pokemon.name + " " + "#" + pokemon.id;
    let img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.back_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}