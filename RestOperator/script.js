
// usando funções com rest operator
const numeros_iniciais = [1,2,3];
const numeros_finais = [4,5,6];

function retornaArrayGrande(...array){
    return array;
}

console.log(retornaArrayGrande(numeros_iniciais, numeros_finais));

function convidados(...nomes){
    console.log("Seja bem vindo todos os convidados!");
    // parecido com o for-each
    for(nome of nomes){
        console.log(nome);
    }
}

convidados("Matheus", "Lucas", "Maria");


function sorteadorDeNumeros(...numeros){
    console.log(numeros);
    // math.floor -> arrendoda para baixo
    // math.random -> gera um número entre 0 e 1, geralmente acompanhado de um número'n', que serve como número entre 0 até n
    // length -> determina a quantidade de itens em um objeto iterável
    const numeroDoSorteio = Math.floor(Math.random() * numeros.length);

    console.log(`numero premiado do nosso sorteio games: ${numeros[numeroDoSorteio]}`)

}

sorteadorDeNumeros(1,2,4,5,76,5,3,4,2,5,7,3,1,3);
