const express = require("express");

const router = express.Router();

router.get("/a", (req, res) => {
  res.send("Get All Users");
});

router.get("/b", (req, res) => {
  res.send("Get A1 Users");
});
router.get("/c", (req, res) => {
  res.send("Get A2 Users");
});

module.exports = router;
