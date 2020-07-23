const promise1 = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 100) + 1;

  console.log(rand);

  if (rand > 50) {
    resolve();
  } else {
    reject();
  }
});

const promise2 = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 100) + 1;

  console.log(rand);

  if (rand > 50) {
    resolve();
  } else {
    reject();
  }
});

const promise3 = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 100) + 1;

  console.log(rand);

  if (rand > 50) {
    resolve();
  } else {
    reject();
  }
});

Promise.all([promise1, promise2, promise3])
  .then(() => {
    console.log("¡Éxito!");
    console.log("Todos los números son mayores a 50.");
  })
  .catch(() => {
    console.error("¡Error!");
    console.log("Por lo menos un número es menor a 50.");
  });
