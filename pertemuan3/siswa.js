const express = require('express');
const router = express.Router();

//routing
app.post("/", (req, res) => {
    res.send("siswa");
});

app.get("/", (req, res) => {
    res.send("siswa");
});

app.put("/", (req, res) => {
    res.send("siswa");
});

app.delete("/", (req, res) => {
    res.send("siswa");
});

// Memulai server
module.exports = router;