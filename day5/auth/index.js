const express = require("express");
const app = express();
const port = 5000;
const storage = require("node-persist");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
storage.init();
const { authenticate } = require("./middleware");

app.use(express.json());

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) res.status(400).send("Enter all fields");
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    name,
    email,
    password: hashedPassword,
  };
  storage.setItem(email, newUser);
  res.send("Registered");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) console.log("Enter all fields");
  const account = await storage.getItem(email);
  if (!account) return res.send("No account found");
  const check = await bcrypt.compare(password, account.password);
  const token = jwt.sign(account.email, "sarbjotsingh");
  if (!check) return res.send("Wrong password");
  res.cookie("token", token);
  res.send("Logged in");
});
app.post("/changepassword", authenticate, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const email = req.email;
  const user = await storage.getItem(email);
  const check = await bcrypt.compare(oldPassword, user.password);
  if (check) {
    user.password = await bcrypt.hash(newPassword, 10);
    res.send("password changed");
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
