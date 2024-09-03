const express = require("express");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
const port = 3000;
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./coust"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);



app.use(express.json());
const coustRoute = require("./coustRoute");
let users = [];
var cors = require("cors");

app.use(cors());
app.use("/coust", coustRoute);

app.get("/", (req, res) => {
  res.send(users);
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const found = users.find((item) => item.id == id);
  if (found) res.send(found);
  else res.send("User not avaible");
});

app.post("/", (req, res) => {
  const data = req.body;
  users.push(data);
  res.send("Succesfully created");
});

app.listen(port, () => {
  console.log(`app is running on port${port}`);
});
