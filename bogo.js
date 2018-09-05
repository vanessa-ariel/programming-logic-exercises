const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Bogo Sort".
function bogoSort(arr) {  //função que ordena o array em ordem crescente
	let count = 0         // valor inicial da variável let= variável local

	while(!isSorted(arr)) { //while só roda se uma função for true, como precisamos que rode com false, utilizamos a exclamação para a expressão que é false operar como true e rodar o while
		count++ //implementa a variável local cont
		if (count > 10000) { // se cont for maior que 10000
			throw "Iteração demais! Antes que seu computador trave, tente novamente." //throw= mensagem de erro contendo a mensagem entre aspas
		}
		
		for (let i = 0; i < arr.length; i++) { //inicia com const= posição 0, e enquanto const for menor do que o número de elementos da array, incrementa em 1 a const
	        const random_index = Math.floor(Math.random() * arr.length) //
	        const aux = arr[i] // guarda i
	        arr[i] = arr[random_index] 
	        arr[random_index] = aux
	    }
	}
	return arr
}

exports = module.exports = bogoSort