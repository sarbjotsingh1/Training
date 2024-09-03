const express = require("express");
const app = express();
const port = 5000;
const productController = require("./products");
app.use(express.json());

app.use("/api", productController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
