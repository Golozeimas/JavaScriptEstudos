// map -> percorre todo um array

let lista = ['matheus', 'joao', 'lucas', 'flavio'];

let numeros = [1,2,3,4,5];

let elementosDoArray = lista.map(function(elemento){
    return elemento.length;
});

let elementosDoArrayMaiusculas = lista.map(function(elemento){
    return elemento.toUpperCase();
});

let arrayPecorrido = lista.map((item, indice, array)=>{
    console.log(`índice do elemento: ${indice}, valor do elemento: ${item}`);
});

let arrayAoQuadrado = numeros.map((item)=>{
    return item ** 2;
});

console.log(arrayAoQuadrado);
console.log(elementosDoArray);
console.log(elementosDoArrayMaiusculas);


// reduce -> O reduce busca reduzir um array

let numerosDo1ao10 = [1,2,3,4,5,6,7,8,9,10];

let total = numerosDo1ao10.reduce((acumulador, numero, indice, original)=>{
    console.log("Este é o acumulador: " + acumulador);
    console.log("Este é o número atual: " + numero);
    console.log("Este é índice: " + indice);
    console.log("Este é o array original: " + original);
    console.log("=======================================")

    // o acumulador soma os numeros juntando tudo
    return acumulador += numero;
})

console.log(total) // brutal, só sobrou o 55 (total do array)


// filter -> retorna apenas o que passam pela a condição

let numerosDe1a5 = [1,2,3,4,5];

let numerosPares = numerosDe1a5.filter((item, indice, array)=>{
    return item % 2 === 0;
});

let palavras = ["matheus", "caixa", "pao", "leite"];

let palavrasComTamanhosCom5 = palavras.filter((item)=>{
    return item.length === 5;
});

console.log(numerosPares);

console.log(palavrasComTamanhosCom5)