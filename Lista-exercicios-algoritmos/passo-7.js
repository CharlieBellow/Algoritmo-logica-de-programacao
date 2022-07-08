//PASSO 07 – REPETIÇÃO COM PARA

/*64) Desenvolva um programa usando a estrutura “para” que mostre na tela a
seguinte contagem:
0 5 10 15 20 25 30 35 40 Acabou!*/

function conta40() {
  for (let i = 0; i <= 40; i+=5) {
    console.log(i);
  }
  console.log("Acabou!");
}
//conta40()

/*65) Desenvolva um programa usando a estrutura “para” que mostre na tela a
seguinte contagem:
100 90 80 70 60 50 40 30 20 10 0 Acabou!*/
function decrescente() {
  for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
  }
  console.log("Acabou!");
}
//decrescente()

/*66) Escreva um programa que leia um número qualquer e mostre a tabuada desse
número, usando a estrutura “para”.
Ex: Digite um valor: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15 ...*/

function tabuada(num) {
  for (let i = 1; i <= 10; i++) {
    resultado = num * i
    console.log(`${num} x ${i} = ${resultado}`);
  }

}
//tabuada(12)

/*67) Faça um programa usando a estrutura “para” que leia um número inteiro
positivo e mostre na tela uma contagem de 0 até o valor digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!*/
function contador(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("FIM!");
}
//contador(7)


/*68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
“para”. No final, mostre na tela:
a) Quantas mulheres foram cadastradas
b) Quantos homens pesam mais de 100Kg
c) A média de peso entre as mulheres
d) O maior peso entre os homens*/


function pessoas() {
  var pessoa = [
    {nome: "Claudia", genero: "f", peso: 80.0},
    {nome: "Gilberto", genero: "m", peso: 100.1},
    {nome: "Mariana", genero: "m", peso: 105.6},
    {nome: "Carol", genero: "f", peso: 70.7},
    {nome: "João", genero: "m", peso: 70.8},
    {nome: "Charlie", genero: "m", peso: 68.9},
    {nome: "Milena", genero: "f", peso: 49.5},
    {nome: "Gustavo", genero: "m", peso: 72.5},   
  ];

  var mulheres = 0;
  var homens = 0;
  var maior100 = 0;
  var somaPesoH = 0;
  var somaPesoM = 0;

  // enquanto tava i<= arr.length ele dava erro em arr[i].genero, quando tirei ele resolveu. Pq o array tem 8 lugares, mas o i tá iniciando em ero. e como eu só quero que o array itere até o array acabar, eu tenho que ir de zero a 7 então de i até que ele seja menor que o array todo que é 8 (por isso i< arr.length), se seu colocasse <= ele ia iterar mais uma vez e não ia encontrar arr[i].genero.. por isso dava o erro.
  for (let i = 0; i < pessoa.length; i++) {
    //a) Quantas mulheres foram cadastradas
    if (pessoa[i].genero == "f") {

      mulheres += 1
      //c) A média de peso entre as mulheres
      somaPesoM += pessoa[i].peso
    }
    
    if (pessoa[i].genero == "m") {
      //d) O maior peso entre os homens
      somaPesoH += pessoa[i].peso
      homens += 1


      //b) Quantos homens pesam mais de 100Kg
      if (pessoa[i].peso >= 100) {
        maior100 += 1
      }
    }
  }

  mediaPesoH = somaPesoH / homens
  mediaPesoM = somaPesoM / mulheres

  console.log(`
  Foram cadastradas ${mulheres} mulheres;
  ${maior100} homens pesam mais de 100Kg;
  A média de peso entre as mulheres é: ${mediaPesoM.toFixed(2)};
  A média de peso entre os homens é: ${mediaPesoH.toFixed(2)}`);
}
//pessoas()


/*69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
a soma entre todos os valores da sequência.*/
// OBS.: tive dificuldade em fazer pq mesmo depois de pesquisar não entendi bem o conceito de PA, apenas reproduzi em código as fórmulas matemáticas que encontrei em minhas pesquisas
//an = a1 + (n – 1) r
//Sn = n(a1 + an)
//       2

function PA(n, r) {
  var pa
  var soma
  for (let i = 1; i < 10; i++) {
    pa = n + (10 - 1) * r

    soma = (10 * (n + pa)) / 2
    console.log('pa: ' + pa);
    console.log("soma: " + soma);
  }

}

//PA(2, 2)

/*70) [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
de Fibonacci:
1 1 2 3 5 8 13 21...*/

function fibonacci() {
  v1 = 0
  v2 = 1
  console.log(v1);
  console.log(v2);
  for (let i = 1; i < 9; i++) {

    soma = v1 + v2
    console.log(soma);
    v1 = v2
    v2 = soma
  }
}

//fibonacci()