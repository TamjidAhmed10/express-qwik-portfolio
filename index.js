const express = require('express')
const users = require('./routers/users')
const app = express()

app.get("/", (req, res) => {
    res.send(`Hello from Root Dirctory /`)
})

app.use("/users", users)

app.listen(5000, () => {
    console.log(`Started Port on 5000`)
})