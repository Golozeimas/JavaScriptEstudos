/* if(array[j] > array[j + 1]){
    
    não usa swap, usa deslocamento

}

    if(array[j + 1]) > array[j]){
        break;
    }

*/

let array = [5, 3, 4, 6, 1];

// debugando mentalmente
function insertionSort(elementos){
    for(let i = 1; i < elementos.length; i++){ // i = 1; length = 5
        let key = elementos[i]; // key = 3
        let j = i - 1; // j = 0
        
        while(j >= 0 && elementos[j] > key){ // j é maior que 0, j é maior que 3 -> key
            elementos[j + 1] = elementos[j]; // 3 -> passa a ser 5
            j--; // j = - 1, sai do while, com o array assim [5,5,4,6,1]
        }

        elementos[j + 1] = key; // j -> -1 + 1 = 0, key é 3 sempre fica [3,5,4,6,1]
    }

    return elementos;

}

console.log(insertionSort(array))


// 1 - Simulação manual

let array_ex1 = [8, 2, 5, 3]

function insertionSortEx1(elementos){
    for(let i = 1; i < elementos.length; i++){
        key = elementos[i] // segunda iteração: key = 5
        j = i - 1 // 1


        while(j <= 0 && elementos[j] > key){ // segunda iteração: elementos[j] = 8 
            elementos[j + 1] = elementos[j]  
            j--; 
        }

        elementos[j + 1] = key // segunda iteração: [2, 5, 8, 3]
        
        return elementos; // array pós primeira execução [2, 8, 5, 3]

    }
    // array final: [2, 3, 5, 8]
}

console.log(insertionSortEx1(array_ex1))



// 2 - Preencher espaços faltantes

let array2 = [2,3,5,4]

function insertionSortExemplo(array){
    
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > key){
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
}

console.log(insertionSortExemplo(array2))

// 3 - ordenar descrescente

let array3 = [5, 3, 4];

function insertionSortExemplo3(elementos){
    for(let i = 1; i < elementos.length; i++){
        let key = elementos[i];
        let j = i - 1;

        while(j >=0 && elementos[j] < key){ // só mudar o sinal de maior que para menor que, fazendo a ordem inversa
            elementos[j + 1] = elementos[j]
            j--;
        }

        elementos[j + 1] = key;
    }

    return elementos;

}
let array4 = [2,5,6,7,8,2,1,2,4,5]
console.log(insertionSortExemplo3(array4))



// o que estar errado, Debug

function insertionSortErrado(array){
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > key){ // ordem crescente
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key; // [j + 1], evitando erros e corrigindo lógica
    }

    return array;
}