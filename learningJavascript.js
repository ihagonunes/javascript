const meuNumero = 3;

const primeiroNumero = 1.5, segundoNumero = 2.5;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica);

// NaN --> Not A Number (não é um número)

const palavra = "Ihago";

console.log(palavra * meuNumero);

//Concatenação de Strings

const periodo = "Meu nome é:", nome = "Júlia";

console.log(periodo + nome);

//Formatação e Arredondamento

const salario = 3000, horas = 176;

console.log("Valor por hora = " + salario/horas);

/* resultado 
Valor por hora = 17.045454545454547
*/

console.log("Valor por hora = " + Math.round(salario/horas));

/* O Math.round arredonda para as casas inteiras
    resultado: "Valor por hora = 17"
*/


console.log("Valor por hora = " + (salario/horas).toFixed(2));

/*  .toFixed arredonda para a quantidade de casas
    decimais especificadas entre aspas
    resultado: "Valor por hora = 17.05"
*/

/*
Math.ceil() que retorna o maior número inteiro que é maior que o número passado, 
por exemplo Math.ceil(11.123), o valor fica 12.

Math.floor() que retorna o menor número inteiro que é menor que o número passado, por 
exemplo Math.floor(11.789), o valor fica 11.
*/

//Funções de String


const input = "Belo Horizonte";
const inputMinusculo = input.toLowerCase();
console.log(inputMinusculo); //belo horizonte


const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
