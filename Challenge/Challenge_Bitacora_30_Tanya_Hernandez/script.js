const p1 = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random(1) * 100);
    if(number > 50){
        console.log(number);
        resolve("Todas fueron mayor a 50");
    }else{
        console.log(number);
        reject("Al menos una fallo, fue menor a 50");
    }
});
const p2 = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random(1) * 100);
    if(number > 50){
        console.log(number);
        resolve("Todas fueron mayor a 50");
    }else{
        console.log(number);
        reject("Al menos una fallo, fue menor a 50");
    }
});
const p3 = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random(1) * 100);
    if(number > 50){
        console.log(number);
        resolve("Todas fueron mayor a 50");
    }else{
        console.log(number);
        reject("Al menos una fallo, fue menor a 50");
    }
});
Promise.all([p1, p2, p3]).then((resp) => {
    console.log(resp); // Logs [1,2,3]
}, (err) => {
    console.log(err); // Not executed
});

