const express = require("express");

const connectDB = require("./db/connect");
const productRoutes = require("./routes/products");

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

require("dotenv").config();
require("express-async-errors");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .send(`<h1>Store API</h1><a href="/api/v1/products">products route</a>`);
});

app.use("/api/v1/products", productRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
