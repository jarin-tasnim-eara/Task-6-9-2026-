let array = [10,45,30,20];

let l = array[0];
let sl = array[0];
for(let i=1; i<array.length ; i++){

    if (array[i]>l){
    sl = l;
l= array [i];

} else if(array[i]> sl){
sl = array[i];
}}
console.log(sl);
