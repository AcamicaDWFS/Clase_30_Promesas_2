/* Crea 3 promesas diferentes que tomen al azar
un número del 1 al 100.
Cuando las 3 promesas tienen el número al azar
mayor a 50 muestra un mensaje de éxito,
 de lo contrario muestra un mensaje que indique
 que al menos 1 promesa no superó el número 50. */

const primerPromesa = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random(1) * 100);
    if (rand > 50) {
        resolve(rand);
    } else (reject(rand));
});

const segundaPromesa = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random(1) * 100);
    if (rand > 50) {
        resolve(rand);
    } else (reject(rand));
});

const tercerPromesa = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random(1) * 100);
    if (rand > 50) {
        resolve(rand);
    } else (reject(rand));
});

Promise.all([primerPromesa, segundaPromesa, tercerPromesa])
    .then((result) => {
        console.log(`Todas las promesas son mayores a 50, siendo: ${result} los resultados`);
    })
    .catch((result) => {
        console.log(`Una o más promesas no son mayores a 50, siendo: ${result} el valor menor`);
    })