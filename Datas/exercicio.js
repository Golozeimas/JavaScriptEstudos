let arrays_dos_dias = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira"
    ,"Sexta-feira", "Sábado"];

let data = new Date();

console.log(arrays_dos_dias[data.getDay()]);
