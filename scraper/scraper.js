const fetch = require("node-fetch");
const cheerio = require("cheerio");

const pulseUrls = {
  react: "https://github.com/facebook/react/pulse/monthly",
  angular: "https://github.com/angular/angular.js/pulse/monthly",
  vue: "https://github.com/vuejs/vue/pulse/monthly",
  ember: "https://github.com/emberjs/ember.js/pulse/monthly"
};

const depUrls = {
  react: "https://github.com/facebook/react/network/dependents",
  angular: "https://github.com/angular/angular.js/network/dependents",
  vue: "https://github.com/vuejs/vue/network/dependents",
  ember: "https://github.com/emberjs/ember.js/network/dependents"
};

function scrapePulse(frameworkName) {
  return fetch(`${pulseUrls[frameworkName]}`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);
      //   console.log(body); WORKS
      const $BoxHeader = $(
        "#js-repo-pjax-container .Box-header+ ul > li > div"
      );

      const activePullReqs = Number.parseInt(
        $BoxHeader
          .first()
          .text()
          .trim()
          .replace(/\D/g, "")
      );

      //   console.log("Active Pull Requests: ", activePullReqs);

      const activeIssues = Number.parseInt(
        $BoxHeader
          .last()
          .text()
          .trim()
          .replace(/\D/g, "")
      );

      //   console.log("Active Issues: ", activeIssues);

      const closedIssues = Number.parseInt(
        $(".summary-stats li:nth-child(3)")
          .text()
          .trim()
          .replace(/\D/g, "")
      );

      //   console.log("Closed Issues: ", closedIssues);

      const newIssues = Number.parseInt(
        $(".summary-stats li:nth-child(4)")
          .text()
          .trim()
          .replace(/\D/g, "")
      );

      //   console.log("New Issues: ", newIssues);

      const activeContributors = Number.parseInt(
        $("#closed-issues span:nth-child(3)")
          .text()
          .trim()
      );

      //   console.log("Active Contributors/Closers: ", activeContributors);

      const unresolvedConversations = Number.parseInt(
        $("#active_discussions .inner > span")
          .text()
          .trim()
      );

      //   console.log("Unresolved Conversations: ", unresolvedConversations);

      const pulseData = {
        frameworkName,
        activePullReqs,
        activeIssues,
        closedIssues,
        newIssues,
        activeContributors,
        unresolvedConversations
      };

      //   console.log("Pulse Object: ", pulseData);

      return pulseData;
    });
}

// scrapePulse("react");

function scrapeDeps(frameworkName) {
  return fetch(`${depUrls[frameworkName]}`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);

      const dependentRepos = Number.parseInt(
        $(".btn-link.selected")
          .text()
          .trim()
          .replace(/\D/g, "")
      );

      //   console.log("Dependent Repos: ", dependentRepos);

      const dependentPkgs = Number.parseInt(
        $(".selected+ .btn-link")
          .text()
          .trim()
          .replace(/\D/g, "")
      );

      //   console.log("Dependent Packages: ", dependentPkgs);

      const depData = {
        frameworkName,
        dependentRepos,
        dependentPkgs
      };

      //   console.log("Dependency Object: ", depData);

      return depData;
    });
}

// scrapeDeps("react");

module.exports = {
  scrapePulse,
  scrapeDeps
};
