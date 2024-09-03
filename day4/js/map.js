const map = new Map();

map.set(1, "sarb");
map.set(2, "jot");
map.set(3, "singh");
console.log(map);

//find key 3?
console.log(map.has(3));

for (let entry of map.entries()) {
  console.log(entry[0]);
  console.log(entry[1]);
}

for (let key of map.keys()) {
  console.log(key);
}
for (let value of map.values()) {
  console.log(value);
}
// map.delete(1);
// console.log(map);
// map.clear();
// console.log(`size of map: ${map.size}`);

const data = "india";
const map2 = new Map();
for (let str of data) {
  if (!map2.has(str)) map.set(str, 1);
  else map2.set(str, map2.get(str) + 1);
}
console.log(map2);

