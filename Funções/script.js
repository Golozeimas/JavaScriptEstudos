
let h1_do_inicio = document.getElementById('area')

function entrar(){
    let nome = prompt("Digite seu nome: ")

    if (nome === "" || nome === null){
        alert("Deu errado, tente novamente! ")
        h1_do_inicio.innerHTML = "Clique no botão 'acessar' e preencha os dados corretamente"
    }else{
    h1_do_inicio.innerHTML = "Bem vindo, " + nome + " ";

    let botaoSair = document.createElement("button");
    
    botaoSair.innerText = "Sair da conta";
    
    botaoSair.onclick = sair;


    h1_do_inicio.appendChild(botaoSair); // isso adiciona o botão como um H2
                                        // perto do H1
    }
}


function sair(){
    alert("Você saiu")
    h1_do_inicio.innerHTML = "Bem vindo, clique em acessar!"
}

function mudarCor(){
    document.body.style.background = "black";
}


function mudarCorBranco(){
    document.body.style.background = "white";
}

