/* Genera un array con 10
posiciones numéricas.
Toma de manera aleatoria 3 elementos.
Lanza 3 fetch al mismo Endpoint de Pokemon y
muestra solamente la primera respuesta. */

let numArray = [];
for (var i = 0, t = 10; i < t; i++) {
    numArray.push(Math.floor(Math.random() * 1000))
};
console.log(numArray);

let firstElement = numArray[Math.floor(Math.random() * numArray.length)];
let secondElement = numArray[Math.floor(Math.random() * numArray.length)];
let thirdElement = numArray[Math.floor(Math.random() * numArray.length)];

let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/" + firstElement).then(response => response.json());
let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/" + secondElement).then(response => response.json());
let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/" + thirdElement).then(response => response.json());

Promise.race([fetchPoke1, fetchPoke2, fetchPoke3])
    .then((resolve) => {
        console.log(resolve);
        createCardPokemon(resolve)
    })
    .catch(() => {
        console.log('Error, no existe ese pokemon');
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