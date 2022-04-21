const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.send("Notas GET");
});

router.post("/", function(req, res) {
   console.log(req.body)
   res.send("Notas BODY");
});
router.put("/:id", function(req,res){
    console.log(req.params)
    console.log(req.put)
    res.send("Notas PUT");
});
router.delete("/", function(req,res){
   console.log(req.delete)
   res.send("Notas DELETE");
});

module.exports = router;