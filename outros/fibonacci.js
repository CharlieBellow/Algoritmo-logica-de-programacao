//function fibo(v1, v2, nItem) {
//  if (nItem == 1) {
//    return v1
//  }
//
//  if (nItem == 2) {
//    return v2;
//  }
//
//  
//  return fibo(v1, v2, nItem - 1) + fibo(v1, v2, nItem - 2)
//}


// fibo(0, 1, 1) = 0
// fibo(0, 1, 2) = 1

//fibo(0, 1 , x) = fibo(0, 1, x - 1) + fibo(0, 1, x - 2) 

//console.log(fibo(0, 1, 20))
//console.log(fibo(0, 1, 19));
//console.log(fibo(0, 1, 18));
//console.log(fibo(0, 1, 1));
//console.log(fibo(0, 1, 2));

function fat(nItem) {
	//if (nItem == 1) {
	//	return 1;
	//}

	//if (nItem == 2) {
	//	return 2;
	//}
var i = 4
	while (i >= 1) {
		fat(nItem - i) * fat(nItem - (i -1));
		i -= 1
	}
}

console.log(fat(5))

// recursivo no fatorial

// calculando o fatorial (contagem regressiva) de um numero
function Fato(nFat) {
	  
  //var contad = nFat
  //var fat = 1
	//
  //do {
  //  console.log(`${contad} X ${nFat} = ${contad * nFat}`);
  //  fat *= contad
  //  contad -= 1
  //} while (contad >= 1)
  //  console.log(`o valor do fatorial de ${nFat} é igual a: ${fat}`);
  
  //console.log(`${nFat} X ${nFat} = ${nFat * nFat}`);
  
  //return console.log(Fatorial(nFat)*nFat -1);
  /* Fatorial(5) = 5 * 4 = 20, 20 * 3 = 60, 60 * 2 = 120, 120 * 1 = 120  ....
  
  resultado = NFatorial
  resultado = nFatorial * (nFatorial -1)
  resultado = 20 * (nFatorial -1)

 
}


  */
  
// let contador = nFat;
//  let fat = 1
//  while (contador >= 1) {
//    fat *= contador
//  contador--;
//    console.log(fat);
//
//    return Fato(nFat) 
//  }
  
}

console.log(Fato(5));

function Fatorial(nFatorial) {
	
	//refazendo usando função com passagem de parâmetro do tipo valor
	//   
	//
	//    function Fatorial(nFatorial) {
	//
	//      contador = nFatorial
	//      fatorial = 1
	//      resposta = "s"
	//
	//      do {
	//        console.log(`${contador} X ${nFatorial}`);
	//        fatorial *= contador
	//        contador -= 1
	//      } while (contador >= 1)
	//
	//      console.log(`o valor do fatorial de ${nFatorial} é igual a: ${fatorial}`);
	//
	////     
	//    }
	//console.log(Fatorial(5));
	//  console.log(Fatorial(7));
	//return Fatorial(nFatorial) * Fatorial(nFatorial-1)
	//return `o valor do fatorial de ${nFatorial} é igual a: ${fatorial}`;
}

console.log(Fatorial(5));

// falotiral(5) = 
//5 * 5
//5 * 5-1
//5 * (5-1)-1



//console.log(Fatorial(7));


//
//let contador = 5
//let fat = 1
//while (contador >= 1) {
//  fat = 5 * (contador - 1)
//  contador--
//  resultado = fat * contador
//  console.log(contador);
//  console.log(fat);
//}

//return 