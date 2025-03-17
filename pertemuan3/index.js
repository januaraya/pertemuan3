const express = require('express');
const app = express();
const port = 3000;
const user = require('./user'); // Perbaiki typo 'requre' menjadi 'require'
// nodemon index.js
// Menggunakan modul
app.use("/user", user);

// Routing
const users = require('./users');
const mapel = require('./mapel');
const siswa = require('./siswa');
const guru = require('./guru');
const kelas = require('./kelas');
const jadwal = require('./jadwal');
const nilai = require('./nilai');
const presensi = require('./presensi');

// Routing halaman utama
app.use('/users', users);
app.use('/mapel', mapel);
app.use('/siswa', siswa);
app.use('/guru', guru);
app.use('/kelas', kelas);
app.use('/jadwal', jadwal);
app.use('/nilai', nilai);
app.use('/presensi', presensi);

app.post("/", (req, res) => {
    res.send("Selamat Datang");
});

app.get("/", (req, res) => {
    res.send("Selamat Datang");
});

app.put("/", (req, res) => {
    res.send("Selamat Datang");
});

app.delete("/", (req, res) => {
    res.send("Selamat Datang");
});

// Memulai server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); 
});
