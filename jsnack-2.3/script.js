//Crea un array di numeri interi 
//e fai la somma di tutti gli elementi che sono 
//in posizione dispari
const myArr=[
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
];
let sum = 0;
for(let i=0; i<myArr.length; i++){
    if(i%2!==0){
        sum= sum+myArr[i];
        console.log(sum)
    }
}
console.log( 'the sum is' + sum)