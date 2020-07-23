// 3 promesas con números aleatorios
let n1 = Math.floor(Math.random() * 100) + 1;
let n2 = Math.floor(Math.random() * 100) + 1;
let n3 = Math.floor(Math.random() * 100) + 1;

const number1 = new Promise ((resolve, reject) => {
    if(n1 > 50){
        resolve("Número mayor a 50 :D");
    } else{
        reject("No superaste los 50 :(");
    } console.log(n1)
});
const number2 = new Promise ((resolve, reject) => {
    if(n2 > 50){
        resolve("Número mayor a 50 :D");
    } else{
        reject("No superaste los 50 :(");
    } console.log(n2)
});
const number3 = new Promise ((resolve, reject) => {
    if(n3 > 50){
        resolve("Número mayor a 50 :D");
    } else{
        reject("No superaste los 50 :(");
    } console.log(n3)
});
Promise.all([number1, number2, number3]).then((response) => {
    console.log(response);
}, (error) => {
    console.error("Al menos 1 número no fue mayor a 50 :(");
});
