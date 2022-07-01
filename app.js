const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors);
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "./views/index.html")
})

app.use((req, res, next) => {
    res.status(404).json({ message: "404 route not found" })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: "500 Something Wrong" })
})

module.exports = app;