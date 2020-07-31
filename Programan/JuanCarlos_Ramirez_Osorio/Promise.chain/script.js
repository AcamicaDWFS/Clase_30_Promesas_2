/* Genera una interfaz donde haya 3
inputs y un botón de buscar.
Valida que los 3 inputs estén completos y sean
numéricos al momento de presionar buscar.
Busca el pokemon del ID del primer input recién
cuando finalice busca el segundo. Haz lo mismo
con el tercero.
Lanza cada una de las llamadas cuando estés
seguro/a que la anterior finalizó. */


let pokeBtn = document.getElementById('searchBtn');

pokeBtn.addEventListener('click', () => {

    let pokeInput1 = document.getElementById('textCtn1').value;
    let pokeInput2 = document.getElementById('textCtn2').value;
    let pokeInput3 = document.getElementById('textCtn3').value;

    let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/" + pokeInput1).then(response => response.json());
    let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/" + pokeInput2).then(response => response.json());
    let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/" + pokeInput3).then(response => response.json());

    fetchPoke1
        .then((resolved) => {
            createCardPokemon(resolved);
        })
        .then(() => {
            fetchPoke2.then((resolved) => {
                createCardPokemon(resolved);
            })
        })
        .then(() => {
            fetchPoke3.then((resolved) => {
                createCardPokemon(resolved);
            })
        })
        .catch(() => {
            console.error('Se ha generado un error.')
        })

    while (pokeCtn.firstChild) {
        pokeCtn.removeChild(pokeCtn.firstChild);
    }
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