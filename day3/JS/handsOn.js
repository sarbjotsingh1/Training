let readlineSync = require('readline-sync');

let str = ["Mind","SpRInT","Pvt","Ltd"]

for(let i = 0;i<str.length;i++){
    str[i] = str[i].toUpperCase();
}
console.log(str);

let check = true;
let names = []
while(check){
    let name = readlineSync.question("Enter a name : ")
    names.push(name);
    let conti = readlineSync.keyInYN("Press Y to continue : ")
    if(!conti)
        check = false;
}

console.log("Here are names ")
for(let i = 0;i<names.length;i++){
    console.log(`${names[i]} : ${names[i].length}`)
}
