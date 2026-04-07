let numeros = [1, 2, 3]

// spread operator -> colocamos o três pontos para vir tudo do antigo array
let novosNumeros = [...numeros, 4, 5 ,6]

console.log(novosNumeros)

// agora, com dois arrays

let numeros_iniciais = [1,2,3]

let numeros_finais = [4,5,6]

// junta tudo em um só array com o operador spread
let array_final = [...numeros_iniciais, ...numeros_finais];

console.log(array_final);


const pessoa = {
    nome: "Matheus",
    cargo: "Desenvolvedor"
}

const salario_da_pessoa = {
    ...pessoa,
    salario: 2000
};

console.log(salario_da_pessoa);


// código como uso do dia a dia
function mostrarInformacaoDoUsuario(info){
   // queremos por mais infos
   const data = {
    ...info,
    status: true,
    dataDeInicio: "21/10/2025"
   };

   console.log(data)
}

mostrarInformacaoDoUsuario({nome:"Matheus", idade: 20, cargo:"DEV WEB"});