// ###   PASSO 08 – VETORES
//71) Faça um programa que preencha automaticamente um vetor numérico com 8
//posições, conforme abaixo:
//999 999 999 999 999 999 999 999


function vetor() {
  var array = new Array(8)
  for (let index = 0; index < array.length; index++) {
    //numero = Math.floor(Math.random() * 9)
    array[index] = 999
  }
  console.log(array);
}
//vetor()

//72) Crie um programa que preencha automaticamente(usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//5 10 15 20 25 30 35 40 45 50

function cont5() {
  var arr = new Array(10)
  var contador = 5
  for (let i = 0; i < arr.length; i++) {
    arr[i] = contador;
    contador += 5
  }
  console.log(arr);
}
//cont5();

//73) Crie um programa que preencha automaticamente(usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//9 8 7 6 5 4 3 2 1 0


function decrescente() {
  let arr = new Array(10);
  var contador = 9
  for (let i = 0; i < 10; i++) {  
      arr[i] = contador
      contador -= 1
  }
  console.log(arr);
}
//decrescente();


//74) Crie um programa que preencha automaticamente(usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
//5 3 5 3 5 3 5 3 5 3


function parEImpar() {
  let arr = new Array(10);
  
  for (let i = 0; i < 10; i++){
  
      if (i % 2 == 0) {
        arr[i] = 5
      }
  
      if (i % 2 != 0) {
        arr[i] = 3
      }
      
    }

  
  console.log(arr);
}
//parEImpar()

//75) Crie um programa que preencha automaticamente(usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
//elementos da sequência de Fibonacci:
//1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
//0 1 2 3 4 5  6  7  8  9 10  11  12  13  14  15

function fibo() {
  let arr = new Array(16)
  v1 = 0
  v2 = 1
  //console.log(v1 + v2);
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr[i] = 1
    }
    
    soma = v1 + v2
    if (i > 0) {
      arr[i] = soma;
      v1 = v2
      v2 = soma
      
    }
  }
  console.log(arr);
}
//fibo()

//76) Crie um programa que preencha automaticamente um vetor numérico com 7
//números gerados aleatoriamente pelo computador e depois mostre os valores
//gerados na tela.

function MathRandom() {
  let arr = new Array(7);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 8)
  }
  console.log(arr);
}
//MathRandom()

//77) Faça um programa que leia 7 nomes de pessoas e guarde - os em um vetor.No
//final, mostre uma listagem com todos os nomes informados, na ordem inversa
//daquela em que eles foram informados.

function invert() {
  var arr = []
  var nome
  for (let i = 0; i < 7; i++) {
    nome = prompt("qual o nome?")
    arr.push(nome)
  }

  for (let i = 6; i >= 0; i--) {
    console.log(arr[i]);
    
  }
}
//invert()

//78) Escreva um programa que leia 15 números e guarde - os em um vetor.No final,
//mostre o vetor inteiro na tela e em seguida mostre em que posições foram
//digitados valores que são múltiplos de 10.
function multiplo10() {
  var arr = []
  for (let index = 0; index < 15; index++) {
		numero = Math.floor(Math.random() * 101);
		arr.push(numero);
		// a) 35 é múltiplo de 7, pois 35 é igual a 7 multiplicado pelo número inteiro 5.
    // não entendi como se acha o múltiplo de um número
	}
  console.log(arr);

  for (let i = 0; i <= arr.length; i++) {
    integro = Number.isInteger(arr[i] / 10)
    if (integro == true) {
      console.log(`${arr[i]} na posição ${i + 1} é múltiplo de 10`);
    }
  }
}

//multiplo10()


//79) Desenvolva um programa que leia 10 números inteiros e guarde - os em um vetor.
//No final, mostre quais são os números pares que foram digitados e em que
//posições eles estão armazenados.

function pares() {

  var arr = [];
  for (let i = 0; i < 10; i++) {
    numero = Math.floor(Math.random() * 16)
    arr.push(numero)

    if (numero % 2 == 0) {
      if (numero == 0) {
        continue;
      }
      console.log(arr[i] + " é par na posição " + i)
    }
  }
  console.log(arr);

}
//pares()

//80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
//15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
//número (chave) e seu programa deve mostrar em que posições essa chave foi
//encontrada. Mostre também quantas vezes a chave foi sorteada.

function random(chave) {
  let arr = []
  for (let i = 0; i < 30; i++) {
    var num = Math.floor(Math.random() * 16)
    arr.push(num)

    if (chave == num) {
      console.log(`O ${chave} foi encontrado na posição ${i}`);
    } 
  }
}
//random(15)



//81) Crie um programa que leia a idade de 8 pessoas e guarde - as em um vetor.No
//final, mostre:
//a) Qual é a média de idade das pessoas cadastradas
//b) Em quais posições temos pessoas com mais de 25 anos
//c) Qual foi a maior idade digitada (podem haver repetições)
//d) Em que posições digitamos a maior idade

