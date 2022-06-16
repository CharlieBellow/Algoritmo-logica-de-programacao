/* 

A função Math.random() retorna um ponto flutuante, número pseudo-aleatório no intervalo [0, 1), isto é, de 0 (inclusive) até 1, mas não incluindo 1 (exclusive) e que você pode, em seguida, dimensionar para o intervalo desejado.

Fonte: Mozilla Developer Network / Math.random()

Em outras palavras, a função retornará um número entre 0 e 1 (podendo incluir o 0 mas não o 1), veja os resultados:

0.5824683890332182
0.15599339785628574
0.19135110741912686
0.4996250046384343
0.0008728340690463687
Para gerar números aleatórios na casa do inteiros, devemos multiplicar o método por um inteiro qualquer:

Math.random() * 10
Agora devemos utilizar a função Math.floor() para retirar a parte flutuante (números decimais).

Math.floor(Math.random() * 10)
O código acima irá gerar números aleatórios no seguinte “range” 0, 1, 2, 3, 4, 5, 6, 7, 8, e 9.

*/