//83)[DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
//aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
//números gerados e depois coloque o vetor em ordem crescente, mostrando no final
//os valores ordenados.

function crescente() {
	let arr = [
		20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
	];

	// salvar o valor anterior, no caso o indice 0 e ir pra o indece 1
	// comparar o valor do arr[0] com o arr[i], se arr[1] for menor que o arr[0] eu preciso colocar o arr[1] no arr[0] e o arr[0] no arr[1]

	
	var valorAtual;
	var valorAnterior = 0;

	for (let i = 0; i < arr.length; i++) {
		if (valorAnterior == 0) {
			valorAnterior = arr[i];
		}

		valorAtual = arr[i];

		if (valorAtual > valorAnterior) {
			arr[i] = valorAnterior;
		}
	}
	console.log(arr);
}

crescente();
