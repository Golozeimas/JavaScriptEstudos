let peso = document.getElementById("peso");
let altura = document.getElementById("altura");


function calculaIMC(event){

    event.preventDefault();

    const altura_validada = altura.value.trim().replace(",",".");
    const altura_real = Number(altura_validada);
    const peso_validado = peso.value.trim().replace(",", ".");
    const peso_real = Number(peso_validado);


    if (peso_real > 0 && typeof(peso_real) === 'number'){
        console.log("O peso é valido")
        if(altura_real > 0 && typeof(altura_real) === 'number'){
            console.log("A altura é válida")

            let calculoDoIMC = peso_real / (altura_real * altura_real);
        
            let resultado = document.getElementById("sucesso");

            if(calculoDoIMC < 18.5){
                resultado.innerHTML = "<h1> Seu resultado é magreza </h1>" + "<br>" + "<h2>Seu imc é: </h2>" + calculoDoIMC.toFixed(2);
            }
            else if(calculoDoIMC >=  18.5 && calculoDoIMC <= 24.9){
                resultado.innerHTML = "<h1> Seu resultado é normal </h1>" + "<br>" + "<h2>Seu imc é: </h2>" + calculoDoIMC.toFixed(2);
            }
            else if(calculoDoIMC >= 25 && calculoDoIMC <= 29.9){
                resultado.innerHTML = "<h1> Seu resultado é sobrepeso </h1>" + "<br>" + "<h2>Seu imc é: </h2>" + calculoDoIMC.toFixed(2);
            }
        }
        else{
            alert("A altura não é válida!")
        }
    }else{
        alert("O peso não é válido!")
    }
}