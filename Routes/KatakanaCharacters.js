const express = require("express");
const katakanaRoutes = express.Router();
const Katakana = require("../Models/KatakanaCharacters.js");


katakanaRoutes.get("/", (req,res) => {
  Katakana.find((err, Katakana) => {
    if (err) return res.status(500).send(err);
    return res.send(Katakana);
  })
})

katakanaRoutes.get("/:id", (req, res) => {
  Katakana.findById(req.params.id, (err, Katakana) => {
    if(err) return res.status(500).send(err);
    return res.send(Katakana);
  });
});

katakanaRoutes.post("/", (req,res) => {
  const newKatakana = new Katakana(req.body);
  newKatakana.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newKatakana);
  });
});

katakanaRoutes.put("/:id", (req, res) => {
  Katakana.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedKatakana) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedKatakana);
  });
});


//no idea why i'd use it but why not
katakanaRoutes.delete("/:id", (req, res) => {
  Katakana.findByIdAndRemove(req.params.id, (err,removedKatakana) => {
    if (err) return res.status(500).send(err);
    return res.status(202).send(removedKatakana)
  })
})


module.exports = katakanaRoutes;