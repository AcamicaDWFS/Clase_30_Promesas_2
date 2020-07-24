const firstRandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
    }, 100);
});
const secondRandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
    }, 200);
});
const thirdRandomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
    }, 300);
});

Promise.all([firstRandomNumber, secondRandomNumber, thirdRandomNumber])
    .then((res) => {
        let success = true;
        for (let number of res) {
            console.log('number: ', number);
            if (number <= 50) {
                success = false;
            }
        }
        if (success != false) {
            console.warn('¡La fuerza está contigo!');
        } else {
            throw new Error('¡Suerte para la próxima! Uno o más de los valores no fue mayor a 50.');
        }
    })
    .catch((err) => {
        console.error(err.message);
    });