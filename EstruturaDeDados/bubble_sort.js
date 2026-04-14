let lista = [5,3,4,6,3,7]

function bubbleSort(array){
   
    for(let i = array.length - 1; i > 0; i--){ // você vai diminuindo o tamanho da parte não ordenada
        let changes = 0
        for(let j = 0; j < i ; j++){ // percorre comparando os pares
            if(array[j] > array[j + 1]){
                let temp = array[j] // tem que criar um temporário para substituir o elemento na memória
                array[j] = array[j + 1] 
                array[j + 1] = temp
                changes++;
            }
        }
        if(changes === 0 ) break   
    }    
    return array;
}

console.log(bubbleSort(lista))


// exercicio - 1
let array_ex1 = [8, 3, 5, 2];

function bubbleSortEx1(elementos){
    for(let i = elementos.length - 1; i > 0; --i){
        for(let j = 0; j < i; j++){
            if(elementos[j] > elementos[j + 1]){
                let temp = elementos[j + 1]
                elementos[j + 1] = elementos[j]
                elementos[j] = temp
                console.log(elementos)
            }
        }
    }
}

bubbleSortEx1(array_ex1)

// exercicio - inversão do array
let array_ex2 = [4, 1 ,3]
function bubbleSortEx2(elementos){
    for(let i = elementos.length - 1; i > 0; i--){
        let changes = 0;
        for(let j = 0; j < i; j++){
            if(elementos[j] < elementos[j + 1]){
                let temp = elementos[j + 1]
                elementos[j + 1] = elementos[j]
                elementos[j] = temp
                changes++;
            }
        }
        if (changes === 0) break
    }
    return elementos;
}

console.log(bubbleSortEx2(array_ex2))

// exercicio 3 - bubble sort parcial

let array_ex3 = [5, 3, 4, 1]

function bubbleSortEx3(elementos){
    for(let i = elementos.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(elementos[j] > elementos[j + 1]){
                let temp = elementos[j + 1]
                elementos[j + 1] = elementos[j]
                elementos[j] = temp
            }
        }
        return elementos;
    }
}

console.log(bubbleSortEx3(array_ex3))