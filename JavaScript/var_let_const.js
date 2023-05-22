//Var
// var a=2;
// var a=45;
// console.log(a);
// if(a===45){
//     var a=34;
//     console.log(a);
// }
// console.log(a);

// //functional scope
// var c=23
// function sum(){
//     var c=22;
//     console.log(c);
// }
// sum();
// console.log(c);

// //let
let b=23;
b=22;
console.log(b);
if(b===22){
    b=34;
    console.log(b);
}
console.log(b);
function sum(){
         b=22;
        console.log(b);
}
    sum();
    console.log(b);

// const c=1;
// console.log(c);

