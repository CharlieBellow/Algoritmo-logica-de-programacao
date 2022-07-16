// ##### PASSO 10 – FUNÇÕES
//95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai
//receber dois parâmetros e vai retornar o resultado da soma entre eles para o
//programa principal.
//90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Somador() que vai calcular e mostrar a soma entre
//eles.

function procedimento() {
	function Somador(n1, n2) {
		soma = n1 + n2;
		return soma;
	}

	num1 = parseInt(prompt("Digite o primeiro número da soma: "));
	num2 = parseInt(prompt("Digite o segundo número da soma:"));
	Somador(num1, num2);

	alert(`A soma entre ${num1} e ${num2} é: ${soma}`);
}
//procedimento()

//96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
//um aluno e retornar a sua média para o programa principal.

function calcMedia() {
  function Media(n1, n2) {
    media = (n1 + n2) / 2;
    return media
  }

  nota1 = 7.5
  nota2 = 3.5
  Media(nota1, nota2)

  console.log(`A média do aluno é ${media}`);
}
//calcMedia()

//97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
//adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
//maior entre eles.
//91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Maior() que vai verificar qual deles é o maior e
//mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
//informando essa característica.

function maiorNumero() { 
  var maiorNum = 0
  function Maior(n1, n2, n3) {
    let arr = [n1, n2, n3];
    for (let i =  0; i < arr.length; i++) {
      if (arr[i] > maiorNum) {
        maiorNum = arr[i]
        return maiorNum
      }
    }
  }

  numero1 = 30
  numero2 = 3
  numero3 = 2
  
  Maior(numero1, numero2, numero3)
  
  console.log(`O maior Número é: ${maiorNum}`);
}

//maiorNumero();

//98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois
//números como parâmetro e depois vai retornar a soma de todos os valores no
//intervalo entre os valores recebidos.
//Ex:
//SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
//SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

// somando um número de 1 em 1 até chegar em um número específico
function programa() {
  var soma = 0
  function SuperSomador(num1, num2) {
    contador = num1
    for (let i = num1; i <= num2; i++){
      soma += contador 
  
      contador+=1
    }
    return soma
  }
    
    inicia = 15
    fim = 19
  SuperSomador(inicia, fim)
    console.log("resultado da soma é: " + soma);

}
//programa()


//99) Faça um programa que possua uma função chamada Potencia(), que vai receber
//dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
//exponenciação.
//Ex: Potencia(5,2) vai calcular 5 elevado a 2ª potencia = 25

function Potenciacao() {
	function Potencia(base, expoente) {
    expo = base ** expoente;
		return expo;
	}

	numero = 2;
	potencia = 10;
	

	Potencia(numero, potencia);

	console.log(`${numero} elevado à ${potencia}ª potencia é: ${expo}`);
}

//Potenciacao()



//100) Melhore o exercício 96, criando além da função Media() uma outra função
//chamada Situacao(), que vai retornar para o programa principal se o aluno está
//APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
//parâmetro o resultado retornado pela função Media().
//96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
//um aluno e retornar a sua média para o programa principal.

function MediaAluno() {
  function Media(n1, n2) { 
    media = (n1 + n2) / 2
    return media
  }

  function Situacao(resultadoMedia) {
    if (resultadoMedia >= 7) {
      return resultado = "Aluno aprovado."
    }

    if (resultadoMedia < 7 && resultadoMedia >= 5) {
      return resultado = "Aluno em recuperação."
    }

    if (resultadoMedia < 5) {
      return resultado = "Aluno Reprovado."
    }
  }
  
  nota1 = 10
  nota2 = 5.5

  Media(nota1, nota2)
  Situacao(media)

  console.log(`A média do aluno foi ${media}, Resultado: ${resultado}`);
}
MediaAluno();