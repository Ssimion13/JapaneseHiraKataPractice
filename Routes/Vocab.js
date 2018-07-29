const express = require("express");
const vocabRoutes = express.Router();
const Vocab = require("../Models/Vocab.js");


vocabRoutes.get("/", (req,res) => {
  Vocab.find((err, Vocab) => {
    if (err) return res.status(500).send(err);
    return res.send(Vocab);
  })
})

vocabRoutes.get("/:id", (req, res) => {
  Vocab.findById(req.params.id, (err, Vocab) => {
    if(err) return res.status(500).send(err);
    return res.send(Vocab);
  });
});

vocabRoutes.post("/", (req,res) => {
  const newVocab = new Vocab(req.body);
  newVocab.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newVocab);
  });
});

vocabRoutes.put("/:id", (req, res) => {
  Vocab.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedVocab) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedVocab);
  });
});


//no idea why i'd use it but why not
vocabRoutes.delete("/:id", (req, res) => {
  Vocab.findByIdAndRemove(req.params.id, (err,removedVocab) => {
    if (err) return res.status(500).send(err);
    return res.status(202).send(removedVocab)
  })
})


module.exports = vocabRoutes;