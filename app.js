require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
require("./config/db.js");

// routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App Rodando na porta ${port}`);
});
