//PASSO 05 – ENQUANTO COM FLAG

/*56) Crie um programa que leia vários números pelo teclado e mostre no final o
somatório entre eles.
Obs: O programa será interrompido quando o número 1111 for digitado*/

//function somatorio() {
//    var entrada;
//    var resposta = "s";
//    var soma = 0;
//
//  while (resposta == "s") {
//    entrada = parseFloat(prompt("digite um número inteiro:"));
//    if (entrada == 1111) {
//      return alert("programa interrompido");
//    }
//    soma += entrada;
//    resposta = prompt("quer continuar? (s/n)");
//
//
//  }
//  return alert(`A soma entre todos os números digitados é: ${soma}`);
//}
//somatorio()

/*57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
No final, mostre o total de salários pagos aos homens e o total pago às
mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
sempre que ler os dados de um funcionário.*/

//function totalPago() {
//  var resposta = "s"
//  var n = 1
//  var totalSalarioH = 0
//  var totalSalarioM = 0;
//  while (resposta == 's') {
//    var salario = parseFloat(prompt("Qual é o salário da " + n + "ª pessoa?").replace(',','.'))
//    var genero = prompt("qual é o gênero da " + n + "ª pessoa? (H / M)")
//    var resposta = prompt("quer continuar? (s/n)")
//    n += 1
//
//    if (genero == "h") {
//      totalSalarioH += salario
//    }
//
//    if (genero == "m") {
//      totalSalarioM += salario;
//    }
//  }
//
//  alert(`O total pago aos Homens é: ${totalSalarioH.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})};
//  O total pago as mulheres é: ${totalSalarioM.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}`);
//}

//totalPago();

/*58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
vai parar quando for digitada a idade 999. No final, mostre quantos alunos
existem na turma e qual é a média de idade do grupo.*/

//function alunos() {
//  var soma = 0;
//  var media
//  var idades = 0
//  var resposta = 's'
//  var idade
//  while (resposta == "s") {
//
//    idade = parseInt(prompt("informe a idade:"))
//
//    if (idade == 999) {
//      return alert("programa interrompido");
//    }
//
//    resposta = prompt("quer continuar? (s/n)")
//
//    //console.log(idade);
//
//    soma += idade
//    idades += 1
//  }
//
//  media = soma / idades
//  //alert(`Existe ${} alunos na turma e a média das idades é: ${}`)
//  return alert(`Existe ${idades} alunos na turma e a média das idades é: ${media}`)
//
//}
//alunos()

/*59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
a) qual é a maior idade lida
b) quantos homens foram cadastrados
c) qual é a idade da mulher mais jovem
d) qual é a média de idade entre os homens*/

//function tretaDasIdades() {
//  var resposta = 's'
//  var quantosH = 0
//  var maiorIdade = 0
//  var somaIdades = 0
//  var idade
//  var menorIdadeM = 0
//
//  while (resposta == 's') {
//
//    idade = parseInt(prompt('qual é a idade dessa pessoa?'))
//    genero = prompt('qual é o gênero? (M / F)').toLowerCase()
//    resposta = prompt('quer continuar? (s/n)')
//
//    //a) qual é a maior idade lida
//    if (idade > maiorIdade) {
//      maiorIdade = idade
//    }
//
//    //b) quantos homens foram cadastrados
//    if (genero == "m") {
//      quantosH += 1
//    }
//    //c) qual é a idade da mulher mais jovem
//    if (genero == 'f') {
//      if (menorIdadeM == 0) {
//				menorIdadeM = idade;
//			}
//
//      if (idade < menorIdadeM) {
//				menorIdadeM = idade;
//			}
//  }
//    //d) qual é a média de idade entre os homens
//    somaIdades += idade
//  }
//
//  media = somaIdades / quantosH
//
//  alert(`
//  A maior idade digitada é: ${maiorIdade};
//  ${quantosH} homens foram cadastrados;
//  A idade da mulher mais jovem é: ${menorIdadeM};
//  A média de idade dos Homens é: ${media}
//  `)
//}
//tretaDasIdades()

/*60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
a) O nome da pessoa mais velha
b) O nome da mulher mais jovem
c) A média de idade do grupo
d) Quantos homens tem mais de 30 anos
e) Quantas mulheres tem menos de 18 anos*/

