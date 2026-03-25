// cria um objeto da classe Date
let data = new Date();

// pega a data atual
console.log(data)

// pega as horas atuais
console.log(data.getHours())    

// pega os minutos
console.log(data.getMinutes())

// pega os milisegundos
console.log(data.getMilliseconds())

var dataNova = new Date(2026,1,20)

// será a nova data, 2026, mês 1 e dia 20
console.log(dataNova)


// alterando datas
data.setFullYear(2030)
data.setHours(10)
data.setSeconds(30)

console.log(data)

// transforma em milissegundos
console.log(Date.parse(data))

// criando data no padrão brasileiro
let padrao_brasileiro = data.getDate() + "/" + (data.getMonth() + 1 )+ "/" + data.getFullYear()

console.log(padrao_brasileiro)

// adicionando 5 dias nos dias atuais
dataNova.setDate(dataNova.getDate() + 5)