function idade() {
  let idades = []
  let soma = 0
  let maior25 = []
  let idadeAtual = 0
  let maiorIdade = []

  for (let i = 0; i < 8; i++) {
    idades[i] = { nome: `nome ${i + 1}`, idade: Math.floor(Math.random() * 51) };
    
    soma += idades[i].idade
    //console.log(idades[i].idade);
// pq ele mostra sempre o primeiro número?
    if (idades[i].idade > 25) {
      maior25.push(i)
      //console.log(`${idades[i].idade} maior de 25 anos na posição ${i}`);
    }

    if (idades[i].idade >= idadeAtual) {
      idadeAtual = idades[i].idade
      maiorIdade.push({idade: idades[i].idade, posicao: i})
    }
    
  }
  
  media = soma / idades.length

  console.log(idades);
  console.log(`a média das idade é ${media}`);

  for (let i = 0; i < maiorIdade.length; i++) {
    if(maiorIdade[i].idade == idadeAtual)
    console.log(`A maior idade ${idades[maiorIdade[i].posicao].idade} foi digitada na posição ${maiorIdade[i].posicao} do array`);
  }

  for (let i = 0; i < maior25.length; i++){
      console.log(`${idades[maior25[i]].idade} é maior de 25 anos na posição ${maior25[i]}`);
  }

}
//idade()

//82) Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde - as em
//um vetor. No final, mostre:
//a) Qual é a média da turma
//b) Quantos alunos estão acima da média da turma
//c) Qual foi a maior nota digitada
//d) Em que posições a maior nota aparece

function notas() {
  let arr = new Array(10)
  var soma = 0
  var acimaMedia = 0
  var notaAtual = 0
  var maiorNota = 0
  var posicao = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] = { aluno: `${i + 1}º Aluno`, nota: Math.floor(Math.random() * 11) }
    
    soma += arr[i].nota
    
    if (arr[i].nota >= 7) {
      acimaMedia += 1
    }

    if (maiorNota <= arr[i].nota) {
      maiorNota = arr[i].nota
      posicao.push(i)
    }
  }

  media = soma / arr.length
  console.log(arr);
  console.log(`
  A media da turma é: ${media};
  ${acimaMedia} alunos estão acima da média;
  ${maiorNota} foi a maior nota digitada;`);

  for (let i = 0; i < posicao.length; i++) {
    if (arr[posicao[i]].nota == maiorNota) {
      console.log(`A maior nota: ${arr[posicao[i]].nota} aparece na ${posicao[i]}ª posição do Array.`);
    }
  }
  
}
//notas()


//83)[DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
//aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
//números gerados e depois coloque o vetor em ordem crescente, mostrando no final
//os valores ordenados.

function crescente() {
  let arr = new Array(20);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    
  }

  console.log(arr);


	// fiz usando o método insertionSort que aprendi. Mas ainda quero debugar pra entender melhor a lógica desse código

	for (let atual = 0; atual < arr.length; atual++) {
		let analise = atual;
		while (analise > 0 && arr[analise] < arr[analise - 1]) {
			itemAnalise = arr[analise];
			itemAnterior = arr[analise - 1];
			arr[analise] = itemAnterior;
			arr[analise - 1] = itemAnalise;

			analise--;
		}
	}

	console.log(arr);
}

//crescente()

//84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
//valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
//contendo apenas os dados das pessoas menores de idade.

var pessoas = [
{nome: "Lady Bug", idade: 16},
{nome: "Cat Noir", idade: 17},
{nome: "Rena Rouge", idade: 15},
{nome: "Carapace", idade: 16},
{nome: "Queen Bee", idade: 15},
{nome: "Monarch", idade: 37},
{nome: "Maiura", idade: 28},
{nome: "Vesperia", idade: 14},
{nome: "Volpina", idade: 15}
]

function menorIdade(array) {
  var menorIdade = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].idade < 18) {
    menorIdade.push(array[i])
    }
  }

// tem diferença se eu mostrar os dados com o spread operation e se seu mostrar direto no console. Como faço para usar spread operator e exibir em um console só o texto e o array sem que ele mostre o array assim: [objeto, objeto, objeto....]?
  console.log("Esses são os menor de idade: ");
  console.log(menorIdade);
}

//menorIdade(pessoas)

//85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
//guarde esses dados em três vetores. No final, mostre uma listagem contendo
//apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

let funcionarios = [
	{ nome: "Patty", genero: "f", salario: 5500 },
	{ nome: "Charlie", genero: "m", salario: 1500 },
	{ nome: "Mineia", genero: "f", salario: 5500 },
	{ nome: "Gustavo", genero: "m", salario: 1500 },
	{ nome: "Luca", genero: "f", salario: 2000 },
];

function girlPower(array) {
  var girls = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].genero == "f" && array[i].salario >= 5000) {
      girls.push(array[i])
    }
    
  }

  console.log(girls);
}

//girlPower(funcionarios)