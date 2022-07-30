// Esse programa foi criado por mim para calcular o meu salário considerando a regra 70/30. No final ele compara quanto de dinheiro entrou e os meus gasto para fazer o balanço mensal e informa se estou no positivo ou no negativo.

function mediaCartao() {
  var gastoMensal = 0
  var parcelas = [
    {mes: "Jan", valor: 295.49},
    {mes: "Fev", valor: 679.49},
    {mes: "Mar", valor: 52.70},
    {mes: "Abr", valor: 57.15},
    {mes: "Mai", valor: 194.53},
    {mes: "Jun", valor: 116.73},
    {mes: "Jul", valor: 56.24},
    {mes: "Ago", valor: 27.73},
    {mes: "Set", valor: 40.60},
    {mes: "Out", valor: 63.32},
    {mes: "Nov", valor: 124.23},
    {mes: "Dez", valor: 110.44},
  ]
  for (let i = 0; i < parcelas.length; i++) {
    gastoMensal += parcelas[i].valor
  }

  media = gastoMensal / parcelas.length

  console.log(`Você gastou nesse último ano uma média de: ${media.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} com cartão de crédito`);
}
mediaCartao()



let receitas = [
	(fixas = [
		{ nome: "Auxílio Emergencial", valor: 600 },
		{ nome: "BPG - Milena", valor: 0 },
		{ nome: "Eden - prt", valor: 160 },
		{ nome: "Bolsa Programação - Mestrado", valor: 1200 },
	]),
	(ocasionais = [{ nome: "Papis", valor: 0 }]),
];


var despesas = [
	fixas = [
		{ nome: "aluguel", valor: 500 },
		{ nome: "internet", valor: 59.9 },
		{ nome: "energia", valor: 50 },
		{ nome: "Água", valor: 35 },
		{ nome: "gás", valor: 40 },
		{ nome: "Supermercado", valor: 200 },
		{ nome: "Frutas/Verduras", valor: 50 }, //200
		{ nome: "remédioT", valor: 0 }, // 26
		{ nome: "Cabelo", valor: 10 },
		{ nome: "Cartão", valor: 150 }, //300
		//{ nome: "plano de saúde", valor: 400 }, //400
		//{ nome: "plano dentário", valor: 80 }, //80
	],
  
	variaveis = [
    //{ nome: "lazer / PS", valor: 60 },
		//{ nome: "restaurante", valor: 100 },
		{ nome: "Transporte", valor: 448 }, //20
    //{ nome: "imprevisto", valor: 150 },
    //{ nome: "viagens", valor: 350 },
    //{ nome: "telefone", valor: 30 },
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

  console.log(`Se o seu total de despesas é: ${totalDespesas.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} e você quer acrescentar ${lucro}% de lucro, então seu salário deve ser ${salario.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} reais.`);
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
  console.log(`Seu total de Receitas é: ${total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);
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



  console.log(`Seu saldo foi ${balanceText}: R$ ${total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);
}

calcBalanco()