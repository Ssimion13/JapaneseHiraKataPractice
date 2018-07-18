const express = require("express");
const hiraganaRoutes = express.Router();
const Hiragana = require("../Models/HiraganaCharacters.js");


hiraganaRoutes.get("/", (req,res) => {
  Hiragana.find((err, hiragana) => {
    if (err) return res.status(500).send(err);
    return res.send(hiragana);
  })
})

hiraganaRoutes.get("/:id", (req, res) => {
  Hiragana.findById(req.params.id, (err, hiragana) => {
    if(err) return res.status(500).send(err);
    return res.send(hiragana);
  });
});

hiraganaRoutes.post("/", (req,res) => {
  const newHiragana = new Hiragana(req.body);
  newHiragana.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newHiragana);
  });
});

hiraganaRoutes.put("/:id", (req, res) => {
  Hiragana.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedHiragana) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedHiragana);
  });
});


//no idea why i'd use it but why not
hiraganaRoutes.delete("/:id", (req, res) => {
  Hiragana.findByIdAndRemove(req.params.id, (err,removedHiragana) => {
    if (err) return res.status(500).send(err);
    return res.status(202).send(removedHiragana)
  })
})


module.exports = hiraganaRoutes;
