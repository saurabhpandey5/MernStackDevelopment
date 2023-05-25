function test(){
    let a=2;
    function test1(){
        console.log(a);
    }
    return test1;
}
let fun=test();
console.log(fun);
fun();
