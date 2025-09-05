
const express = require("express")

app = express()
const PORT = 5001

app.get('/', (req,res) => {
    res.send({message: "this is http response"})
})

app.listen(PORT, () => {
    console.log(`http server is running on port ${PORT}`)
})