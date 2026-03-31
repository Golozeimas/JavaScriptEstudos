let numeroContado = document.getElementById("n");


function iniciar(){
    let contador = 0;

    
    let contagem = setInterval(function(){
        contador++;
        numeroContado.innerHTML = contador;
    }, 1000);

    document.getElementById('parar').addEventListener('click', function() {
            clearInterval(contagem);
    });
}