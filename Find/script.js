// find -> Retorna apenas o primeiro elemento que sastifaz a condição

let array = [1,3,4,5, "matheus", "jose"];

let achar_o_primeiro_item_par = array.find((item)=>{
    return item % 2 === 0;
});


let quando_for_string = array.find((item)=>{
    return typeof(item) === "string";
});

console.log(achar_o_primeiro_item_par);

console.log(quando_for_string) // retornou o primeiro elemento que sastifaz a condição do array

// com uso de objetos

let produtos = [
    {
        id:1,
        nome_do_produto: "Chocolate",
        valor:10
    },
    {
        id:2,
        nome_do_produto:"Chocolate branco",
        valor:15
    },
    {
        id:3,
        nome_do_produto:"Bombom de maracujá",
        valor:4
    }
]
const {0:nome_do_produto} = produtos; // testando o conhecimento em desconstrução de arrays e objetos
console.log(nome_do_produto);

let achar_o_id = produtos.find((item)=>{
    return item.id === 3;
});

console.log(achar_o_id)