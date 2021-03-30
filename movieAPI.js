const express = require("express");
const { searchByQuery, filmDetails } = require("./services/api");

const router = express.Router();

router.get("/list/:term", async (req, res) => {
  const { term } = req.params;
  const resp = await searchByQuery(term);
  res.json(resp);
});

router.get("/details/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await filmDetails(id);
  res.json(resp);
});

module.exports = router;
