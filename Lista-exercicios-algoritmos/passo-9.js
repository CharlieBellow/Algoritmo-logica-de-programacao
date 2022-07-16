// ####### PASSO 09 – PROCEDIMENTOS
//86) Crie um programa que tenha um procedimento Gerador() que, quando chamado,
//mostre a mensagem "Olá, Mundo!" com algum componente visual (linhas)
//Ex: Ao chamar Gerador() aparece:
//+-------=======------+
//Olá, Mundo!
//+-------=======------+

function Gerador() {
  console.log(`
  +--------------------+
  Olá, Mundo!
  +--------------------+`);
}
//Gerador()

//87) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem personalizada, passada como parâmetro.
//Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
//+-------=======------+
//Aprendendo Portugol
//+-------=======------+

function GeradorPersonalizado(mensagem) {
  console.log(`
  +--------------------+
  ${mensagem}
  +--------------------+
  `);
}
//GeradorPersonalizado("Aprendendo Portugol");
//GeradorPersonalizado("Aprendendo Javascript");


//88) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem vário
//Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
//+-------=======------+
//Aprendendo Portugol
//Aprendendo Portugol
//Aprendendo Portugol
//Aprendendo Portugol
//+-------=======------+

function GeradorPersonalizadoMultiplo(mensagem, vezes) {
  var texto = ""
  for (let i = 0; i < vezes; i++) {
  texto += mensagem + "\n  ";
  }

  // como fazer quebra de linha?
  console.log(`
  +--------------------+
  ${texto}+--------------------+`);
}

//GeradorPersonalizadoMultiplo("Aprendendo Portugol", 4);


//89) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que o programador possa escolher uma entre três bordas:
//+-------=======------+ Borda 1
//~~~~~~~~:::::::~~~~~~~ Borda 2
//<<<<<<<<------->>>>>>> Borda 3
//Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
//~~~~~~~~:::::::~~~~~~~
//Portugol Studio
//Portugol Studio
//Portugol Studio
//~~~~~~~~:::::::~~~~~~~

function GeradorOpcao(mensagem, vezes, borda) {
  let texto = ""
  let bordaTipo = ""
  for (let i = 0; i < vezes; i++) {
    texto += mensagem + "\n  " 
  }

  if (borda == 1) {
    bordaTipo = "+-------=======------+";
  }

  if (borda == 2) {
    bordaTipo = "~~~~~~~~:::::::~~~~~~~";
  }

  if (borda == 3) {
    bordaTipo = "<<<<<<<<------->>>>>>>";
  }
  
  console.log(`
  ${bordaTipo}
  ${texto}${bordaTipo}`);
}
//GeradorOpcao("Portugol Studio", 3, 2);

//90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Somador() que vai calcular e mostrar a soma entre
//eles.

// escrever as funções começando com letra maiúscula é uma boa prática?
function procedimento() {
  function Somador(n1, n2) {
    soma = n1 + n2;
    return soma
  }

  num1 = parseInt(prompt("Digite o primeiro número da soma: "));
  num2 = parseInt(prompt("Digite o segundo número da soma:"));
  Somador(num1, num2)

  alert(`A soma entre ${num1} e ${num2} é: ${soma}`);
}

//procedimento()


//91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Maior() que vai verificar qual deles é o maior e
//mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
//informando essa característica.

function MaiorValor() {
  var resultado = ""

  numero1 = parseInt(prompt("Digite o primeiro número da comparação: "));
  numero2 = parseInt(prompt("Digite o segundo número da comparação:"));
  
  function Maior(num1, num2) {
    if (num1 < num2) {
      resultado = `${num2} é maior que ${num1}.`
      return resultado
    }

    if (num2 < num1) {
      resultado = `${num1} é maior que ${num2}.`
      return resultado
    }

    if (num1 == num2) {
      resultado = `${num1} e ${num2} são iguais.`
    }
  }

  Maior(numero1, numero2)

  alert(resultado);
}

//MaiorValor()

//92) Crie uma lógica que leia um número inteiro e passe para um procedimento
//ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
//parâmetro é PAR ou ÍMPAR.

function verificacao() {
  var resultado = ""
  var n = -12
  //n = 5
  function impaOuPar(numero) {
    if (numero % 2 == 0) {
      resultado = "par"
      return resultado
    }

    if (numero % 2 != 0) {
      resultado = "ímpar"
      return resultado 
    }
  }
  impaOuPar(n)
  console.log(`${n} é ${resultado}`);
}
//verificacao()

//93) Faça um programa que tenha um procedimento chamado Contador() que recebe
//três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
//programa principal deve solicitar a digitação desses valores e passá-los ao
//procedimento, que vai mostrar a contagem na tela.
//Ex: Para os valores de início (4), fim (20) e incremento(3) teremos
//Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >> FIM

function contagem() {
  function Contador(inicio, fim, incremento) {
    for (let index = inicio; index <= fim; index += incremento) {
      console.log(index);
    }
    console.log("Fim!");

  }
  Contador(-3, 15, 2)

}

//contagem()

//94)[DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
//Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
//termos da sequência serão mostrados na tela. O seu procedimento deve receber
//esse valor e mostrar a quantidade de elementos solicitados.
//Obs: Use os exercícios 70 e 75 para te ajudar na solução
//Ex:
//Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
//Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM
function Fibo() {
  function Fibonacci(nTermos) {
    var v1 = 0
    var v2 = 1
    var novoValor = 0
    for (let i = 0; i < (nTermos - 2); i++) {

      if (v1 == 0 && v2 == 1) {
        console.log(v1);
        console.log(v2);
      }
      novoValor = v1 + v2
      console.log(novoValor);
  
      v1 = v2
      v2 = novoValor
    }
  }  
  Fibonacci(7)
}
//Fibo()