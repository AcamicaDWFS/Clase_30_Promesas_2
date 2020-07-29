function filledInputs() {
  return input1.value !== "" && input2.value !== "" && input3.value !== "";
}

function validInput(input) {
  input = parseInt(input);

  return isNaN(input) ? false : true;
}

function resetInputs() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

const fetchPoke = (pokeNum) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`).then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong.");
    }

    return res.json();
  });

const input1 = document.querySelector("#poke1");
const input2 = document.querySelector("#poke2");
const input3 = document.querySelector("#poke3");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (filledInputs()) {
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    if (validInput(value1) && validInput(value2) && validInput(value3)) {
      const poke = fetchPoke(value1);

      poke
        .then((pokeInfo) => {
          console.info(pokeInfo);

          return fetchPoke(value2);
        })
        .then((pokeInfo) => {
          console.info(pokeInfo);

          return fetchPoke(value3);
        })
        .then((pokeInfo) => {
          console.info(pokeInfo);
        })
        .catch((error) => console.error(error));

      resetInputs();
    } else {
      console.error("Verifica que todas las entradas sean numéricas.");
    }
  } else {
    console.error("Todas las entradas deben contener un número.");
  }
});
