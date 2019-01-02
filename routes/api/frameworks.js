const express = require("express");
const router = express.Router();

// Frameworks Model

const FrameworkData = require("../../models/FrameworkData");
const scraper = require("../../scraper/scraper");

//-------------------- Scraper Endpoints  -------------------------//

router.get("/pulse/:name", (req, res) => {
  scraper.scrapePulse(req.params.name).then(pulseObj => {
    pulse = res.json(pulseObj);
  });
});

router.get("/deps/:name", (req, res) => {
  scraper.scrapeDeps(req.params.name).then(depObj => {
    deps = res.json(depObj);
  });
});

//-------------------- Mongo Routes  -------------------------//

// @route GET api/frameworks
// @desc Get All framework data
// @access Public

router.get("/getMongo", (req, res) => {
  FrameworkData.find()
    .sort({ date: -1 })
    .then(framework => res.json(framework));
  // because we're already in the route from server.js just '/'
  // Model.find() returns all sorts descending and formats to JSON
});

// @route POST api/frameworks
// @desc Post New Item
// @access Public

router.post("/", (req, res) => {
  const newFramework = new FrameworkData({
    name: req.body.name,
    dependentRepos: req.body.dependentRepos,
    dependentPackages: req.body.dependentPackages,
    activeIssues: req.body.activeIssues,
    closedIssues: req.body.closedIssues,
    newIssues: req.body.newIssues,
    activeContributors: req.body.activeContributors,
    unresolvedConversations: req.body.unresolvedConversations
  });

  newFramework.save().then(newFramework => res.json(newFramework));
});

// @route PUT api/frameworks/:name
// @desc Update A Framework entry
// @access Public

router.put("/update/:name", (req, res) => {
  var name = req.params.name;
  console.log(`Updating ${name} in db...`);
  FrameworkData.findOneAndUpdate({ name: [name] })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

// @route Delete api/frameworks/:id
// @desc Delete A Framework Entry
// @access Public

router.delete("/delete/:name", (req, res) => {
  var name = req.params.name;
  console.log(`Deleting ${name} from db...`);
  FrameworkData.findOneAndDelete({ name: [name] })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

// using ES5 on the server side because no Babel.
module.exports = router;
