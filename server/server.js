require("dotenv").config();

const express = require("express");
const cors = require("cors");
const generateImageRoute = require("./routes/GenerateImage");

const app = express();
const PORT = 8000;
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/generate-image", generateImageRoute);

app.listen(PORT, () => {
  console.log(`Server starts at ${PORT}`);
});
