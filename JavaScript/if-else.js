var n=12;
if(n>13){
    console.log("true");
}
else{
    console.log("false");
}

var colors={
    p:'red',
    q:'yellow',
    r:'pink'
}

for(var color in colors){
    console.log(colors[color]);
}

//Function in JS

function add(a){
    console.log(a*a);
}
add(2);



//Function expression

const sum = function(a,b){
    console.log(a+b);
}
sum(2,4);

function checkAge(data) {
    if (data === { age: 18 }) {
    console.log("You are an adult!");
    } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
    } else {
    console.log(`Hmm.. You don't have an age I guess`);
    }
   }
   
   checkAge({ age: 18 });

function fn(){
    return 4+5;
}
fn(3,7);