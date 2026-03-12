function mediaDeAluno(nota1, nota2){

    let media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("aluno aprovado com média: " + media)
    }else if(media < 7){
        console.log("aluno reprovado por estar abaixo da média!")
    }
}

function aluno(nome, curso){
    const mensagem = "O aluno, " + nome + " estar cursando " + curso;

    console.log(mensagem)
}