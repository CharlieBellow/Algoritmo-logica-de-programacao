// ##  PASSO 04 – REPETIÇÕES ENQUANTO ------------------------

/*38) Escreva um programa que mostre na tela a seguinte contagem:
6 7 8 9 10 11 Acabou!*/

function contagem() {
  for (let i = 6; i <= 11; i++) {
    console.log(i);
  }
  console.log("Acabou!");
}
//contagem()

/*39) Faça um algoritmo que mostre na tela a seguinte contagem:
10 9 8 7 6 5 4 3 Acabou!*/

function cont() {
  for (let i = 10; i >= 3; i--) {
    console.log(i);
  }
  console.log("Acabou!");
}
//cont()

/*40) Crie um aplicativo que mostre na tela a seguinte contagem:
0 3 6 9 12 15 18 Acabou!*/

function cont3() {
  let i = 0
  while (i <= 18) {
    console.log(i);
    i = i + 3
  }
  console.log("Acabou!");
}
//cont3()

/*41) Desenvolva um programa que mostre na tela a seguinte contagem:
100 95 90 85 80 ... 0 Acabou!*/

function cont100() {
  let i = 100
  while (i >= 0) {
    console.log(i);
    i = i - 5
  }
  console.log("Acabou!");
}
//cont100()

/*42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
qualquer e mostre uma contagem até esse valor:
Ex: Digite um valor: 35
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!*/

function cont35() {
  for (let i = 1; i <= 35; i++) {
    console.log(i);
  }
  console.log("Acabou!");
}
//cont35()

/*43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...*/

function marque4() {
  for (let i = 30; i > 0; i--) {
    if (i % 4 == 0) {
      console.log(`[${i}]`);
    } else {
      console.log(i);
    }
  }
}
//marque4()


/*44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!*/

function increment(partida, chegada, pula) {
  //var partida = parseInt(prompt('Quer contar começando de qual número?'))
  //var chegada = parseInt(prompt('E vai parar em qual número?'))
  //var pula = parseInt(prompt('De quanto em quanto vai contar?'))

  while (partida <= chegada) {
    console.log(partida);
    partida = partida + pula
  }
}
//increment(3, 10, 2)

/*45) O programa acima vai ter um problema quando digitarmos o primeiro valor
maior que o último. Resolva esse problema com um código que funcione em qualquer
situação.*/

function incremento(partida, chegada, pula) {

  comeco = partida 
  fim = chegada 
  operacao = Math.min(comeco, fim)
  
  if (operacao == comeco) {
    while (comeco < fim) {
      console.log(comeco);
      comeco = comeco + pula
    }
  }

  if (operacao == fim) {
    while (comeco >= fim) {
      console.log(comeco);
			comeco = comeco - pula;
		}
	}
}

//incremento(3, 10, 2)
//incremento(10, 2, 2) 

/*46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.*/

function fibo(num1, num2, nItem) {

  while (num2 <= nItem) {
    fibo = num1 + num2;
    //console.log(fibo);
    num1 = fibo
    num2 = num2 + 2
    if (num2 == nItem) {
      resultado = num1 + num2
      console.log(resultado);
    }
    
    //
    //  if (nItem == 1) {
    //    return num1
    //} 
    //
    //  if (nItem == 2) {
    //    return num2;
    //  } 
    //
    //
    //  return fibo(num1, num2, nItem - 1) + fibo(num1, num2, nItem - 2)

  }
}

//fibo(6, 8, 100)

/*47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
450 + 400 + 350 + 300 + ... + 50 + 0*/

function conta(num1, num2, nItem) {
	while (num2 >= nItem) {
		novoValor = num1 + num2;
		//console.log(novoValor);
		num1 = novoValor;
		num2 = num2 - 50;
		if (num2 == nItem) {
			resultado = num1 + num2;
			console.log(resultado);
		}

	}
}

//conta(500, 450, 0);

/*48) Faça um programa que leia 7 números inteiros e no final mostre o somatório
entre eles.*/
var soma = 0
function somatorio(array) {
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }

  console.log(soma);
}
//let arr = [1, 2, 5, 4, 25, 86, 77];

//somatorio(arr)

/*49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles
são pares e quantos são ímpares.*/

function imparOuPar(array) {
  let par = []
  let impar = []
  let pares = 0
  let impares = 0
  for (let index = 0; index < array.length; index++) {
    
    if (array[index] % 2 == 0) {
      par.push(array[index])
      pares += 1
    }

    if (array[index] % 2 == 1) {
      impar.push(array[index])
      impares += 1
    }
    
  }
  console.log(`Números pares ${pares}; Número ímpares: ${impares}`);

}
//let arr = [20,15,30,45,89,100,30]
//imparOuPar(arr)

/*50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
mostre na tela:
a) Quais foram os números sorteados
b) Quantos números estão acima de 5
c) Quantos números são divisíveis por 3*/

