    // 1 - listas

    // 1.1
    let produtos = ["Computador", "Telefone", "Mouse", "Teclado"]

    console.log(produtos)

    // 1.2
    console.log(produtos.length)

    // 1.3
    let index = produtos.indexOf("Mouse");

    if (index !== -1){
        produtos.splice(index, 1);
    }

    console.log(produtos)

    // 1.4
    let procurar_item = produtos.find(item => item === "Computador");

    if(procurar_item === undefined){
        console.log("Produto não encontrado")
    }else{
        console.log("Produto encontrado: " + procurar_item)
    }

    // 1.5
    produtos.splice(1,1);

    console.log(produtos)


    // 2 - lista de números 

    // 2.1
    let numeros = [1,3,5,7,0,9];

    // 2.2
    numeros.sort((a, b) => a - b);

    console.log(numeros)

    // 2.3
    numeros.shift();

    console.log(numeros)

    // 2.4
    numeros.reverse();

    console.log(numeros)


    // 3 - data
    let hoje = "09/04/2026";

    let dia = hoje.slice(0,2);

    let mes = hoje.slice(3,5);

    let ano = hoje.slice(6,10);

    console.log(`Estamos no dia: ${dia}, no mês: ${mes} e no ano: ${ano}`)