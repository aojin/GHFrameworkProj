const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const FrameworkDataSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dependentRepos: {
    type: Number
  },
  dependentPackages: {
    type: Number
  },
  activeIssues: {
    type: Number
  },
  closedIssues: {
    type: Number
  },
  newIssues: {
    type: Number
  },
  activeContributors: {
    type: Number
  },
  unresolvedConversations: {
    type: Number
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = FrameworkData = mongoose.model(
  "frameworkData",
  FrameworkDataSchema
);
