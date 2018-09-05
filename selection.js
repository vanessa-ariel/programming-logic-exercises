// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Selection Sort".
function selectionSort(arr) { 
	let sorted = []  //criou lista vazia

	while (arr.length > 0) { // continua organizando enquanto ainda tiver elementos na lista
		let lowest = Infinity // cria variável menor = compara com o infinito
		let lowest_index
		for (const [index, item] of arr.entries()) {  // pega o index e número
			if (item < lowest) {
				lowest = item
				lowest_index = index
			}
		}
		sorted.push(lowest)
		arr.splice(lowest_index, 1)
	}

	return sorted

}

exports = module.exports = selectionSort