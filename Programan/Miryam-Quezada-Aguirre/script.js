//Fetch información de 3 pokémones con la pokeapi endpoint "https://pokeapi.co/api/v2/pokemon/:id"
//Hacer un promise.all para esperar que se hagan todos los fetchs
//Imprimir en el DOM los 3 pokémones en orden alfabético de los nombres
//Información a poner en el DOM: Nombre, id e Imagen (está en sprites)


/*
let pokeCtn = document.getElementById("pokeCtn");
console.info(pokeCtn);

let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/70").then(response => response.json());
let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/452").then(response => response.json());
let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/371").then(response => response.json());
let pokemones = [fetchPoke1, fetchPoke2, fetchPoke3];

Promise.all(pokemones).then(data => {
    // Sort personalizado con callback mostrado en clase 28
    data.sort((a, b) => {
        return a - b;
    });
    console.info(data);
    for (let index = 0, pokeLength = data.length; index < pokeLength; index += 1) {
        createCardPokemon(data[index]);
        createCardPokemonBack(data[index]);
    }
}).catch(error => console.error("Error: ", error));
*/
function createCardPokemon(pokemon) {
    let ctn = document.createElement("div");
    let name = document.createElement("h2");
    name.textContent = pokemon.name + " " + "#" + pokemon.id;
    let img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.front_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}

function createCardPokemonBack(pokemon) {
    let ctn = document.createElement("div");
    let name = document.createElement("h2");
    name.textContent = pokemon.name + " " + "#" + pokemon.id;
    let img = document.createElement("img");
    img.setAttribute("src", pokemon.sprites.back_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}

function randArray(){
	let numsArray = []
	
	for(i=0;i<10;i+=1)
	{
		let randNumber = Math.floor(Math.random() * 500) + 1;//para evitar el 0
		//console.info("randNumber: "+randNumber)
		numsArray.push(randNumber);
		//console.info("array: "+numsArray)
	}
	return numsArray;
}

function createTitle(title, id) {
  var h = document.createElement("h1");
  var t = document.createTextNode(title);
  h.appendChild(t);
  let divElement=document.getElementById(id); ///
  ///document.body.appendChild(h);
  divElement.appendChild(h);
}

function threeFetch(){
	let numsArray = randArray();
	let number1=numsArray[Math.floor(Math.random() * 10)]
	let number2=numsArray[Math.floor(Math.random() * 10)]
	let number3=numsArray[Math.floor(Math.random() * 10)]
	console.info("number1: "+number1+", number2: "+number2+", number3: "+number3);
	
	//Borrar titulo para crear de nuevo
	let divElement=document.getElementById("pokeCtn");
	divElement.innerHTML = ''; //borrar lo que ya existe en el nodo y sobreescriba
	createTitle("Promise Raice", "pokeCtn");

	let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/"+number1).then(response => response.json());
	let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/"+number2).then(response => response.json());
	let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/"+number3).then(response => response.json());
	let pokemones = [fetchPoke1, fetchPoke2, fetchPoke3];
	
	Promise.race(pokemones).then(data => {
    // Sort personalizado con callback mostrado en clase 28
    /*data.sort((a, b) => {
        return a - b;
    });*/
	console.info(Object.keys(data));
	createCardPokemon(data);
    createCardPokemonBack(data);
	//console.info(data["0"]);
	//console.info(data[0]);
	}).catch(error => console.error("Error: ", error));
}

function threeFetchString(){
	let numsArray = randArray();
	numsArray[Math.floor(Math.random() * 10)] = "Soy una cadena"
	console.info("array: "+numsArray);
	let number1=numsArray[Math.floor(Math.random() * 10)]
	let number2=numsArray[Math.floor(Math.random() * 10)]
	let number3=numsArray[Math.floor(Math.random() * 10)]
	console.info("number1: "+number1+", number2: "+number2+", number3: "+number3);
	
	//Borrar titulo para crear de nuevo
	let divElement=document.getElementById("pokeCtn");
	divElement.innerHTML = ''; //borrar lo que ya existe en el nodo y sobreescriba
	createTitle("Promise All", "pokeCtn");
	
	let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/"+number1).then(response => response.json());
	let fetchPoke2 = fetch("https://pokeapi.co/api/v2/pokemon/"+number2).then(response => response.json());
	let fetchPoke3 = fetch("https://pokeapi.co/api/v2/pokemon/"+number3).then(response => response.json());
	let pokemones = [fetchPoke1, fetchPoke2, fetchPoke3];
	Promise.all(pokemones).then(data => {
	console.info(data);
	//console.info(data["0"]);
	//console.info(data[0]);
	
    for (let index = 0, pokeLength = data.length; index < pokeLength; index += 1) {
		console.info(data[index]);
		createCardPokemon(data[index]);
		createCardPokemonBack(data[index]);
    }
	}).catch(error => {
		console.error("Error: ", error);
		alert("Ocurrió un error intente de nuevo");
	});
}

function validateInput(num1,num2,num3){
	
	//console.info(isNaN(num1));
	//console.info(isNaN(num2));
	//console.info(isNaN(num3));
	
	if(isNaN(num1)|| isNaN(num2) || isNaN(num3))
	{
		return false
	}
	else{
		return true
	}
}

function threeFetchCad(){
	num1=document.getElementById("num1").value;
	num2=document.getElementById("num2").value;
	num3=document.getElementById("num3").value;
	if(validateInput(num1,num2,num3)){
		//Borrar titulo para crear de nuevo
		let divElement=document.getElementById("pokeCtn");
		divElement.innerHTML = ''; //borrar lo que ya existe en el nodo y sobreescriba
		createTitle("Promise Cadena", "pokeCtn");
		
		let fetchPoke1 = fetch("https://pokeapi.co/api/v2/pokemon/"+num1).then(response => response.json())
		.then(function(data){
			console.info("https://pokeapi.co/api/v2/pokemon/"+num1);
			createCardPokemon(data);
			createCardPokemonBack(data);
			return fetch("https://pokeapi.co/api/v2/pokemon/"+num2
			)
		})
		.then(response => response.json())
		.then(function(data){
			console.info("https://pokeapi.co/api/v2/pokemon/"+num2);
			createCardPokemon(data);
			createCardPokemonBack(data);
			return fetch("https://pokeapi.co/api/v2/pokemon/"+num3);
		})
		.then(response => response.json())
		.then(function(data){
			console.info("https://pokeapi.co/api/v2/pokemon/"+num3);
			createCardPokemon(data);
			createCardPokemonBack(data);
		})
		.catch(error => {
			console.error("Error: ", error);
			alert("Ingrese valores correctos");
		});
	}
	else{
		alert("introduce solo valores númericos")
	}
}
