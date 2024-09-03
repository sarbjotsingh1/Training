const express = require("express");
const storage = require("node-persist");
storage.init();
const router = express.Router();

router.get("/", async (req, res) => {
  let data = await storage.values();
  res.send(data);
});

router.get("/:id", async (req, res) => {
  const coustID = req.params.id;
  let data = await storage.getItem(coustID);
  if (data) return res.send(data);
  return res.status(404).send("No user found");
});
router.post("/", async (req, res) => {
  const { id, name, email } = req.body;
  storage.setItem(id, req.body);
  res.send("User Registered");
});
router.put("/:id", async (req, res) => {
  const updateID = req.params.id;
  //let data = await storage.getItem(updateID);
//   if (!data) return res.status(404).send("No user found");
  const updateData=req.body;
  updateData.id=updateID;
  await storage.updateItem(updateID, updateData);
  res.send("User Updated");
});
router.delete("/:id", async (req, res) => {
  const deleteID = req.params.id;
  let data = await storage.getItem(deleteID);
  if (!data) return res.status(404).send("No user found");
  await storage.removeItem(deleteID);
  return res.send("Data deleted")
});

module.exports = router;
