
function mergeSort(arr){
    if(arr.length <= 1) return arr

    const meio = Math.floor(arr.length/2)

    const esquerda = mergeSort(arr.slice(0, meio)) // do primeiro até o meio
    const direita = mergeSort(arr.slice(meio)) // meio até o final

    return merge(esquerda, direita)
}

function merge(esquerda, direita){
    let resultado = []
    let i = 0
    let j = 0

    while(i < esquerda.length && j < direita.length){
        if(esquerda[i] < direita[j]){
            resultado.push(esquerda[i])
            i++
        }else{
            resultado.push(direita[j])
            j++
        }
    }

    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

console.log(mergeSort([2,3,20, 40,3,12,15]))
