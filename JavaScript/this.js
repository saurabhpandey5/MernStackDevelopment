//'use strict'

// a=10;
// console.log(a);
// console.log(this);


// function display(){
//     console.log(this);
// }
// display();


// let myobj={
//     name:"saurabh",
//     age:12,
//     myfn:function(){
//         console.log(this);
//     }
// }
let myobj2={
    name:"saurabh",
    age:12,
    myfn1:function(){
        function myfun2(){
            console.log(this)
        }
        myfun2();
    }
}

myobj2.myfun1();