function vinteNum() {
  var arr = [];
  var maiorCinco = 0;
  var divideTreis = 0;
  
  for (let i = 1; i <= 20; i++) {
    num = Math.floor(Math.random() * 10)
    arr.push(num)

    if (num > 5) {
      maiorCinco += 1
    }

    if (num % 3 == 0) {
      if (num == 0) {
        continue; // pra que ele não conte zero como divisível por 3
      }
      divideTreis += 1
    }
  }

  console.log(`Os números sorteados foram ${arr};
  Existem: ${maiorCinco} números maiores que cinco;
  E ${divideTreis} números são divisíveis por 3`);
}
//vinteNum()

/*51) Faça um aplicativo que leia o preço de 8 produtos.No final, mostre na tela
qual foi o maior e qual foi o menor preço digitados.*/
// rever esse pra entender melhor ou tirar dúvida com o Gustavo 

var itens = [
  { produto: "calça", preco: 80.50 },
  { produto: "camisa", preco: 25.48}, 
  { produto: "blusa", preco: 28.47}, 
  { produto: "dockside", preco: 68.45}, 
  { produto: "bermuda", preco: 26.44}, 
  { produto: "colar", preco: 70.40}, 
  { produto: "tênis", preco: 80.10}, 
  { produto: "boné", preco: 80.56 }
]
//console.log(arr[0].preco);

function produtos(arr) {
  var precoAtual = 0
  
  
  for (let i = 0; i <= arr.length; i++) {
		//var maisBarato = 0
		//console.log(arr[i].preco);
		// preciso colocar algum valor dentro da variável precoAtual, se nao vai dar undefined e ele não vai ter com o que comparar.
		if (precoAtual == 0) {
			precoAtual = arr[i].preco;
    }
    
    //var maisBarato = 0;
    
		if (precoAtual > arr[i].preco) {
			precoAtual = arr[i].preco;
			var maisBarato = arr[i];
      //console.log("preçoAtual " + precoAtual + " + arr[i].preco " + arr[i].preco);

      //console.log("preçoAtual " + precoAtual);
			// pq o console só é exibido se estiver aqui dentro e não exibe fora desse if?
      return console.log(
				"o produto mais barato é: " +
					maisBarato.produto +
					", custando: " +
					maisBarato.preco.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})
			);
		}


		//console.log("maisBarato " + maisBarato);
  }
  //console.log(
	//	"o produto mais barato é: " +
	//		maisBarato.produto +
	//		", custando: " +
	//		maisBarato.preco.toLocaleString("pt-BR", {
	//			style: "currency",
	//			currency: "BRL",
	//		})
  //);
  
}

//produtos(itens)

/*52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
a) Qual é a média de idade do grupo
b) Quantas pessoas tem mais de 18 anos
c) Quantas pessoas tem menos de 5 anos
d) Qual foi a maior idade lida*/
var ages = [
  {name: "Chris", age: 4 },
  {name: "Manon", age: 3},
  {name: "Zoe", age: 14},
  {name: "Marinette", age: 13},
  {name: "Adrian", age: 14},
  {name: "Alya", age: 13},
  {name: "Nino", age: 14},
  {name: "Gabriel", age: 37},
  {name: "Cloe", age: 16},
  {name: "Sabrina", age: 15},
]


function age(arr) {
  var oldestOne = []
  var currentAge = 0
  
  var averageAge = 0
  var greaterThan18Years = 0
  var lowerThan5Years = 0

  for (let i = 0; i < arr.length; i++) {
    //média de idades
    averageAge += arr[i].age
    
    // maiores de 18 anos
    if (arr[i].age > 18) {
      greaterThan18Years += 1
    }
    
    // menores que 5 anos

    if (arr[i].age < 5) {
      lowerThan5Years += 1
    }
    
    // maior idade
    
    // cortei um dobrado pra entender que se não colocasse: (arr.length - 1) ou (i < arr.length [no lugar de <=]) na ultima iteração do array o i seria indefinido e por isso ficaria dando um erro e não permitia que eu desse um console.log fora do for. e por causa desse erro eu era obrigado a dar um console.log dentro do for ou do if o que gerava duplicidade de informações. Descobri esse erro utilizando o comando ? para verificar se a variável que está sendo acessada é undefine ou nula. Então coloquei um console.log(arr[i]?.age) dentro do for e percebi que na última iteração do array ele ficava undefined. E aqui precisa ser arr.length - 1 pq a cada iteração está sendo feita uma comparação entre o item atual com o próximo. nesse caso não precisa ir até o último item do array pq  o próximo será undefined.

    //console.log(arr[i]?.age);
    if (currentAge < arr[i].age) {
			currentAge = arr[i].age
		  oldestOne.push(arr[i]);
		}
  }
  
  var average = averageAge / arr.length
  
  console.log("A média das idades é: " + average);
  console.log("Existem " + greaterThan18Years + " pessoas maiores de 18 anos");
  console.log("Existem " + lowerThan5Years + " pessoas menores que 5 anos");
  console.log("A maior idade é de: " + oldestOne[oldestOne.length - 1].name + " com " + oldestOne[oldestOne.length - 1].age + " anos.");
  
}

