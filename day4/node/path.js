const path = require("path");

console.log(path.delimiter);
console.log(path.sep);

const pathUrl = "D:\\test\\nodejs\\script.js";
console.log("Base name", path.basename(pathUrl));
console.log("Extension name", path.extname(pathUrl));
console.log(path.dirname(pathUrl));
console.log(path.isAbsolute("\\hello.html"));
console.log(path.join("D:", "www", "public", "index.html"));

const sample = path.format({
  dir: "D:\\sarb",
  name: "script",
  ext: ".js",
});
console.log(sample);

