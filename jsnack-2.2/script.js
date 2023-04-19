//Generatore di “nomi cognomi” casuali: 
//il Grande Gatsby ha 2 liste di nomi e cognomi, 
//e da queste vuole generare una falsa LISTA di invitati con NOME E COGNOME.

const gGasbyNomi=[
    'germanus',
    'caio',
    'sempronio',
    'altostronzo',
    'gabrielfilippo'
];
const gGasbyCognomi=[
    'tiramazzi',
    'falloni',
    'cartellani',
    'farfalla',
    'citrosolubile'
];
let gList=[];
let pos=0;
for(let i = gGasbyNomi.length; i > 0; i--){
    gList[pos] = gGasbyNomi[pos] + ' ' + gGasbyCognomi[pos];
    pos = pos + 1;
}
console.log(gList)