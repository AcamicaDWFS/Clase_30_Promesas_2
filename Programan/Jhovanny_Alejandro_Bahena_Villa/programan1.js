/** Genera un array con 10
posiciones numéricas.
Toma de manera aleatoria 3 elementos.
Lanza 3 fetch al mismo Endpoint de Pokemon y
muestra solamente la primera respuesta.


https://pokeapi.co/api/v2/pokemon/ + (número entero)
 */

const randomIndex = () => {
    return Math.floor(Math.random() * 10);
};

urlPoke = 'https://pokeapi.co/api/v2/pokemon';
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

randomElement1 = arrNumbers[randomIndex()];
randomElement2 = arrNumbers[randomIndex()];
randomElement3 = arrNumbers[randomIndex()];

let fetchToPoke1 = fetch(`${urlPoke}/${randomElement1}`).then(response => response.json());
let fetchToPoke2 = fetch(`${urlPoke}/${randomElement2}`).then(response => response.json());
let fetchToPoke3 = fetch(`${urlPoke}/${randomElement3}`).then(response => response.json());

const pokeArray = [fetchToPoke1, fetchToPoke2, fetchToPoke3];

Promise.race(pokeArray)
.then(response => console.log(response))
.catch(err => console.log(`Se obtuvo el siguiente poke error ${err}`));