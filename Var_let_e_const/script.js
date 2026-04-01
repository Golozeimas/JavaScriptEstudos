var nome = "Matheus";
var nome = "Lucas"; // podemos redeclerar, pode mudar ao longo do tempo

function exibirNome(){

    if(nome == "Lucas"){
        var nome2 = "Gabriel";
    }
    
    console.log(nome2) // vai funcionar pois o var não respeita blocos
}

exibirNome()

function constantes(){
    const API_KEY = "askannsjssdnjasndasndsna";
    console.log(API_KEY)

    // com exceção de arrays e objetos que podem ser alterados

    const nomes2 = ["Batalha", "Matheus"];
    
    nomes2[0] = "Lucas";
    
    console.log(nomes2)

    const nomes = {
        nome: "Maria",
        idade: 20,
        trabalha: true
    };

    nomes.nome = "João";

    console.log(nomes)
}


constantes()