const express = require("express")

const app = express()

app.get("/", (req, res) => {
    console.log(req.url);
    res.json("hello world")
})
app.get("/abc", (req, res) => {
    console.log(req.url);
    res.json("hello world")
})

app.get("/search", (req, res) => {
    console.log(req.url);
    console.log(req.query);
    res.json("hello world")
})

const port = 9000 

app.listen(port, () => {
    console.log("Port Opened on "+port)
})