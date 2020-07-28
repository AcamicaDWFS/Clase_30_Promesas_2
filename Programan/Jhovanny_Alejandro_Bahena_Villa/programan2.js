/** Cambia uno de los elementos de tu array a un
valor tipo string.
Repite el proceso: toma de manera aleatoria 3 elementos.
Lanza 3 fetch al mismo Endpoint de Pokemon y muestra
los siguientes resultados:
- Si los 3 request finalizaron correctamente, muestra
los resultados por pantalla.
- Si algún request falló (te tocó el valor string en la
elección aleatoria), muestra un error por pantalla.
 */

const randomIndex = () => {
    return Math.floor(Math.random() * 10);
};

const urlPoke = 'https://pokeapi.co/api/v2/pokemon';
const arrNumbers = [1, 2, 3, 4, 'poke bug', 6, 7, 8, 9, 10];

const randomElement1 = arrNumbers[randomIndex()];
const randomElement2 = arrNumbers[randomIndex()];
const randomElement3 = arrNumbers[randomIndex()];

let fetchToPoke1 = fetch(`${urlPoke}/${randomElement1}`).then(response => response.json());
let fetchToPoke2 = fetch(`${urlPoke}/${randomElement2}`).then(response => response.json());
let fetchToPoke3 = fetch(`${urlPoke}/${randomElement3}`).then(response => response.json());

const pokeArray = [fetchToPoke1, fetchToPoke2, fetchToPoke3];

Promise.all(pokeArray)
.then(response => console.log(response))
.catch(err => console.log(`Se obtuvo el siguiente poke error ${err}`));