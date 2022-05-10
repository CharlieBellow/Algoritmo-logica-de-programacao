// Passo 1 - SEQUÊNCIAS BÁSICAS - Lista de Exercícios Guanabara

function getInput(texto, tipo) {
  if (tipo == "int") {
    input = parseInt(prompt(`${texto}` ))
    return input
  }

  if (tipo == "float") {
		input = parseFloat(prompt(`${texto}` ));
		return input;
  }
  
  if (tipo == "text") {
		input = prompt(`${texto}` );
		return input;
	}
}


// 1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"

//console.log("Olá Mundo!");

/* 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer! */

//console.log("Qual é o seu nome?");
//var nome = "Charlie" // 
function qualNome() {
  var nome = prompt("qual é o seu nome? ")
  console.log(`Olá ${nome}, é um prazer te conhecer!`);

}
//qualNome()

/* 
3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
 */
function SalarioFuncionaria() {
  var nomeFuncionaria = prompt("Qual o nome da pessoa funcionária?")
  var salario = parseFloat(prompt("Qual o salário da pessoa Funcionária?").replace(',', '.'))
  var funcionaria = {
    nome: nomeFuncionaria,
    salario: salario
  }
  alert(
		`A pessoa funcionária ${funcionaria.nome}, tem um salário de ${funcionaria.salario.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})} nesse mês`); // transformando para o modelo de salário do Brasil

}
//SalarioFuncionaria()


/* 4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13. */
function somatorio() {
  var numero1 = getInput("Digite um número: ", "int")
  var numero2 = getInput("digite outro número: ", "int")
  soma = numero1 + numero2
  alert(`a soma entre ${numero1} e ${numero2} é: ${soma}`)
}
//somatorio()


/* 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
Ex:
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5 */

function mediaAluna() {
  var nota1 = getInput("Digite a primeira nota da pessoa aluna:", 'float')
  var nota2 = getInput("Digite a segunda nota da pessoa aluna:", "float")

  media = (nota1 + nota2) / 2;

  alert(`a média da pessoa aluna é: ${media.toFixed(2).replace(".", ",")}`)
}
//mediaAluna()



/* 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10 */
function beforeAfter() {
  var num = getInput("digite um número:", "int")
  var before = num - 1;
  var after = num + 1

  alert(`o antecessor de ${num} é ${before}`)
  alert(`o sucessor de ${num} é ${after}`)
}
//beforeAfter()



/* 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte.
Ex:
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666 */

function numReal() {
  var number = parseFloat(prompt(`Digite um número real:`).replace(",", '.'))
  doble = number * 2
  thirdPart = number * (1 / 3)

  alert(`o dobro de ${number.toString().replace('.', ',')} é: ${doble.toFixed(1)}`)
  alert(`a terça parte de ${number.toString().replace('.', ',')} é ${thirdPart.toFixed(5)}`)
  alert(`arrendondando pra mais o próximo inteiro é: ${Math.ceil(thirdPart)}`)
  alert(`arredondando pra menos o inteiro mais próximo é: ${Math.floor(thirdPart)}`);
  alert(
		`arredondando no geral fica: ${Math.round(thirdPart)}`
	); // nesse caso se passar de 0,5 ele arredonda pra mais, se ficar antes de 0,5 ele arredonda pra menos

}

//numReal()


/* 8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm */

function distanciaMetros() {
  var metro = parseFloat(prompt('digite o valor em metros a ser convertido:').replace(',', '.'))
  
  var km = metro / 1000
  var hm = metro / 100
  var dam = metro / 10
  var dm = metro * 10
  var cm = metro * 100
  var mm = metro * 1000

  // como esse primeiro não precisa limitar as casas decimais com o tofixed, eu só preciso transformar em string e trocar ponto por vírgula pra exibir o resultado.; 
  alert(`${metro} metros são:
  ${km.toString().replace(".", ",")} Km,
  ${hm} hm,
  ${dam} dam,
  ${dm.toFixed(1).replace(".", ",")} dm,
  ${cm.toFixed(1).replace(".", ",")} cm,
  ${mm.toFixed(1).replace(".", ",")} mm
`);
}
//distanciaMetros()




/* 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45. */

function convertDolar() {
  var real = parseFloat(prompt("quantos reais você tem? \n R$: ").replace(',', '.'))
  console.log(real);
  dolar = 3.45
  
  convert = real / dolar

  alert(`você teria: ${convert.toLocaleString("EUA",  {style: 'currency', currency: "USD"})} dolares`)// convertendo pra moeda americana
}
//convertDolar()

/* 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados. */

