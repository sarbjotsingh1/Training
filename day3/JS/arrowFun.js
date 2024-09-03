const add = (num1, num2) => num1 + num2;
console.log(add(1, 2));

const calc = (num1, num2) => {
  let mul = num1 * num2;
  let add = num1 * num2;
};

const arr = [1, 2, 3, 4, 5, 1, 2, 3];

const evenArr = arr.filter((value) => value % 2 == 0);
console.log(evenArr);

arr.forEach((value, index) => {
  console.log(index);
});

console.log(arr.every((value) => value >= 0));
console.log(arr.some((value) => value >= 4));

const sumArr = arr.reduce((acc, curr) => acc + curr, 0);

const max = arr.reduce((acc,curr) =>curr > acc ? curr : acc,Number.MIN_VALUE)
console.log(max);
const min = arr.reduce((acc,curr) =>curr < acc ? curr : acc,Number.MAX_VALUE)
console.log(min);
