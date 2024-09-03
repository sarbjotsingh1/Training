const { log } = require("console");
const fs = require("fs");

// console.log("File write op stated");
// fs.writeFile("./files/data.txt",'Hello from node',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("data written");
// })

// fs.appendFile("./files/data.txt", "\n\nHello again", (err) => {
//   if (err) console.log(err);
//   else console.log("data written");
// });

fs.readFile("./files/data.txt", (err, data) => {
  if (err) console.log(err);
  else {
    console.log(data.toString());
  }
});
