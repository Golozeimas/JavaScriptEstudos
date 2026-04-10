/*

A arrow function -> é representada assim () => {}, e é um jeito mais compacto e fácil de representar uma função anônima

*/

const soma = (a, b) => a + b;

console.log(soma(1,2));

let numeros = [1,2,3,4,5]

let novosNumero = numeros.map((item,index)=>{
    console.log('indíce: '+ index +' item:'+ item);
})

novosNumero