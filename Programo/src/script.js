const fooResolve = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(resolve, 333, '🍓')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
];

Promise.all(fooResolve)
    .then(console.log)
    .catch(console.log);

const fooReject = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(reject, 333, '🍏')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
];

Promise.all(fooReject)
    .then(console.log)
    .catch(console.log);

const fooRaceResolve = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(resolve, 333, '🍏')),
    new Promise((resolve, reject) => setTimeout(reject, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
];

Promise.race(fooRaceResolve)
    .then(console.log)
    .catch(console.log);

const fooRaceReject = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '🥝')),
    new Promise((resolve, reject) => setTimeout(reject, 333, '🍏')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '🍍')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '🍇'))
];

Promise.race(fooRaceReject)
    .then(console.log)
    .catch(console.log);

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.info(result); // 1
    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) { // (**)
    console.info(result); // 2
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.info(result); // 4
});



