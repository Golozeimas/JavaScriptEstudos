let pessoa = {
    nome:"Matheus",
    sobrenome: "Ramos",
    empresa: "SEAD",
    cargo: "Desenvolvedor WEB"
};


// Isso desconstroi o objeto, separando o nome e cargo do objeto pessoa, cria duas variávies com nome e cargo
const {nome: nomeDaPessoa, cargo: cargoDaPessoa} = pessoa;

console.log(nomeDaPessoa);

console.log(cargoDaPessoa);


const response = {
  data: {
    id: 1,
    nome: "Produto X"
  }
};

const { data: { nome } } = response;

console.log(nome); // Produto X

// forma tradicional
console.log(response.data["nome"]);

let nomes = ["Matheus", "Jair", "Lucas", "Rodrigo"];

// forma tradicional
console.log(nomes[0]);
console.log(nomes[1]);

// desconstrução de um array
const [nome1] = nomes

console.log(nome1)

// desconstrução com metódo do objetos
const {0:matheus, 2:lucas} = nomes

console.log(matheus)
console.log(lucas)