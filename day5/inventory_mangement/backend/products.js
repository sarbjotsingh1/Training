const express = require("express");
const router = express.Router();
const storage = require("node-persist");
storage.init();

router.post("/product", (req, res) => {
  const { id, name, price, quantity } = req.body;
  storage.setItem(id, req.body);
  return res.send("Product added");
});
router.get("/product", async (req, res) => {
  const product = await storage.values();
  return res.send(product);
});
router.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const product = await storage.getItem(id);
  return res.send(product);
});
router.get("/product/search/:name", async (req, res) => {
  const name = req.params.name;
  const products = await storage.values();
  const product = products.filter((item) => item.name == name);
  return res.send(product);
});
router.put("/product/:id", async (req, res) => {
  const productid = req.params.id;
  const oldObject = await storage.getItem(productid);
  const {quantity} = req.body;
  oldObject.quantity=quantity;
  storage.updateItem(productid,oldObject);
  return res.send("Updated Quantity");
});

module.exports = router;
