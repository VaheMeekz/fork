const express = require("express");
const router = express.Router();


const Fork = require("../models").Forks;
const Repo = require("../models").Repos;

router.post("/", async function (req, res) {
  const { repoid } = req.body;

  const newFork = await Fork.create({ repoId: repoid });
  const rep = await Repo.findOne({ where: { id: repoid } });
  rep.hav = true;
  rep.save();
  return res.json(newFork);
});

router.get("/", async function (req, res) {
  const allRepos = await Fork.findAll();

  const reps = await Repo.findAll({ where: { hav: true } });

  return res.json(reps);
});


router.post("/deleate", async function (req, res) {
  const { id } = req.body;

  const thisFor = await Fork.destroy({ where: { repoId: id } });
  const thisRep = await Repo.findOne({ where: { id } });
  thisRep.hav = false;
  thisRep.save();
  const allForks = await Repo.findAll({ where: { hav: true } });
  return res.json(allForks);
});

module.exports = router;
