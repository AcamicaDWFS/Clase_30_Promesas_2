let Num1 = new Promise((resolve, reject) => {
    getNum(resolve, reject);
});
let Num2 = new Promise((resolve, reject) => {
    getNum(resolve, reject);
});
let Num3 = new Promise((resolve, reject) => {
    getNum(resolve, reject);
});


function getNum(resolve, reject){
    let num = parseInt(Math.random() * 100) + 1;
    if( num > 50){
        resolve(num);
    } else {
        reject(num);
    }
}
Promise.all([Num1, Num2, Num3]).then(console.log).catch(console.error);