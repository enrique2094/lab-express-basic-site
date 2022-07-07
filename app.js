//Import framework Express
const express = require("express");

const app = express();

//Configure folder where resources will be stored (img, css, html, etc.)
app.use(express.static('public'))
app.use(express.static('views'))

//localhost:3000
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get("/photo-gallery", (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')
})

app.listen("3000", () => {
    console.log("working server")
})