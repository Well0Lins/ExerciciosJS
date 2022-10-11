// Escreva uma função que recebe 2 números e retorne o maior deles


const maior = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(maior(1022, 1022));

/* Escreva uma função chamada ePaisagem que
recebe dois argumentos, largura e altura
de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/


function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1080, 550));

// *ARROW FUNCTION = const paisagem = (largura, altura) => largura > altura;

/* 
Escreva uma função que recebe um numero e retorna o seguinte:
Número é divisível por 3 = fizz
Número é divisível por 5 - Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número nao é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100.

*/

function fizzBuzz(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'; 
    if (num % 5 === 0) return 'Buzz';
    if (num % 3 === 0) return 'Fizz';
    return num;    
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}