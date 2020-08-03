let promise1 = new Promise((resolve, reject) => {
		let numberRand1=Math.floor(Math.random() * 101)
		numberRand1 > 50 ? resolve(numberRand1+" mayor a 50") : reject ("Promesa 1: "+ numberRand1 + " es < 50")
		}
	);

let promise2 = new Promise((resolve, reject) => {
		let numberRand2 = Math.floor(Math.random() * 101)
		numberRand2 > 50 ? resolve(numberRand2+" mayor a 50") : reject ("Promesa 2: "+ numberRand2 + " es < 50")
		}
	);

let promise3 = new Promise((resolve, reject) => {
		let numberRand3=Math.floor(Math.random() * 101)
		numberRand3 > 50 ? resolve(numberRand3+" mayor a 50") : reject ("Promesa 3: "+ numberRand3 + " es < 50")
		}
	);

/*
//ejemplo 1 promesa
promise1.then((result) => {
    console.log(result); 
  }).catch((errorMessage)=>{
	  console.info("Error de promesa: " + errorMessage);
  });
*/

Promise.all([promise1, promise2, promise3]).then(response => {
		console.log(response);
	})
	.catch(error =>{
		console.log("error: "+error)
	});