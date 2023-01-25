const express = require("express")

const app = express()
app.use(express.json());

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

app.get("/headers", (req, res) => {
    console.log(req.headers)
    res.json("hello world")
})

app.use(express.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    console.log(req.body); // logs the request body as an object
    res.send("done ")
});


const port = 9000 

app.listen(port, () => {
    console.log("Port Opened on "+port)
})