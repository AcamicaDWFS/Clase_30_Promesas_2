//ejemplo promise.all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(12221211);
    }, 200);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(12121211);
    }, 200);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(12111211);
    }, 200);
});
Promise.all([p1, p2, p3]).then((resp) => {
    console.log(resp);
}, (err) => {
    console.log(err); 
}); 

// ejemplo promesa encadenada

new Promise((resolver, rechazar) => {
    console.log('Inicial');
    
    resolver();
})
.then(() => {
    throw new Error('Algo falló');
    
    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz aquello');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});

// ejemplo promise race

const foo = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(reject, 111, '🍏')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
    ];

    Promise.race(foo)
    .then(console.log)
    .catch(console.log);


    