const pessoa = {
	id:1,
	nome:"Matheus",
	idade: 20,
	trabalho: "Desenvolvedor",
	cidade: "Teresina",
	jogos_jogados: ["The last of us 2", "Sekiro", "God of war (2018)"]
};

// Formas de acessar valores
console.log(pessoa.nome); 
console.log(pessoa["nome"]);
console.log(pessoa.jogos_jogados[1]);


// Alterando valores
pessoa.idade = 21;
console.log(pessoa);

// Adicionando propriedades ou chaves
pessoa.altura = 1.82;
console.log(pessoa)

// Removendo propriedades
delete pessoa.id
console.log(pessoa)

// Criando metódos -> funções dentro de objetos
const pessoa2 = {
    nome:"Marcos",
    idade:19,
    jogar: function jogar(){
        console.log(pessoa.jogos_jogados);
    }
};

pessoa2.jogar()

// Percorrendo objetos
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}


// Criando listas com objetos ou dicionários
const games = [
    {
        id:1,
        nome_jogo: "God of war",
        nota_metacritic: 90
    },
    {
        id: 2,
        nome_jogo: "Crimson Desert",
        nota_metacritic: 77
    },
    {
        id:3,
        nome_jogo: "Death strading",
        nota_metacritic: 87
    }
]

for (let i in games){
console.log("Nome do jogo: " + games[i].nome_jogo,
    ", Nota no metacritic: " + games[i].nota_metacritic)
}