// Server entry point

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello from nodejs backend");
});

app.get("/api/message", (req,res) => {
    res.json({message: "hello from express!"})
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})