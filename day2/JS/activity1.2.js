let check = true;
let arr = []
while(check){
    let x = + prompt("Enter a number");
    arr.push(x);
    let y = prompt("Want to add more numbers ? press y")
    if(y != 'y')
        check = false;
}
let sum = 0;
for(let i = 0;i<arr.length;i++){
    sum += arr[i];
}
console.log(sum/arr.length)