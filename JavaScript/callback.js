function printFristName(firstname,cb){
    console.log(firstname);
    cb("pandey");
}

function printlastname(lastname){
    console.log(lastname);
}

printFristName("Saurabh",printlastname);


function x() {
    console.log(a);
}
    
function y() {
    var a = 2;
    x();
}

var a = 1;
y();

// printlastname("Pandey");