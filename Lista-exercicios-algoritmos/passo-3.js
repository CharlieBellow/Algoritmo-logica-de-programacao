// Passo 3 - CONDIÇÕES BÁSICAS - Lista de Exercícios Guanabara

/*26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
  - Não existe valor maior, os dois são iguais*/

function comparaNumero() {
  let n1 = parseInt(prompt("digite um número:"))
  let n2 = parseInt(prompt("digite outro número:"));
  
  compara = n1 - n2

  if (compara > 0) {
    alert("O primeiro valor é o maior");
  } else if (compara < 0) {
    alert("O segundo valor é o maior");
  } else if (compara == 0) {
    alert("Não existe valor maior, os dois são iguais");
  }
}
  //comparaNumero()

/*27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
  - Média 7.0 ou superior: APROVADO*/
function calculaNota() {
  
  {
  //var form = document.getElementById("formulario");
  //var botao = document.getElementById("botao")
	//var nota1 = document.getElementById("nota1");

	//botao.addEventListener("submit", function (e) {
		// impede o envio do form
    //calcula()

  //});

  //function calcula() {
      //e.preventDefault();
      //var nota1 = document.querySelector("#nota1").value;
      //var nota2 = document.querySelector("#nota2").value;
      
      //var resultado = nota1 + nota2
        //document.getElementById("result").innerHTML = resultado;
  //}
      
    //  var input1 = document.getElementById("nota1");
    //  //var nota2 = document.getElementById("nota2");
    //  //var resultado = document.getElementById("resultado");
    //  var nota1 = input1.value
    //console.log(nota1);
      //calcula = nota1 + nota2;
      //resultado.innerHTML = calcula;
    //resultado.textContent = calcula
    //resultado.value = calcula
  
      //resultado.textContent = calcula
      
      //resultado.innerHTML = calcula
  
    
  
    //resultado.innerHTML = document.createElement(`<textarea id="resultado" name="resultado" type="text" placeholder="verifique aqui seu resultado" cols="27">${calcula}</textarea>`);
      }

  var nota1 = parseInt(prompt('qual a nota do aluno na primeira prova?'))
  var nota2 = parseInt(prompt('qual a nota do aluno na segunda prova?'))

  media = (nota1 + nota2) / 2;

  if (media <= 4.9) {
    alert(`a média do aluno é ${media} e por isso ele foi Reprovado`)
  } else if (5 <= media && media <= 6.9) {
    alert(`a média do aluno é ${media} e por isso ele está em Recuperação`)
  } else if (media >= 7) {
    alert(`a média do aluno é ${media} e por isso ele foi Aprovado`);
    
  }
    
    
  }
//calculaNota()


/*28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
  - Acima de 500m² = TERRENO VIP*/
function calTerreno() {
  var largura = parseFloat(prompt("Qual a largura do terreno em m²?"))
  var altura = parseFloat(prompt("Qual a altura do terreno em m²?"))

  var areaTotal = largura * altura

  if (areaTotal < 100) {
    alert('esse terreno é Popular')
  } else if (100 <= areaTotal && areaTotal <= 500) {
    alert("esse terreno é Master");
  } else if (areaTotal > 500) {
    alert("esse terreno é Vip");
  }
}
//calTerreno()
  

/*29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%*/
function calcSalario() {
  var nome = prompt("qual o nome da pessoa funcionária?");
  var salario = parseFloat(prompt('qual é o salário dessa pessoa?'));
  var anosDeEmpresa = parseInt(prompt('há quantos anos essa pessoa está na empresa?'));
  var aumento = 0
  var novoSalario = 0
  var acrescimo = 0

  if (anosDeEmpresa <= 3) {
    aumento = 3
    acrescimo = salario * (3 / 100)
    novoSalario = salario + acrescimo
  
  } else if (3 <= anosDeEmpresa && anosDeEmpresa <= 10) {
    aumento = 12.5
    acrescimo = salario * (12.5 / 100)
    novoSalario = salario + acrescimo 
  
  } else if (anosDeEmpresa > 10) {
    aumento = 20
    acrescimo = salario * (20 / 100)
    novoSalario = salario + acrescimo
  }
  
  alert(
      `${nome} ganhou ${aumento}% de aumento e seu novo salário é: ${novoSalario}`
    );
}
  //calcSalario();

/*30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
de triângulo será formado:
- EQUILÁTERO: todos os lados iguais
- ISÓSCELES: dois lados iguais
  - ESCALENO: todos os lados diferentes

  25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.*/


function qualTriangulo() {
  var reta1 = parseInt(prompt('qual é o tamanho da primeira reta?'));
  var reta2 = parseInt(prompt('qual é o tamanho da segunda reta?'))
  var reta3 = parseInt(prompt('qual é o tamanho da terceira reta?'))
  var tipo
  if (reta1 + reta2 > reta3 && reta2 + reta3 > reta1) {
    
    if (reta1 == reta2 || reta2 == reta3) {
      tipo = "isósceles";
      
      if (reta1 == reta2 && reta2 == reta3 && reta1 == reta3) {
        tipo = "equilátero";
          
      }
		}
    
    if (reta1 != reta2 && reta2 != reta3 && reta1 != reta3) {
      tipo = 'escaleno'
    }
    
    
    alert(`é possível formar um triângulo do tipo: ${tipo}`)
  } else {
    alert('não é possível formar um triângulo')
  }
}

