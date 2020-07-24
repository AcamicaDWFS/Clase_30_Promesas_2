const ELEMENTS = [10,1,2,3,4,5,6,7,'a',9];
const API = 'https://pokeapi.co/api/v2/pokemon/';
const RACE = document.getElementById('race');
const ALL = document.getElementById('all');
const BUTTON = document.getElementById('buscar');
const POKE1 = document.getElementById('poke1');
const POKE2 = document.getElementById('poke2');
const POKE3 = document.getElementById('poke3');

let petitions = [];
let dirs = [];


function getThree() {
    for(let i = 0; i < 3; i++){
        let temp = parseInt(Math.random() * 10);
        let prom = fetch(API + ELEMENTS[temp]);
        petitions.push(prom);
        dirs.push(API + ELEMENTS[temp]);
    }
}

function insert(poke, type = true){
    let name = document.createElement('h1');
    name.innerText = poke.name.toUpperCase();
    let img = document.createElement('img');
    img.src = poke.sprites.front_default;
    if( type ){
        RACE.appendChild(name);
        RACE.appendChild(img);
    } else {
        ALL.appendChild(name);
        ALL.appendChild(img);
    }
}

function noFound(err){
    let message = document.createElement('h1');
    message.style.color = '#ff0000';
    message.innerText = err;
    ALL.appendChild(message);
}

function buscar(){
    let pattern = /^[0-9]+$/;
    let tem = POKE1.value;
    let valid1 = pattern.test(POKE1.value) ? parseInt(POKE1.value) : null
    let valid2 = pattern.test(POKE2.value) ? parseInt(POKE2.value) : null
    let valid3 = pattern.test(POKE3.value) ? parseInt(POKE3.value) : null
    if( valid1 && valid2 && valid3 ){
        console.log(valid1,valid2,valid3)
        getPoke(valid1).then(getPoke(valid2))
        .then(getPoke(valid3));
    } else {
        alert('Valores incorrectos');
    }
} 

function getPoke(id){console.log(API, id)
    return new Promise((resolve, reject) => {
        fetch(API + id).then(res => res.json()).then(poke => {
            insert(poke,false);
            resolve();
        }).catch(e => reject(e));
    });
}

(() => {
    // getThree();
    // console.table(dirs);
   
    // Promise.race(petitions).then((resp) => {
    //     console.log(resp.url);
    //     return resp.json();
    // })
    // .then(insert)
    // .catch(console.error);

    // Promise.all(petitions).then(resp => {
    //     let temp = [];
    //     resp.forEach(e => {
    //         if(!e.ok){
    //             throw new Error('No encontrado');
    //         } else {
    //             temp.push(e.json());
    //         }
    //     });
    //     return temp;
    // })
    // .then( res => {
    //     res.forEach(element => {
    //         element.then(e => insert(e, false));
    //     });
    // })
    // .catch(noFound);

BUTTON.addEventListener('click', buscar);

})();