function calculaTinta() {
  var larguraParede = parseFloat(prompt("Qual é a largura (em metros) da parede que você quer pintar?").replace(',', '.'))
  var alturaParede = parseFloat(prompt("Qual é a altura (em metros) da parede que você quer pintar?").replace(',', '.'))
  litros = 2 //litros de tinta que a parede pinta indicado no rótulo
  parede = alturaParede * larguraParede
  tinta = parede / litros

  alert(`se a tinta pinta ${litros}m² com um litro e a parede que você deseja pintar tem ${parede}m², você precisa de ${tinta}L de tinta para pintar a parede`)
}
//calculaTinta()


/* 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta. */

//"ax2 + bx +c = 0"
//delta: b² - 4ac
// se o resultado == 0 / completa
// se o resultado != 0 / incompleta

// x = ((-b) +(b ** 2 - 4 *a * c)) / (2 * a)

// não entendi muito bem como calcula essa forma
function bhaskara() {
	var a = parseFloat(prompt("informe o valor de A:"));
	var b = parseFloat(prompt("informe o valor de B:"));
	var c = parseFloat(prompt("informe o valor de C:"));
  delta = (b ** 2) - (4 * a * c)
  
  x = (-b + (delta)) / 2 * a

  alert(`o valor de delta é ${delta} e o valor de x é ${x}`)
}
//bhaskara()

/* 
Se o valor de Δ for maior que zero (Δ > 0), a equação terá duas raízes reais e distintas.

Se o valor de Δ for igual a zero (Δ = 0), a equação apresentará uma raiz real.

Se o valor de Δ for menor que zero (Δ<0), a equação não possui raízes reais. */





/* 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto. */

function desconto() {
  var preco = parseFloat(prompt("qual o valor do produto em reais?").replace(',','.'))
  var desconto = parseFloat(prompt("qual o valor do desconto (em %)?").replace(',', '.'));
  var desconto = (preco * desconto) / 100
  var promocao = preco - desconto
  alert(`O valor do produto com o desconto é ${promocao.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
}
//desconto()


/* 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento. */

function aumento() {
  var salario = parseFloat(prompt("Digite o seu salário atual:").replace(',','.'))
  var aumento = parseFloat(prompt("quantos % de aumento você quer?").replace(',','.'))
  calculo = salario * aumento / 100
  novoSalario = salario + calculo

  alert(`Seu novo salario é: ${novoSalario.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
}
//aumento()



/* 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado. */

function alugaCarro() {
  var kmPercorrido = parseFloat(prompt("quantos Km você rodou?").replace(',', '.'))
  var diasAlugados = parseFloat(prompt("quantos dias foram alugados? (em Km)").replace(',', '.'))

  kilometragem = kmPercorrido * 0.20
  console.log(kilometragem);
  diaria = diasAlugados * 90
  console.log(diaria);

  valorPago = diaria + kilometragem
  
  alert(`você pagará ${valorPago.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`) 
  
}
//alugaCarro()


/* 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada. */

function diasTrabalhados() {
  var diasTrabalhados = parseFloat(prompt("quantos dias você trabalhou nesse mês?").replace(",", '.'))
  dia = 8 * 25
  salario = dia * diasTrabalhados
  alert(`você receberá um salário de ${salario.toLocaleString("pt-BR",
    { style: "currency", currency: "BRL" })} 
    por ${diasTrabalhados} dias trabalhados`)
}
//diasTrabalhados()



/* 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. 
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 
Considere que um fumante perde 10 min de vida a cada cigarro. 
Calcule quantos dias de vida um fumante perderá e exiba o total em dias. */

function tempoDeVida() {
	var quantidadeCigarros = parseFloat(
		prompt("quantos cigarros você fuma por dia?").replace(",", ".")
	);
	var anosFumando = parseFloat(
		prompt("Há quantos anos você fuma?").replace(",", ".")
	);
  //var diasFumando = anosFumando * 365 // dias

  var minutos = anosFumando * 525600 // min 

  var perdeu = (quantidadeCigarros * minutos) / 10; // min
  var diasPerdidos = perdeu / 1440 // dias
  var anos = diasPerdidos / 365

  var ano = "anos"
  var dia = "dias"
  if (anosFumando < 2) {
      ano = "ano"
  }

  if (diasPerdidos < 2) {
    dia = "dia"
  }

  alert(
    `até agora você perdeu ${diasPerdidos.toFixed(2).replace(".", ",")} ${dia} 
    por estar fumando há ${anosFumando.toFixed(1).replace('.', ',')} ${ano}. 
    Isso equivale em média a ${anos.toFixed(1).replace(".", ",")} em anos.`
	);
}

//tempoDeVida()
