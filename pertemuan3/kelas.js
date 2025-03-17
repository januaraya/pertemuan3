const express = require('express');
const router = express.Router();

//routing
app.post("/", (req, res) => {
    res.send("kelas");
});

app.get("/", (req, res) => {
    res.send("kelas");
});

app.put("/", (req, res) => {
    res.send("kelas");
});

app.delete("/", (req, res) => {
    res.send("kelas");
});

// Memulai server
module.exports = router;