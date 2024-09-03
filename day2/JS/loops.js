for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("While loop");

let sum = 0;
while (true) {
  let num = +prompt("Enter a number");
  sum += num;

  const conti = prompt("Enter y to continue");
  if (conti == "y" || conti == "Y") continue;
  break;
}
console.log(`Sum is ${sum}`);
