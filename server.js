const express = require("express");
const cors = require("cors");

const tutorialRouter = require("./app/routes/tutorial.routes.js");

const app = express();

const PORT = 8000;
let corsOptions = {
  origin: "http://localhost:8000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/tutorials", tutorialRouter);

app.listen(PORT, () => {
  console.log(`server started at ${PORT} `);
});
