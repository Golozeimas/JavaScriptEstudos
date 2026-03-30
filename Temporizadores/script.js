let numeroContado = document.getElementById("n");

function iniciar(){
    let contador = 0;
    let contagem = setInterval(function(){
        contador++;
        numeroContado.innerHTML = contador;
        if (contador === 10){
        clearInterval(contagem)
        }
    }, 1000)
}