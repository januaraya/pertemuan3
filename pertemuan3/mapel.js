const express = require('express');
const router = express.Router();

//routing
app.post("/", (req, res) => {
    res.send("mapel");
});

app.get("/", (req, res) => {
    res.send("mapel");
});

app.put("/", (req, res) => {
    res.send("mapel");
});

app.delete("/", (req, res) => {
    res.send("mapel");
});

// Memulai server
module.exports = router;