const arr = [1,2,2,3,4,5]
const res = []

for(let i = 0;i<arr.length;i++){
    let check = true;
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]==arr[j])
            check = false;
    }
    if(check)
        res.push(arr[i]);
}
console.log(res);