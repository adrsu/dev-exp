// Server entry point

const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello from nodejs backend");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))