const simpleInterest = (p,r,n) =>{
    console.log(`Simple intrest is ${p * r * n / 100}`);
}
simpleInterest(1000,2,1);

const areaOfCircle = (radius) =>{
    console.log(`Area of circle is ${3.14 * radius * radius}`);
}
areaOfCircle(4);

const circumferenceOfCircle = (radius) =>{
    console.log(`Area of circle is ${2 * 3.14 * radius}`);
}
circumferenceOfCircle(4);

const tableOf7 = (x) =>{
    for(var i = 1;i <= x;i++){
        console.log(`7 * ${i} = ${7*i}`);
    }
}
tableOf7(10);

let n1 = 0, n2 = 1, nextTerm;
const fib = []
const fibonacci = (x) =>{
    for(let i = 1;i<x;i++){
        fib.push(n1);
        nextTerm = n1 + n2
        n1 = n2;
        n2 = nextTerm
    }
}

fibonacci(10);
console.log(fib);