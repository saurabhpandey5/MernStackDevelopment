//Spread operator


let fs={
    name:"saurabh",
    age:12,
    address:{
        city:'Lucknow',
        state:'UP'
    }
}

//shallow copy
// let asn={...fs};
// asn.name="ram";
// asn.address.city='noida'
// console.log(fs);
// console.log(asn);


//deep copy

let second=JSON.parse(JSON.stringify(fs));
second.address.city='noida';

console.log(fs);
console.log(second);


