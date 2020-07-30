const getPromise = () =>
  new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 100) + 1;

    console.log(rand);

    rand > 50 ? resolve() : reject();
  });

const promise1 = getPromise();
const promise2 = getPromise();
const promise3 = getPromise();
const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then(() => {
    console.log("¡Éxito!");
    console.log("Todos los números son mayores a 50.");
  })
  .catch(() => {
    console.error("¡Error!");
    console.log("Por lo menos un número es menor a 50.");
  });
