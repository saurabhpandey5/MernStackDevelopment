const fs=require('fs');

console.log("First Line");

// let data=fs.readFileSync('f1.txt');

// console.log('data is -> '+data);

// let data1=fs.readFileSync('f2.txt');

// console.log('data is -> '+data1);


fs.readFile('f1.txt',cb1);
function cb1(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log('data is -> '+data);
    }
    fs.readFile('f2.txt',cb2);
}

function cb2(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log('data is -> '+data);
    }
    fs.readFile('f3.txt',cb3);
}

function cb3(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log('data is -> '+data);
    }
}

console.log('last line');