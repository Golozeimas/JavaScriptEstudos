let nomes_de_produto = ["Caixa de som", "PS5", "Bola de futebol", "Mesa"]

console.log(nomes_de_produto.includes("PS5")); // True

let nome = "Matheus"

console.log(nome.includes("the"))


console.log(nome.startsWith("mat"))

console.log(nome.endsWith("eus"))


// exemplo com caso de uso real, com verificação simples

// Obs: todos são case sensitive

let email = "email@gmail.com"

if(email.endsWith("@gmail.com")){
    console.log("é um email válido!");
}else{
    console.log("Não é válido!")
}

