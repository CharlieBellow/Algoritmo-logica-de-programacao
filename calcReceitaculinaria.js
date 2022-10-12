// utilizar esse site para ver as quantidades que usa de cada coisa: https://conversor-de-medidas.com/culinaria-vm/--4--colher-de-sopa--de--leite-em-p%C3%B3--em--grama

var palha = [
  ingredientesNecessarios = [
    {nome: 'leite em pó', valor: 0.53},
    {nome: 'leite condensado', valor: 13},
    {nome: 'paçoca', valor: 6 },
    {nome: 'margarina', valor: 0.50},
    {nome: 'chocolate em pó', valor: 1.30},
  ],
  outrosCustos = [
    {nome: 'gás', valor: 0.36},
    {nome: 'papel manteiga', valor: 1.09},
    {nome: 'congelador 12h', valor: 0.20},
  ]
];

var bolo = [
	(ingredientesNecessarios = [
		{ nome: "leite em pó", valor: 2 },
		{ nome: "leite condensado", valor: 6.5 },
		{ nome: "paçoca", valor: 2 },
		{ nome: "margarina", valor: 3.2 },
		{ nome: "chocolate em pó", valor: 1.3 },
		{ nome: "farinha", valor: 2 },
		{ nome: "açúcar", valor: 1.6 },
		{ nome: "ovos", valor: 3.5 },
	]),
	(outrosCustos = [
		{ nome: "gás", valor: 0.36 },
		{ nome: "papel manteiga", valor: 1.09 },
		{ nome: "congelador 12h", valor: 0.2 },
	]),
];

function quantoUsoDeCada(quantidadeCompra, quantidadeUso, valorComprado) {
  
  calc = valorComprado * quantidadeUso
  total = calc / quantidadeCompra
  console.log(total);
}
quantoUsoDeCada(1000, 422, 4);
// fazer uma função que pegue o objeto com as medidas certas e já calcule o valor que gsta e adicione mais uma chave no objeto com esse valor, aí depois só roda a função que calcula o preço certo do produto


function calculaGastoReceita(array) {
  var calculoDespesas = 0
  for (let i = 0; i < array.length; i++) {
    for (let index = 0; index < array[i].length; index++) {
      calculoDespesas += array[i][index].valor;
    }
  }

  lucro = 20;
  acrescimo = lucro / 100

  montante = calculoDespesas * acrescimo
  precoDaReceita = calculoDespesas + montante

  console.log(`Você gasta ${calculoDespesas.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})} reais com seu produto. Para obter ${lucro}% de lucro, você precisa vender por ${precoDaReceita.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})} reais.`);
}

calculaGastoReceita(palha)
calculaGastoReceita(bolo);
