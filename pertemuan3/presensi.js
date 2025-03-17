const express = require('express');
const router = express.Router();

//routing
app.post("/", (req, res) => {
    res.send("presensi");
});

app.get("/", (req, res) => {
    res.send("presensi");
});

app.put("/", (req, res) => {
    res.send("presensi");
});

app.delete("/", (req, res) => {
    res.send("presensi");
});

// Memulai server
module.exports = router;