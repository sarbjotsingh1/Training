const url = require("url");

const myUrl = url.parse("https://nodejs.org/docs/latest/api/addons.html", true);

console.log(`Host ${myUrl.host}`);
console.log(`hostname ${myUrl.hostname}`);
console.log(`path ${myUrl.path}`);
console.log(`pathname ${myUrl.pathname}`);
console.log(`protocol ${myUrl.protocol}`);
console.log(`search ${myUrl.search}`);

