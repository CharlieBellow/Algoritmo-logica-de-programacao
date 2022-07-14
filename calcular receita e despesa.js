// Esse programa foi criado por mim para calcular o meu salário considerando a regra 70/30. No final ele compara quanto de dinheiro entrou e os meus gasto para fazer o balanço mensal e informa se estou no positivo ou no negativo.

let receitas = [fixas = [
  {nome: "Auxílio Emergencial", valor: 600},
  {nome: "BPG - Milena", valor: 0}, 
  {nome: "Eden - prt", valor: 160}
],
  ocasionais = [ 
    {nome: "Papis", valor: 0},
  ]
]


var despesas = [
	fixas = [
		{ nome: "aluguel", valor: 500 },
		{ nome: "internet", valor: 59.9 },
		{ nome: "energia", valor: 120 },
		{ nome: "Água", valor: 0 },
		{ nome: "gás", valor: 40 },
		{ nome: "Supermercado", valor: 200 },
		{ nome: "Frutas/Verduras", valor: 200 },
		{ nome: "remédioT", valor: 50 },
		{ nome: "Cabelo", valor: 10 },
		{ nome: "Cartão", valor: 300 },
		{ nome: "plano de saúde", valor: 400 },
		{ nome: "plano dentário", valor: 80 },
	],
  
	variaveis = [
    { nome: "lazer / PS", valor: 60 },
		{ nome: "restaurante", valor: 100 },
		{ nome: "Transporte", valor: 20 },
    { nome: "imprevisto", valor: 150 },
    { nome: "viagens", valor: 350 },
    { nome: "telefone", valor: 30 },
	],
];

function calcDespesas(array) {
  
  
  var totalDespesas = 0
  for (let f = 0; f < array.length; f++) {
    for (let o = 0; o < array[f].length; o++) {
      //console.log(array[f][o].nome + " f valendo " + f + "  /  e   o valendo " + o);
      totalDespesas += array[f][o].valor;
      
      
    }
  }

  lucro = 30;
  acrescimo = lucro / 100
  montante = totalDespesas * acrescimo;
  salario = totalDespesas + montante

  console.log(`Se o seu total de despesas é: ${totalDespesas} e você quer acrescentar ${lucro}% de lucro, então seu salário deve ser ${salario.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} reais.`);
  return totalDespesas
  
  
  
}
//calcDespesas(despesas);






function soma(array) {
  let total = 0;
  
	for (let f = 0; f < array.length; f++) {
		for (let o = 0; o < array[f].length; o++) {
			
			total += array[f][o].valor;
		}
	}
  return total
}



function calcBalanco() {
  const calcularReceitas = soma(receitas);
  const calcularDespesas = calcDespesas(despesas)

  const total = calcularReceitas - calcularDespesas

  const casoSaldoPositivo = (total >= 0)

  let balanceText = "negativo"  // se for abaixo de zero já é negativo

  if (casoSaldoPositivo) {
    balanceText = "positivo" // se for acima de zero ele atualiza para positivo
  }

  console.log(`Seu saldo foi ${balanceText}: R$ ${total.toFixed(2)}`);
}

calcBalanco()