const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.send({nome: "Marcos"});
});

router.post("/", function(req, res) {
   console.log(req.body)
   res.send("Olá Tudo bom");
});
router.put("/", function(req,res){
    console.log(req.put)
    res.send("Usuario PUT");
});
router.delete("/", function(req,res){
   console.log(req.delete)
   res.send("Item Removido");
});

module.exports = router;