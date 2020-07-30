//Función para obtener un número aleatorio
function randomNumber(numb) {
    numb = Math.floor(Math.random() * 100) + 1;
    return numb;
}

//Función que devuelva una promise

function promiseNumbers(numberP, PromiseN) {
    let prom = new Promise((resolve, reject) => {
        numberP = randomNumber();
        console.log(numberP);
        if (numberP > 50) {
            console.log(PromiseN + "\nEl número es MAYOR a 50: " + numberP);
            resolve("Éxitosa " + PromiseN);
        } else {
            console.log(PromiseN + "\nEl número es MENOR a 50: " + numberP);
            reject("Rechazada " + PromiseN);
        }
    })
    return prom;
}

let numberP1;
let Promesa1 = "Promesa 1";
let p1 = promiseNumbers(numberP1, Promesa1);

let numberP2;
let Promesa2 = "Promesa 2";
let p2 = promiseNumbers(numberP2, Promesa2);

let numberP3;
let Promesa3 = "Promesa 3";
let p3 = promiseNumbers(numberP3, Promesa3);

Promise.all([p1, p2, p3]).then((resolveFunction) => {
    alert(resolveFunction + "\nPromesas aceptadas: Las tres promesas fueron éxitosas, superaron el número 50");
}).catch((rejectFunction) => {
    alert(rejectFunction + "\nPromesas rechazadas: al menos 1 promesa no superó el número 50");
});