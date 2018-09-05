const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Bubble Sort".
function bubbleSort(arr) {
	while(!isSorted(arr)) {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				const aux = arr[i]
				arr[i] = arr[i - 1]
				arr[i - 1] = aux
			}
	    }
	}

	return arr
}

exports = module.exports = bubbleSort