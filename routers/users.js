const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("hi from user")
})

// router.get("/:id", (req, res) => {
//     res.send(`Id of the user is ${req.params.id}`)
// })

router.route("/:id")
    .get((req, res) => {
    res.send(`Get Id of ${req.params.id}`)
    })
    .post((req, res) => {
    res.send(`Post of id ${req.params.id}`)
    })
    .delete((req, res) => {
    res.send(`Delete of id ${req.params.id}`)
    })
    .patch((req, res) => {
    res.send(`Update of id ${req.params.id}`)
})

router.param("id", (req, res, next, id) => {
    console.log(`${id} has sent a ${req.method} type `)
    next()
})

module.exports = router