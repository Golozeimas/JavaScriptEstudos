
let listElement = document.querySelector("#app");


let spells = [];


function nutriApp(){
    fetch('https://potterapi-fedeperin.vercel.app/en/spells')
    .then((response) => response.json()) // podemos usar assim quando é apenas uma linha, '.json' transforma em json 
    .then((json) => {
        
        spells = json;
        
        spells.map((item) => {
            let liElement = document.createElement("li");
            let textSpells = document.createTextNode(item.spell);
            liElement.appendChild(textSpells);
            listElement.appendChild(liElement);
        });
    })
    .catch((err) => {
        console.log(err);
    })
}

nutriApp()

