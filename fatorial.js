function Fat(nFat) {
  let contador = nFat
  //let fat = 0
  let resultado
  resultado = nFat * (contador - 1)
  for (contador; contador >= 1; contador--) {
    
    //console.log(resultado);
    return resultado *= (contador-2);
  }
}

console.log(Fat(5));


