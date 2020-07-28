// 1.-
class Dog {
    constructor(name) {
        this.name = name;
    }
}

Dog.prototype.bark = function () {
    console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');
pet.bark();
delete Dog.prototype.bark;
pet.bark();

/**
 
 */

 // 2.-
class Dog {
    constructor(name) {
        this.name = name;
    }
};

class Labrador extends Dog {
    // 1
    constructor(name, size) {
        this.size = size;
    }
    // 2
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    // 3
    constructor(size) {
        super(name);
        this.size = size;
    }
    // 4
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

};

/**
 
 */

 // 3.-
var status = '😎';

setTimeout(() => {
    const status = '😍';

    const data = {
        status: '🥑',
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
}, 0);

/**
 
 */

// 4.-
fetch('https://www.website.com/api/user/1')
    .then(res => res.json())
    .then(res => console.log(res));

/**
 
 */

 // 5.-
function nums(a, b) {
    if
        (a > b)
        console.log('a is bigger')
    else
        console.log('b is bigger')
    return
    a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))

/**
 
 */

 // 6.-
Promise.resolve(5);

/**
 
 */

// 7.-
const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello world!');

//1
myMap.get('greeting');
//2
myMap.get(myFunc);
//3
myMap.get(() => 'greeting');

// 8.-
const person = {
    name: 'Lydia Hallie',
    hobbies: ['coding'],
};

function addHobby(hobby, hobbies = person.hobbies) {
    hobbies.push(hobby);
    return hobbies;
}

addHobby('running', []);
addHobby('dancing');
addHobby('baking', person.hobbies);

console.log(person.hobbies);

/**
 
 */

// 9.-
class Bird {
    constructor() {
        console.log("I'm a bird. 🦢");
    }
}

class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸");
        super();
    }
}

const pet = new Flamingo();