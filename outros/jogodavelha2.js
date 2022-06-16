var matriz = [new Array(3), new Array(3), new Array(3)];

var n = 1;

for (let linha = 0; linha < matriz.length; linha++) {
	for (let coluna = 0; coluna < matriz.length; coluna++) {
		matriz[linha][coluna] = "";
		n += 1;
	}
}


var posicao;
posicao = matriz[0][0]
console.log(posicao);

var lugarMatriz = posicao
console.log(lugarMatriz);
var coloca = "x"

var l = 0
var c = 0


		if (matriz[l][c] == lugarMatriz) {
			matriz[l][c] = coloca;
		}



console.log(matriz);


/*

function jogoDaVelha2() {
	var matriz = [new Array(3), new Array(3), new Array(3)];
	var posicao = 1;
	while (true) {
		var check = false;
		var jogada;
		while (check == false) {
			var numeroJogada = 0;

			function lerEntradaUsuario() {
				if (numeroJogada % 2 == 0) {
					jogada = parseInt(prompt(`quer jogar O em qual posição?`));
					return jogada;
				}

				if (numeroJogada % 2 == 1) {
					jogada = parseInt(prompt(`quer jogar "X" em qual posição?`));
					return jogada;
				}
			}

			jogada = lerEntradaUsuario();

			function validarEntrada(jogada) {
				if (jogada != "" && jogada < 10 && jogada > 0) {
					return true;
				} else {
					return false;
				}
			}

			check = validarEntrada(jogada);
		}

		function achaPosicaoJogada(jogada) {
			for (let linha = 0; linha < matriz.length; linha++) {
				for (let coluna = 0; coluna < matriz.length; coluna++) {
					if (jogada == posicao) {
						var posicaoMatriz = matriz[linha][coluna];
						return posicaoMatriz;
					}
					posicao += 1;
				}
			}
		}

		var lugarMatriz = achaPosicaoJogada(jogada);

		function veSeTaVazio(lugarMatriz, matriz) {
			if (lugarMatriz == "") {
				return true;
			} else {
				//alert("lugar ocupado")
				return false;
			}
		}

		var taVazio = veSeTaVazio(lugarMatriz, matriz);

		function quemTaJogando(numeroJogada) {
			if (numeroJogada % 2 == 0) {
				return "o";
			}

			if (numeroJogada % 2 == 1) {
				return "x";
			}
		}

		if (taVazio == true) {
			var deQuemEaVez = quemTaJogando(numeroJogada);

			function colocaJogadaDeQuemForAVez(deQuemEaVez, lugarMatriz, matriz) {
				return (lugarMatriz = oQueColocar);
			}

			colocaJogadaDeQuemForAVez(deQuemEaVez, lugarMatriz, matriz);

			numeroJogada += 1;
		}
		//else {
		//  alert("lugar ocupado, tente novamente")
		//  //voltar para a jogada
		//}
	}
}

jogoDaVelha2();
*/