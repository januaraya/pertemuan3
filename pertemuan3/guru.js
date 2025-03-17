const express = require('express');
const router = express.Router();

//routing
app.get("/:id", (req, res) => {
    res.send("guru");
});
app.post("/post", (req, res) => {
    res.send("guru");
});

app.put("/put", (req, res) => {
    res.send("guru");
});


app.delete("/delete", (req, res) => {
    res.send("guru");
});

// Memulai server
module.exports = router;