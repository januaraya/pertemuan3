const express = require('express');
const router = express.Router();

// Endpoint GET untuk mendapatkan daftar nilai siswa
router.get('/', (req, res) => {
    res.json({
        message: "Daftar nilai berhasil diambil",
        nilai: [
            { id: 1, nama: "Alice", mata_pelajaran: "Matematika", nilai: 90 },
            { id: 2, nama: "Bob", mata_pelajaran: "Fisika", nilai: 85 }
        ]
    });
});

// Endpoint POST untuk menambahkan nilai baru
router.post('/', (req, res) => {
    res.json({
        message: "Nilai berhasil ditambahkan",
        nilai: req.body // Pastikan express.json() telah ditambahkan di server utama
    });
});

// Endpoint PUT untuk memperbarui nilai berdasarkan ID
router.put('/:id', (req, res) => {
    res.json({
        message: `Nilai dengan ID ${req.params.id} berhasil diperbarui`,
        data: req.body
    });
});

// Endpoint DELETE untuk menghapus nilai berdasarkan ID
router.delete('/:id', (req, res) => {
    res.json({
        message: `Nilai dengan ID ${req.params.id} berhasil dihapus`
    });
});

module.exports = router;
