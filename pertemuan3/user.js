const express =  require ("express");
const router = express.router();

    //routing
    router.get("/", (req,res) => {
        res.send('user');
    })

    router.get("/:id", (req,res) => {
        res.send ('user'  + req.params.id);
    });

    module.exports = router;