const express = require('express');
const router = express.Router();

//routing
app.post("/", (req, res) => {
    res.send("jadwal");
});

app.get("/", (req, res) => {
    res.send("jadwal");
});

app.put("/", (req, res) => {
    res.send("jadwal");
});

app.delete("/", (req, res) => {
    res.send("jadwal");
});

// Memulai server
module.exports = router;