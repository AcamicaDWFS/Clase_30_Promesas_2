let p1 = new Promise((resolve, reject) => {
    numberP1 = Math.floor(Math.random() * 100) + 1;
    console.log(numberP1);
    if (numberP1 > 50) {
        console.log("P1: El número es mayor a 50: " + numberP1);
        resolve("Éxito promesa1");
    } else {
        console.log("P1: El número es menor a 50: " + numberP1);
        reject("Rechazada promesa1");
    }
} );

let p2 = new Promise((resolve, reject) => {
    numberP2 = Math.floor(Math.random() * 100) + 1;
    console.log(numberP2);
    if (numberP2 > 50) {
        console.log("P2: El número es mayor a 50: " + numberP2);
        resolve("Éxito promesa2");
    } else {
        console.log("P2: El número es menor a 50: " + numberP2);
        reject("Rechazada promesa2");
    }
} );

let p3 = new Promise((resolve, reject) => {
    numberP3 = Math.floor(Math.random() * 100) + 1;
    console.log(numberP3);
    if (numberP3 > 50) {
        console.log("P3:El número es mayor a 50: " + numberP3);
        resolve("Éxito promesa3");
    } else {
        console.log("P3: El número es menor a 50: " + numberP3);
        reject("Rechazada promesa3");
    }
} );

Promise.all([p1, p2, p3]).then((resp) => {
    alert(resp + "\nPromesas aceptadas: Las tres promesas fueron éxitosas, superaron el número 50");
}, (err) => {
    alert(err + "\nPromesas rechazadas: al menos 1 promesa no superó el número 50");
});