//age(ages)

/*53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
a) Quantos homens foram cadastrados
b) Quantas mulheres foram cadastradas
c) A média de idade do grupo
d) A média de idade dos homens
e) Quantas mulheres tem mais de 20 anos*/

function gender() {
  var genders = [
    {name: "Adrien", age: 15, gender: "M"},
    {name: "Marinette", age: 14, gender: "F"},
    {name: "Alya", age: 14, gender: "F"},
    {name: "Nino", age: 15, gender: "M"},
    {name: "Natalie", age: 30, gender: "F"},
  ];
  
  var howManyMens = 0
  var howManyWomans = 0
  var averageAgeOfGroup = 0
  var averageAgeOfMens = 0
  var howManyWomansGreaterThan20Years = 0
  
  for (let index = 0; index < genders.length; index++) {
    // quantos homens
    if (genders[index].gender == "M") {
      howManyMens += 1
      // media de idade dos homens 
      averageAgeOfMens += genders[index].age
    }

    // quantas Mulheres
    if (genders[index].gender == "F") {
      howManyWomans += 1;
      // quantas mulheres tem mais de 20 anos
      if (genders[index].age > 20) {
        howManyWomansGreaterThan20Years += 1
      };
    }
    // a média de idades
    averageAgeOfGroup += genders[index].age;

    
    
  }

  console.log("foram cadastrados " + howManyMens + " homens");
  console.log("foram cadastradas " + howManyWomans + " mulheres")
  var averageOfGroup = averageAgeOfGroup / genders.length;
  console.log("a media das idades do grupo é: " + averageOfGroup);
  var averageOfMens = averageAgeOfMens / howManyMens
  console.log("a media das idades dos homens é: " + averageOfMens);
  console.log("existe " + howManyWomansGreaterThan20Years + " mulheres acima de 20 anos");

}

//gender()


/*54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
no final:
a) Qual foi a média de altura do grupo
b) Quantas pessoas pesam mais de 90Kg
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.*/

var peoples = [
	{ name: "Marinette", height: 1.59, weight: 49.3 },
	{ name: "Adrian", height: 1.80, weight: 67 },
	{ name: "Alya", height: 1.73, weight: 54.5 },
	{ name: "Nino", height: 1.79, weight: 56.1 },
	{ name: "Gabriel", height: 1.95, weight: 100.2 },
	{ name: "Cloe", height: 1.70, weight: 102.9 },
	{ name: "Sabrina", height: 1.60, weight: 51.3 },
];

function infoOfPeoples(arr) {
  var mediaAlturaGrupo = 0
  var pesaMaisQue90 = 0
  var pesamMenosQue50 = 0
  var medemMaisQue90 = 0
  for (let i = 0; i < arr.length; i++) {
    // media de altura do grupo 
    mediaAlturaGrupo += arr[i].height
    
    //pesam mais de 90
    if (arr[i].weight > 90) {
      pesaMaisQue90 += 1
    }
    //pesam menos de 50kk e tem menos de 1.60

    if (arr[i].weight < 50 && arr[i].height < 1.60) {
      pesamMenosQue50 += 1
    }
    // medem mais de 1.90 e pesam mais de 100kg
    if (arr[i].height > 1.90 && arr[i].weight > 100) {
      medemMaisQue90 += 1
    }
  }
  
  mediaAltura = mediaAlturaGrupo / arr.length
  console.log("a media das altura do grupo é: " + mediaAltura.toFixed(2));

  console.log(pesaMaisQue90 + " pessoas pesam mais que 90Kg");
  console.log(pesamMenosQue50 + ' pessoas pesam menos de 50kg e tem menos de 1,60m');
  console.log(medemMaisQue90 + ' pessoas medem mais de 1.90 e pesam mais de 100kg');
  
}
//infoOfPeoples(peoples)

/*55)[DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
tentativas para tentar acertar.

32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.
*/

var tentativas = [0, 5, 0, 10]
//var tentativas = [2, 5, 5, 10];
//var tentativas = [1, 2, 3, 14];
//var tentativas = [1, 2, 3, 4];

function sorteio(arr) {
  var sorteio = Math.ceil(Math.random() * 10); 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == sorteio) {
      return console.log(`parabéns, você acertou, o número sorteado foi: ${sorteio} e sua ${i + 1}ª tentativa foi: ${arr[i]}`);
    } 
      if (arr[i] > 10 || arr[i] <= 0) {
        console.log(`sua tentativa ${i + 1} não estão entre 1 e 10`);
        continue;
      }
    
      console.log(`Você errou! O número que eu sorteei foi: ${sorteio} e você chutou: ${tentativas[i]} na ${i+1}ª tentativa.`);
    
    
  }
}
//sorteio(tentativas)