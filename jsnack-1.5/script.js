//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.
let myArr = [];
let pos = 0;
for (let i=0; i < 6; i++){
    let newValue = parseInt(prompt('number' + (i +1)));
    if(newValue%2 !== 0 ){
        myArr[pos]= newValue;
        pos= pos + 1;
    } 
}
console.log(myArr)