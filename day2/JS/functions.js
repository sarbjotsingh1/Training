function hello(){
    console.log("hello word");
}
function add(num1,num2){
    return num1 + num2;
}


const addition = (num1,num2) => {
    return num1 + num2;
}


var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1); 
};

console.log(factorial(3));


// console.log(addition(20,150));