let pokeCtn = document.getElementById("pokeCtn");
console.info(pokeCtn);

//Array de 10 posiciones numéricas
let numbers = [200, 140, 390, 444, 577, 622, 004, 432, 099, 900];

//Tomar 3 elementos de forma aleatoria
let numb1 = numbers[Math.floor(Math.random()*numbers.length)];
console.log(numb1);
let numb2 = numbers[Math.floor(Math.random()*numbers.length)];
console.log(numb2);
let numb3 = numbers[Math.floor(Math.random()*numbers.length)];
console.log(numb3);

let arrayR = [numb1, numb2, numb3];


//Fetch información de 3 pokémones con la pokeapi endpoint "https://pokeapi.co/api/v2/pokemon/:id"
let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/" + numb1).then(response => response.json());
let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/" + numb2).then(response => response.json());
let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/" + numb3).then(response => response.json());
let pokemones = [fetchPoke1, fetchPoke2, fetchPoke3];

//Lanza 3 fetch al mismo Endpoint de Pokemon y muestra solamente la primera respuesta
Promise.race(pokemones).then((data) => {    
    console.log(data);    
    createCardPokemon(data);
}).catch((error) => {
    console.log(error);
    alert("\n¡No se encontró tu pokemón!");
});

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