//qualTriangulo();

/*31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
*/

function jokenpo() {
  var numJogada = prompt(`Digite o número que corresponde a sua jogada:
  [1]pedra 
  [2]papel
  [3]tesoura
  [4]Sair`)

  while (!(numJogada == 4)) {
    var jogada
  
    if (numJogada == 1) {
      jogada = 'pedra'
    }
  
    if (numJogada == 2) {
      jogada = 'papel'
    } 
  
    if (numJogada == 3) {
      jogada = 'tesoura'
    }
    var jokenpo = ['pedra', 'papel', 'tesoura']
  
    var sorteia = Math.floor(Math.random() * (jokenpo.length)) 
    //console.log(`jogador: ${jogada}`);
    //console.log(`máquina: ${jokenpo[sorteia]}`);
    
    if (jogada == jokenpo[sorteia]) {
      return alert(`Você escolheu ${jogada} e a máquina ${jokenpo[sorteia]}, então ninguém ganhou`)
    } else if (jogada != jokenpo[sorteia]) {
      if (
				(jogada == "pedra" && jokenpo[sorteia] == "papel") ||
				(jogada == "papel" && jokenpo[sorteia] == "pedra")
      ) {
        if (jogada == 'papel') {
          ganhador = " o jogador"
          
        } else {
          ganhador = "a máquina";
        }
				return alert(`papel embrulha a pedra, ${ganhador} ganhou`);
			}
    }

    if (jogada == 'tesoura' && jokenpo[sorteia] == 'papel' || jogada == 'papel' && jokenpo == 'tesoura') {
      //tesoura corta papel

      if (jogada == 'tesoura') {
        ganhador = 'o jogador'
      } else {
        ganhador == 'a máquina'
      }
      return alert(`tesoura corta o papel, ${ganhador} ganhou`);
    }

    if (jogada == 'pedra' && jokenpo[sorteia] == 'tesoura' || jogada == 'tesoura' && jokenpo[sorteia] == 'pedra') {
      //pedra amassa tesoura
      if (jogada == 'pedra') {
        ganhador = 'o jogador'
      } else {
        ganhador = 'a máquina'
      }

      return alert(`pedra amassa tesoura, ${ganhador} ganhou`);

    }
    
    
    
  }
}
//jokenpo();

/*32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.
*/

function sorteio() {

  var sorteio = Math.floor(Math.random() * 6) // coloquei 6 pq apesar de a documentação no MDN dizer que se faz assim, qd coloco pra sortear até 5 ele sorteia até 4. Então pra ficar certo coloquei até 6
  console.log(sorteio);
  var tentativa = parseInt(prompt('sorteei um número entre 1 e 5, qual número você acha que foi?'))

  if (tentativa == sorteio) {
    alert('parabéns, você acertou! ')
  } else {
    if (tentativa > 5 || tentativa <= 0) {
      return alert('esse número não está entre 1 e 5')
    }
    alert(`O número que eu sorteei foi: ${sorteio} e você chutou: ${tentativa}`)
  }


}
//sorteio()

/*33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30 % do salário ou então o empréstimo será negado.*/

function emprestimo() {
  var valorCasa = parseFloat(prompt('Qual é o valor da casa?').toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
  var salario = parseFloat(prompt('Qual é o seu salário atual?').toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
  var anosPagando = parseInt(prompt('Em quantos anos você vai pagar?'))

  maxPrestacao = salario * (30 / 100);
console.log("maxPrestação: " + maxPrestacao);
  var emprestimo = valorCasa / anosPagando
console.log("emprestimo: " + emprestimo);

  mensalidade = emprestimo / 12
console.log("mensalidade: " + mensalidade);

  if (mensalidade > maxPrestacao) {
    alert('o empréstimo foi negado')
  } else if(mensalidade <= maxPrestacao){
    alert('empréstimo aprovado com uma prestação de: ' + mensalidade.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))
  }
}

//emprestimo()

/*34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
indivíduo dentro de certas faixas.
- abaixo de 18.5: Abaixo do peso
- entre 18.5 e 25: Peso ideal
- entre 25 e 30: Sobrepeso
- entre 30 e 40: Obesidade
- acima de 40: Obseidade mórbida
Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
da altura)*/


/*35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
tabela a seguir:
- Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
  - Acima de 200Km percorridos: R$0, 25 por Km*/


/*36) Um programa de vida saudável quer dar pontos atividades físicas que podem
ser trocados por dinheiro. O sistema funciona assim:
- Cada hora de atividade física no mês vale pontos
- até 10h de atividade no mês: ganha 2 pontos por hora
- de 10h até 20h de atividade no mês: ganha 5 pontos por hora
- acima de 20h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
  calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/


/*37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25%*/