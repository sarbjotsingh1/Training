const os = require("os");

console.log("Home Directery",os.homedir());
console.log("totalmem",os.totalmem()/(1024 * 1024* 1024));
console.log("freemem",os.freemem());
console.log("arch",os.arch());
console.log("platform",os.platform);