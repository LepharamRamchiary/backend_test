const express = require("express")
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/twitter", (req, res) => {
    res.send("Hello From Twitter")
})

app.get("/login", (req, res) => {
    res.send("<h1>Pls login</h1>")
})

app.listen(port, () => {
    console.log(`Server live on ${port}`);
})