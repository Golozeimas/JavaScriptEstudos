
function megaSena(numero){
    if(numero < 6 || numero > 9){
        console.log("Não é possível usar esse número!")
        return []
    }
    
    let lista = [];

    for(let i = 0; i < numero; i++){
    
    let numeroSorteado = Math.floor(Math.random() * 60) + 1;
    
        if(lista.includes(numeroSorteado)){
            i -= 1;
        }else{
            lista.push(numeroSorteado)
        }
        
    }
    return lista
}

console.log(megaSena(6))