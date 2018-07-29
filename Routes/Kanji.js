const express = require("express");
const kanjiRoutes = express.Router();
const Kanji = require("../Models/Kanji.js");


kanjiRoutes.get("/", (req,res) => {
  Kanji.find((err, Kanji) => {
    if (err) return res.status(500).send(err);
    return res.send(Kanji);
  })
})

kanjiRoutes.get("/:id", (req, res) => {
  Kanji.findById(req.params.id, (err, Kanji) => {
    if(err) return res.status(500).send(err);
    return res.send(Kanji);
  });
});

kanjiRoutes.post("/", (req,res) => {
  const newKanji = new Kanji(req.body);
  newKanji.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newKanji);
  });
});

kanjiRoutes.put("/:id", (req, res) => {
  Kanji.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedKanji) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedKanji);
  });
});


//no idea why i'd use it but why not
kanjiRoutes.delete("/:id", (req, res) => {
  Kanji.findByIdAndRemove(req.params.id, (err,removedKanji) => {
    if (err) return res.status(500).send(err);
    return res.status(202).send(removedKanji)
  })
})


module.exports = kanjiRoutes;