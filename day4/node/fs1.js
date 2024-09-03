const { existsSync } = require("fs");
const fs = require("fs/promises");

// async function readData(filename) {
//   try {
//     const data = await fs.readFile(filename);
//     console.log(data.toString());
//   } catch (error) {
//     console.log(error);
//   }
// }
async function deletefiles(filename) {
//   try {
    
//     const data = await fs.unlink(filename);
//     console.log("file Deleted");
//   } catch (error) {
//     console.log(error);
//   }
}
// readData("./files/data.txt");
deletefiles("./files/data.txt");

