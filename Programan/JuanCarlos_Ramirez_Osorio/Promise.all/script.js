/* Cambia uno de los elementos de tu array a un
valor tipo string. Repite el proceso:
toma de manera aleatoria 3 elementos.
Lanza 3 fetch al mismo Endpoint de Pokemon y muestra
los siguientes resultados:
-Si los 3 request finalizaron correctamente, muestra
los resultados por pantalla.
-Si algún request falló (te tocó el valor string en la
elección aleatoria), muestra un error por pantalla.
*/

let numArray = [10, 50, 30, 65, 'n', 250, 81, 99, 180, 800];
console.log(numArray);

let firstElement = numArray[Math.floor(Math.random() * numArray.length)];
console.log(firstElement);
let secondElement = numArray[Math.floor(Math.random() * numArray.length)];
console.log(secondElement);
let thirdElement = numArray[Math.floor(Math.random() * numArray.length)];
console.log(thirdElement);

let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/" + firstElement).then(response => response.json());
let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/" + secondElement).then(response => response.json());
let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/" + thirdElement).then(response => response.json());

const pokeArray = [fetchPoke1, fetchPoke2, fetchPoke3];

console.info(pokeArray);

Promise.all(pokeArray)
    .then((resolve) => {
        for (let index = 0, pokeLength = resolve.length; index < pokeLength; index += 1) {
            createCardPokemon(resolve[index]);
        };
    })
    .catch(() => {
        alert('Error, una promesa no se cumplió');
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