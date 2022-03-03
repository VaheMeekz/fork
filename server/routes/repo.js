const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Repo = require("../models").Repos;

router.post("/", async function (req, res) {
  const { owner, repoNAme,link,star } = req.body;
 

  const newRep = await Repo.create({ owner, repName: repoNAme,hav:false,link,star });
  return res.json(newRep);
});

router.get("/", async function (req, res) {
    const allRepos = await Repo.findAll()

    return res.json(allRepos)
});
module.exports = router;
