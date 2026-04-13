// Desafio - 2

// 1

function verificaNumero(numero){
    if(numero < 0){
        return "Número negativo"
    }
    if (numero === 0){
        return "Número igual a zero"
    }

    return "Número positivo"
}


// 2 - um pouco mais refinada, usando guard clauses

function verificaElementoDeArray(array, numero){
    if(array === null){
        console.log("coloque um elemento no array! ")
        return;
    }
    if(!Array.isArray(array)){
        console.log("não é um array! ")
        return;
    }
    if(typeof(numero) != "number"){
        console.log("coloque um número como segundo parâmetro!")
        return;
    }

    for(numeroDoArray of array){
        if(numeroDoArray === numero){
            console.log(`O número ${numero} estar dentro do array`)
            return
        }
    }

    console.log(`O número ${numero} não estar no array`)
}

verificaElementoDeArray([1,2,3], 1)

// 3 - Encontrer produtos e filtragem
const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

products.map((item) => {
    if(item.price === 20){
        console.log(item.name);
    }
});

products.filter((item) => {
    if(item.price < 8){
        console.log(item.name);
    }
});