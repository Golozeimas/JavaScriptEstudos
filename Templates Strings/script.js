let nome = "Matheus";
let idade = 20;
let emprego = "DEV WEB";


// o template string funciona como o printf, e o 'enter' quebra

const frase = `Meu nome é ${nome}, 
minha idade é ${idade} 
e meu emprego é ${emprego}`;


console.log(frase);


// pode se fazer expressões

const n1 = 10;
const n2 = 10;

const frase2 = `A soma é ${n1 + n2}`;

console.log(frase2);


const preco = 100;
const desconto = 0.2;

console.log(`Preço final: ${preco * (1 - desconto)}`);

