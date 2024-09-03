const fs = require("fs/promises");
const fs1 = require("fs");
const readline = require("readline-sync");

async function readFile(filename) {
  try {
    if (fs1.existsSync(filename)) {
      const data = await fs.readFile(filename);
      console.log(data.toString());
    } else {
      console.log("Files doesnot exist");
    }
  } catch (error) {
    console.log(error);
  }
}
async function writeFile(filename, text) {
  try {
    const data = await fs.writeFile(filename, text);
    console.log("written");
  } catch (error) {
    console.log(error);
  }
}
async function copyFile(src, dsg) {
  try {
    if (fs1.existsSync(src)) {
      const data = await fs.copyFile(src, dsg);
      console.log("file copied");
    } else {
      console.log("Source file does not exist");
    }
  } catch (error) {
    console.log(error);
  }
}
async function listFiles() {
  try {
    const data = await fs.readdir(__dirname);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
async function newDir(name) {
  try {
    if (!fs1.existsSync(name)) {
      const data = await fs.mkdir(name);
      console.log("Dir Created");
    } else {
      console.log("Dir already exist");
    }
  } catch (error) {
    console.log(error);
  }
}
async function removeDir(name) {
  try {
    if (fs1.existsSync(name)) {
      const data = await fs.rmdir(name);
      console.log("Dir deleted");
    } else {
      console.log("Dir doesnt exist");
    }
  } catch (error) {
    console.log(error);
  }
}

var op = +readline.question(
  "Which action you want to perform :\n1.Readfile\n2.write files\n3.Copy file\n4.list files\n5.create directory\n6.remove directory\n"
);
switch (op) {
  case 1:
    readFile("file.txt");
    break;
  case 2:
    var q = readline.question("what you want to write : ");
    var src = readline.question("where you want to write : ");
    writeFile(src, q);
  case 3:
    var src = readline.question("Write source loction : ");
    var dsg = readline.question("Write destination loction : ");
    copyFile(src, dsg);
    break;
  case 4:
    // var dname = readline.question("Write Directory : ");
    listFiles();
    break;
  case 5:
    var name = readline.question("Name your folder: ");
    newDir(name);
    break;
  case 6:
    var name = readline.question("Dir you want to remove: ");
    removeDir(name);
    break;
}