// ODS.: tive uma dificuldade no resultado dos testes.
//então foi mais fácil pra mim fazer o código declarando
//os valores dentro de um array e testando pra depois
// fazer a versão com o prompt. Então o código que vale é o curioso2()

function curioso() {
	var array = [
		{ nome: "gabriel", idade: 37, genero: "m" },
		{ nome: "cloe", idade: 17, genero: "f" },
		{ nome: "marinete", idade: 15, genero: "f" },
		{ nome: "adrian", idade: 18, genero: "m" },
	];
	//var resposta = 's'
	var nomeMaisVelho;
	var idadeAtual = 0;
	var nomeMulherMaisJovem;
	var idadeMenor = 0;
	var soma = 0;
	//var pessoas = 0
	var hMaisDe30 = 0;
	var mMenosDe18 = 0;

	for (let i = 0; i < array.length; i++) {
		//a) O nome da pessoa mais velha
		if (idadeAtual == 0) {
			idadeAtual = array[i].idade;
		}

		if (array[i].idade >= idadeAtual) {
			console.log("entrou!");
			nomeMaisVelho = array[i].nome;
		}

		//b) O nome da mulher mais jovem
		if (array[i].genero == "f") {
			if (idadeMenor == 0) {
				idadeMenor = array[i].idade;
			}

			if (array[i].idade < idadeMenor) {
				nomeMulherMaisJovem = array[i].nome;
			}
		}
		//c) A média de idade do grupo
		soma += array[i].idade;

		//d) Quantos homens tem mais de 30 anos

		if (array[i].idade > 30 && array[i].genero == "m") {
			hMaisDe30 += 1;
		}
		//e) Quantas mulheres tem menos de 18 anos
		if (array[i].idade < 18 && array[i].genero == "f") {
			mMenosDe18 += 1;
		}
	}
	//}

	media = soma / array.length;

	console.log(array);

	console.log(`
  ${nomeMaisVelho} é a pessoa mais velha;
  ${nomeMulherMaisJovem} é a mulher mais jovem;
  A média de idade do grupo é: ${media};
  ${hMaisDe30} homens tem mais de 30 anos;
  ${mMenosDe18} mulheres tem menos de 18 anos;
  `);
}

//curioso();

function curioso2() {
	var array = [];
	var resposta = "s";
	var nomeMaisVelho;
	var idadeAtual = 0;
	var nomeMulherMaisJovem;
	var idadeMenor = 0;
	var soma = 0;
	var pessoas = 0;
	var hMaisDe30 = 0;
	var mMenosDe18 = 0;

	while (resposta == "s") {
		nome = prompt("qual é o nome?");
		idade = parseInt(prompt("qual é a idade?"));
		genero = prompt("qual é o genero? (m / f)");

		pessoas += 1;
		//
		//
		array.push({ nome: nome, idade: idade, genero: genero });

		resposta = prompt("quer continuar? (s/n)");

		//a) O nome da pessoa mais velha
		if (idadeAtual == 0) {
			idadeAtual = idade;
		}

		if (idade >= idadeAtual) {
			console.log("entrou!");
			nomeMaisVelho = nome;
		}

		//b) O nome da mulher mais jovem
		if (genero == "f") {
			if (idadeMenor == 0) {
				idadeMenor = idade;
			}

			if (idade <= idadeMenor) {
				nomeMulherMaisJovem = nome;
			}
		}
		//c) A média de idade do grupo
		soma += idade;

		//d) Quantos homens tem mais de 30 anos

		if (idade > 30 && genero == "m") {
			hMaisDe30 += 1;
		}
		//e) Quantas mulheres tem menos de 18 anos
		if (idade < 18 && genero == "f") {
			mMenosDe18 += 1;
		}
	}
	//}

	media = soma / pessoas;

	alert(`
  ${nomeMaisVelho} é a pessoa mais velha;
  ${nomeMulherMaisJovem} é a mulher mais jovem;
  A média de idade do grupo é: ${media};
  ${hMaisDe30} homens tem mais de 30 anos;
  ${mMenosDe18} mulheres tem menos de 18 anos;
  `);
}
//curioso2();
