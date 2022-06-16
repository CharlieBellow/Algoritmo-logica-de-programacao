// Passo 2 - CONDIÇÕES BÁSICAS - Lista de Exercícios Guanabara

/*17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.*/

function velocidadeCarro() {
  var velocidade = parseInt(prompt("Qual a velocidade do carro?"))
  if (velocidade > 80) {
    alert("o seu carro foi multado!")
    
    kmExcedido = velocidade - 80
    multa = kmExcedido * 5
    
    alert(`A multa que você deve pagar é: ${multa.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} por ter excedido ${kmExcedido} Kms`)
  }
}

//velocidadeCarro()

/*18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.*/

function lulaLa() {
  var anoNascimento = parseInt(prompt("qual o seu ano de nascimento?"))
  var anoAtual = 2022
  var idadeVotar = 16
  if (anoAtual - anoNascimento >= idadeVotar) {
    alert("Tira o título, Vota! E FORA BOLSONARO !!!")
  }
}
//lulaLa()

/*19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento(se ficou acima da média 7.0).*/

function mediaAlune() {
  var nomeAluna = prompt("Qual o nome da pessoa aluna?")
  var nota1 = parseFloat(prompt(`qual a primeira nota de ${nomeAluna}`).replace(',', '.'))
  var nota2 = parseFloat(prompt(`qual a segunda nota de ${nomeAluna}`).replace(',', '.'))

  media = (nota1 + nota2) / 2

  if (media >= 7) {
    alert(`${nomeAluna} ficou com média ${media} e teve um bom aproveitamento do semestre!`)
  } else {
    alert(`${nomeAluna} ficou com média ${media} e não teve um bom aproveitamento do semestre, precisa estudar mais...`)
  }
}

//mediaAlune()


/*20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR.*/

function parOUImpar() {
  var number = parseInt(prompt("Digite um número: "))

  if (number % 2 == 0) {
    alert("o número e par!")
  } else if (number % 2 == 1) {
    alert("o número é impar!")
  } else {
    alert("digite um número inteiro!")
  }
}

//parOUImpar()

/*21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO.*/

function anoBissexto() {
  var ano = parseInt(prompt("digite um ano que eu te direi se é bissexto ou não"))

  if (ano % 4 == 0) {
    if (ano % 100 == 0) {
      if (ano % 400 == 0) {
        alert(`${ano} é bissexto!`)
      } else {
        alert(`${ano} não é um ano bissexto`)
      }
    } else {
      alert(`${ano} é um ano bissexto, tem 366 dias!`);
    } 
  } else {
    alert(`${ano} não é bissexto`)
  }
}

//anoBissexto()

/*22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
  alistamento.*/

function alistamento() {
  var anoNasc = parseInt(prompt("digite o ano em que você nasceu"))

  var anoAtual = 2022
  var maiorIdade = 18
  var idade = anoAtual - anoNasc;
  if (idade >= maiorIdade) {
    var passouAlistamento = idade - maiorIdade
    alert(`passaram-se ${passouAlistamento} anos desde que você se alistou`)
  }

  if (idade < maiorIdade) {
    var faltaAlistamento = maiorIdade - idade
    alert(`Faltam ${faltaAlistamento} anos para você se alistar`)
  }
}
//alistamento()

  
/*23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
- Homens ganham 5% de desconto
  - Mulheres ganham 13 % de desconto*/

function descontoMulher() {
  var nome = prompt("Qual  seu nome?")
  var genero = prompt(`${nome}, com qual gênero você se identifica?
  [1] Mulher
  [2] Homem
  [3] outros`)
  var valorCompras = parseFloat(prompt(`Qual foi o valor das suas compras, ${nome}`).replace(",", "."))
var desconto = 0
  if (genero == 1) {
    desconto = 13
    precoDesconto = valorCompras * desconto / 100
    valorFinal = valorCompras - precoDesconto
    alert(`${nome}, seu desconto será de ${desconto}% e você pagará ${valorFinal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
  } else {
    // 5%
    desconto = 5;
    precoDesconto = (valorCompras * desconto) / 100;
    valorFinal = valorCompras - precoDesconto;
    alert(`${nome}, seu desconto será de ${desconto}% e você pagará ${valorFinal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)

  }
}
//descontoMulher()

/*24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.
*/
function cobraPassagem() {
  var distancia = parseFloat(prompt("quantos Km você quer percorrer?").replace(",", "."))
  //pq while não funciona?
  //while (distancia === Number) {
  // pq aqui não funciona?
  //if (distancia == NaN) {
  //  console.log(distancia);
  //  alert("digite apenas números")
  //}

    if (distancia <= 200) {
      valor = distancia * 0.5
      alert(`O valor a ser pago em sua viagem é ${valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
    } else if (distancia > 200) {
      valor = distancia * 0.45
      alert(`O valor a ser pago em sua viagem é ${valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);
    } else {
      alert("digite apenas números");
      // acho que isso tem a ver com o que Gustavo explicou sobre a diferença entre usar if(condição específica) ou usar else 
    }
    
  //}
}
//cobraPassagem()


/*25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.*/

// se a + b < c && a + c < b && c + b < a então forma triângulo
function souTriangulo() {
  var a = parseInt(prompt(`quanto mede a 1ª reta?`))
  var b = parseInt(prompt(`quanto mede a 2ª reta?`));
  var c = parseInt(prompt(`quanto mede a 3ª reta?`));

  if (a + b > c && a + c > b && c + b > a) {
    alert(`${a}, ${b} e ${c} podem formar um triângulo!`)
    // teste: 16 20 30
  } else {
    alert(`${a}, ${b} e ${c} não podem formar um triângulo...`);
    // teste: 40 80 20

  }
}

//souTriangulo()
