function jogoVelha() {
	var tablado = [new Array(3), new Array(3), new Array(3)];

	var n = 1;

	for (let linha = 0; linha < tablado.length; linha++) {
		for (let coluna = 0; coluna < tablado.length; coluna++) {
			tablado[linha][coluna] = {
				posicao: `(   ) (${n})`,
				status: " ",
			};
			n += 1;
		}
	}
	var num = 0;

	// no caso eu teria que ter um laço de repetição que iria encontrar em qual posição de linha e coluna está o numero referente a minha entrada, depois disso pegaria essa posição e faria a adição do x ou da bola. e depois retornaria o processo..
	// resolver essa questão do q não sair de primeira.
	// ou eu posso fazer uma função que adiciona esse x ou bola ou que verifica a posição
	
		for (let linha = 0; linha < tablado.length; linha++) {
			for (let coluna = 0; coluna < tablado.length; coluna++) {
				if (num % 2 == 0) {
					var jogada = 5 // prompt(`quer jogar O em qual posição? 0pressione (Q) para sair`);
				}
				//console.log(`num: ${num}`);

				if (num % 2 == 1) {
					var jogada = 6 // prompt(`quer jogar "X" em qual posição? pressione (Q) para sair`);
				}
				console.log(`num: ${num}`);

				console.log(`jogada: ${jogada}`);

				// falta colocar se a entrada for maior que o tamanho da matriz
				//falta fazer a jogada reconhecer a entrada em qualquer ordem. aqui ele está percorrendo o array e só acha quando a entrada corresponde. nesse caso, precisa tirar do laço de repetição.
				if (tablado[linha][coluna].posicao.includes(jogada)) {
					// se a jogada é igual a posição que o número está

					if (tablado[linha][coluna].status == " ") {
						console.log(`num % 2  : ${num % 2}`);
						console.log(`num: ${num}`);

						// switch case?
						if (num % 2 == 0) {
							tablado[linha][coluna].posicao = `("o") (${linha}, ${coluna})`;
							tablado[linha][coluna].status = `"o"`;
						}

						console.log(`num: ${num}`);

						if (num % 2 == 1) {
							tablado[linha][coluna].posicao = `("x") (${linha}, ${coluna})`;
							tablado[linha][coluna].status = `"x"`;
						}

						console.log(`num: ${num}`);
						num += 1;
						console.log(`num: ${num}`);

						//else {
						//  alert("essa jogada nao é permitida")
						//}
					}
				}
				//console.log(tablado[linha][coluna].posicao);
				//console.log(tablado[linha][coluna].status);

				// como estou me guiando pela coluna ela sempre muda percorrendo o indice do array da coluna que é sempre nessa ordem 0(par), 1(impar), 2 (par), na proxima linha ele vai percorrer essa sequencia novamente fazendo com que o póximo numero da lista seja 0, por isso temos uma sequência de 2 numeros zeros.. e por isso confunde qd vai marcar a 'O' ou o 'X'. nesse caso, preciso fazer um laço de repetição que vá de 0 a 9 que são as posições do array. e usar isso tanto pra mostrar x ou O quanto pra ver se o modulo de 2 é par ou impar..
			}
		}

		console.log(tablado);
	}


jogoVelha();
