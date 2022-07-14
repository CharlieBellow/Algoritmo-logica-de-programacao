//PASSO 06 – REPETIÇÃO COM FAÇA ENQUANTO

/*61) Crie um programa que mostre na tela a seguinte contagem, usando a estrutura
“faça enquanto”
0 3 6 9 12 15 18 21 24 27 30 Acabou!*/

function pulaTres() {
	let i = 0;
	do {
		console.log(i);
		i += 3;
	} while (i <= 30);
	console.log("acabou!");
}
//pulaTres()

/*62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
na tela:
a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas tem 21 anos ou mais.*/

//function idades() {
//  var resposta = 's'
//  var nIdades = 0
//  var somaIdades = 0
//  var mais21 = 0
//  //var idade
//  let i = 0
//  var idade = [15,13,14,78,45,21,55]
//  while (i < idade.length ) {
//		//var idade = parseInt("digite uma idade");
//		//resposta = prompt("quer continuar? (s/n)");
//
//    //a) Quantas idades foram digitadas
//    nIdades += 1;
//    //b) Qual é a média entre as idades digitadas
//    somaIdades += idade[i];
//    //c) Quantas pessoas tem 21 anos ou mais.*/
//    if (idade[i] > 21) {
//      mais21 += 1;
//    }
//
//    i++
//
//
//	}
//
//  media = somaIdades / nIdades
//  console.log(`Foram digitadas ${nIdades} idades;
//  A média entre as idades é: ${media};
//  ${mais21} tem 21 anos.`);
//
//}
//idades()

function idades() {
	var resposta;
	var nIdades = 0;
	var somaIdades = 0;
	var mais21 = 0;
	var idade;
	let i = 0;
	//var idade = [15, 13, 14, 78, 45, 21, 55];
	do {
		resposta = "s";
		// por falta de atenção não vi que não tinha colocado o prompt. por isso o programa já iniciava perguntando se queria continuar e não mostrava a idade pq nao tinha o prompt. Passei um tempo pra notar isso. Preciso criar o hábito de revisar meu código linha a linha desde o início sempre que algo não vai bem.
		idade = parseInt(prompt("digite uma idade"));
		resposta = prompt("quer continuar? (s/n)");

		//a) Quantas idades foram digitadas
		nIdades += 1;
		//b) Qual é a média entre as idades digitadas
		somaIdades += idade;
		//c) Quantas pessoas tem 21 anos ou mais.*/
		if (idade > 21) {
			mais21 += 1;
		}

		i++;
	} while (resposta == "s");

	media = somaIdades / nIdades;
	alert(`Foram digitadas ${nIdades} idades;
  A média entre as idades é: ${media};
  ${mais21} tem mais de 21 anos.`);
}
//idades();

/*63) Crie um programa usando a estrutura “faça enquanto” que leia vários números.
A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
tela:
a) O somatório entre todos os valores
b) Qual foi o menor valor digitado
c) A média entre todos os valores
d) Quantos valores são pares*/

function numeros() {
	var resposta;
	var numero;
	var soma = 0;
	var qtNumeros = 0;
	var menorNumero = 0;
	var nPares = 0;
	var lista = []
	var menorValor;

	do {
		numero = parseInt(prompt("digite um número:"));
		resposta = prompt("quer continuar? (s/n)");
		//resposta = "s"

		lista.push(numero)


		//a) O somatório entre todos os valores
		soma += numero;

		//resolver o erro
		//b) Qual foi o menor valor digitado
		//var lista = [3, 5, 3, 4, 6, 7];

		function menorNumero(arr) {
			var atual = 0;
			while (atual < arr.length) {
				let analise = atual;
				if (analise > 0 && arr[analise] < arr[analise - 1])
					menorValor = arr[analise];

				atual++;
			}
			return menorValor;
		}
		menorNumero(lista);

		//console.log(menorValor);
	
		//c) A média entre todos os valores
		qtNumeros += 1;

		//d) Quantos valores são pares*/
		if (numero % 2 == 0) {
			nPares += 1;
		}

		
	} while (resposta == "s");

	var media = soma / qtNumeros;

	alert(`O somatório entre todos os valores é: ${soma};
  o menor valor digitado foi: ${menorValor};
  A média entre todos os valores é: ${media.toFixed(2)};
  ${nPares} valores são pares
  `);
}
numeros()



// criar outra função que recebe uma lista de números como argumento e retorna o mínimo. 
// precisa funcionar qd o número for zero e menor do que zero também
// corrigir o exercício 63 - guardar os números na lista e depois passar a lista na função e retornar o menor número pra exibir
