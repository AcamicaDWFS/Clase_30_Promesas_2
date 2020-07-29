function getRandPos() {
  const positions = [10, 13, 70, 84, 2, 45, 24, 293, 9, 129];
  const index = Math.floor(Math.random() * positions.length);

  return positions[index];
}

const fetchPoke = (pokeNum) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong. Try another number...");
      }

      return res.json();
    })
    .catch((error) => console.error(error));

const poke1 = fetchPoke(getRandPos());
const poke2 = fetchPoke(getRandPos());
const poke3 = fetchPoke(getRandPos());
const pokemons = [poke1, poke2, poke3];

Promise.race(pokemones).then((value) => {
  console.info(value);
});
