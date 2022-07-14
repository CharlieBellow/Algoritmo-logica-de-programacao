//83)[DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
//aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
//números gerados e depois coloque o vetor em ordem crescente, mostrando no final
//os valores ordenados.

//function crescente() {
	let arr = [
		20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
	];

	// salvar o valor anterior, no caso o indice 0 e ir pra o indece 1
	// comparar o valor do arr[0] com o arr[i], se arr[1] for menor que o arr[0] eu preciso colocar o arr[1] no arr[0] e o arr[0] no arr[1]



	function troca(lista, analise) {
		let itemAnalise = lista[analise];
		let itemAnterior = lista[analise - 1];
		lista[analise] = itemAnterior;
		lista[analise - 1] = itemAnalise;
	}

	function insertionSort(lista) {
		for (let atual = 0; atual < lista.length; atual++) {
			let analise = atual;
			while (analise > 0 && lista[analise] < lista[analise - 1]) {
				troca(lista, analise);

				analise--;
			}
		}
		console.log(lista);
	}

	//insertionSort(arr);

var lista = [0, 5, 3, 4, 6, 7];

var menorValor;
function menorNumero(arr) {
		var atual = 0;
		while (atual < arr.length) {
			var analise = atual;
			if (analise > 0 && arr[analise] < arr[analise - 1])
				menorValor = arr[analise];

			atual++;
		}
		return menorValor;
	}
	menorNumero(lista);
	
	console.log(menorValor);






//	var valorAtual;
//	var valorAnterior = 0;
//
//	for (let i = 0; i < arr.length; i++) {
//		if (valorAnterior == 0) {
//			valorAnterior = arr[i];
//		}
//
//		valorAtual = arr[i];
//
//		if (valorAtual > valorAnterior) {
//			arr[i] = valorAnterior;
//		}
//	}
//	console.log(arr);
//}

//crescente();
