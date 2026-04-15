
function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){ // vai até array.length - 1 pq o ultimo já estará organizado
        let menorIndex = i // por enquanto esse é o menor valor, “Estou escolhendo quem vai ocupar a posição i”

        for(let j = i + 1; j < arr.length; j++){ // começa depois do i para vasculhar o array completamente
            if(arr[j] < arr[menorIndex]){ // compara o elemento atual do for com o menor se for menor
                menorIndex = j // guarda a posição do novo menor valor
            }
        }

        if(menorIndex !== i){ // verifica se precisa trocar, se o menor já estar na posição correta não precisa
            let temp = arr[i] // swap, array na posição[i] com array de [menorIndex]
            arr[i] = arr[menorIndex]
            arr[menorIndex] = temp
        }

        // repete o processo com 1 posição já ordenada
    }

    return arr
}

/*
ex - 1
Dado o array:

[8, 3, 5, 1]

Pergunta:

Após a primeira iteração (i = 0), como o array fica?

[1, 3, 5 , 8]


ex - 2

Ainda com:

[8, 3, 5, 1]

Pergunta:

Qual será o valor de menorIndex ao final da primeira busca?

3° posição 


Nível 2 — Raciocínio de execução
Exercício 3

Observe:

[7, 2, 9, 4]

Pergunta:

Quais trocas (swaps) vão acontecer?

3

Quantas trocas no total?

3

Exercício 4

Verdadeiro ou falso:

“Se o array já estiver ordenado, o Selection Sort não faz comparações.”

Explique o porquê.
Falso, o selection sort sempre fará comparações mesmo já estando ordenado por isso a sua
complexidade algoritmíca é sempre O(n²)

*/ 

// complete o código

function selectionSortExemplo(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let menorIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menorIndex]) {
                menorIndex = j;
            }
        }

        if (menorIndex !== i) {
            let temp = array[i];
            array[i] = array[menorIndex];
            array[menorIndex] = temp;
        }
    }

    return array;
}

/*
Modificação do algoritmo
Exercício 6

Modifique o Selection Sort para ordenar em ordem decrescente.

Dica:

Você não vai buscar o menor… 

*/

function selectionSortMaior(elementos){
    for(let i = 0; i < elementos.length - 1; i++){
        let maxIndex = i


        for(let j = i + 1; j < elementos.length; j++){
            if(elementos[j] > elementos[maxIndex]){
                maxIndex = j
            }
        }


        if(maxIndex !== i){
            let temp = elementos[maxIndex]
            elementos[maxIndex] = elementos[i]
            elementos[i] = temp
        }
    }

    return elementos;
}

let arr = [3,4,5,6,7,10]

console.log(selectionSortMaior(arr))

/*

Cenário real:

Você tem:

Pouca memória
Lista pequena (20 elementos)
Escrita em memória é cara

Pergunta:

Você usaria Selection Sort? Por quê?

Usaria pois temos pouca memória e a escrita é cara, logo o selection sort ajudaria por fazer poucas trocas
economizando memória e focando mais nas comparações
*/


function selectionSortExemplo3(arr){
    for(let i = 0; i < arr.length - 1; i++){ // falta mais agilidade
        let minIndex = i // definido
        
        for(let j = i + 1; j < arr.length; j++){ // ainda falta aprender isso, mais um pouco
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        if(minIndex !== i){
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }
    
    }
}