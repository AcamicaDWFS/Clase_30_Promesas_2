/** Genera una interfaz donde haya 3
inputs y un botón de buscar.
Valida que los 3 inputs estén completos y sean
numéricos al momento de presionar buscar.
Busca el pokemon del ID del primer input recién
cuando finalice busca el segundo. Haz lo mismo
con el tercero.
Lanza cada una de las llamadas cuando estés
seguro/a que la anterior finalizó.
 */

const callPokes = () => {
    urlPoke = 'https://pokeapi.co/api/v2/pokemon';

    const inValue1 = in1.value;
    const inValue2 = in2.value;
    const inValue3 = in3.value;

    const endpoint1 = `${urlPoke}/${inValue1}`;
    const endpoint2 = `${urlPoke}/${inValue2}`;
    const endpoint3 = `${urlPoke}/${inValue3}`;

    fetch(endpoint1).then(response => response.json()).then(response => console.log(response))
    .then( () => fetch(endpoint2).then(response => response.json())).then(response => console.log(response))
    .then( () => fetch(endpoint3).then(response => response.json())).then(response => console.log(response))
    .catch(err => console.log(`Hubo un poke error ${err}`));
};

const in1 = document.getElementById('in1');
const in2 = document.getElementById('in2');
const in3 = document.getElementById('in3');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', callPokes);



