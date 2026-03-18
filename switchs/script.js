function pedir(){
    let escolha_do_pedido = prompt("Escolha um dos pedidos: ");

    switch(parseInt(escolha_do_pedido, 10)){ // passa de string para inteiro
        case 1:
            document.write("<h3> Você escolheu o suco de laranja </h3>");
            break;
        case 2:
            document.write("<h3> Você escolheu o pastel </h3>");
            break;
        case 3:
            document.write("<h3> Você escolheu a bomba caseira </h3>");
            break;
        
        default:
            alert("Escolha algum item da lista")
            break;
    }
}