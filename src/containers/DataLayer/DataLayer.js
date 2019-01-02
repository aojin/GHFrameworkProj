import React, { Component } from "react";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import LastMonth from "../../components/LastMonth/LastMonth";
import Cards from "../../components/Cards/Cards";

import Footer from "../../components/Navigation/Footer/Footer";

class DataLayer extends Component {
  // this wrapper will be responsible for all graphQL requests & storage of data for use in child components
  // child components will be the primary Graph hero section as well as the horizonatal or vertical list of cards.

  state = {
    frameworks: {}
  };

  componentWillMount = () => {
    // console.log("Data Layer ComponentDidMount()");
    this.getDepData();
    this.getScrapedData();
    this.getGitHubAPIData();
  };

  // base lifetime information for cards from basic fetch
  getGitHubAPIData = () => {
    const urls = [
      "https://api.github.com/repos/facebook/react",
      "https://api.github.com/repos/angular/angular.js",
      "https://api.github.com/repos/vuejs/vue",
      "https://api.github.com/repos/emberjs/ember.js"
    ];

    try {
      Promise.all(
        urls.map((
          url // # mapping our urls to a fetch and parseJson procedure
        ) =>
          fetch(url)
            .then(checkStatus)
            .then(parseJSON) // calls .json
            .catch(error =>
              console.log("There was a problem fetching & parsing data!", error)
            )
        )
      ).then(data => {
        // console.log(data); // outputs an array of framework objects.
        // * set State to JSON response
        this.setState({ frameworks: data });
        // console.log("GitHub APIv3 Array:");
        // console.log(this.state.frameworks); // check State
      });
    } catch (err) {
      console.log(err);
    }
  };

  getScrapedData = () => {
    const ends = ["react", "angular", "vue", "ember"];

    try {
      Promise.all(
        ends.map(end =>
          fetch(`api/frameworks/pulse/${end}`)
            .then(checkStatus)
            .then(parseJSON) // calls .json
            .catch(error =>
              console.log("There was a problem fetching & parsing data!", error)
            )
        )
      ).then(fw => {
        this.setState({ scraped: fw });
        // console.log("Scraper Data: ");
        // console.log(this.state.scraped);
      });
    } catch (err) {
      console.log(err);
    }
  };

  getDepData = () => {
    const ends = ["react", "angular", "vue", "ember"];

    try {
      Promise.all(
        ends.map(end =>
          fetch(`api/frameworks/deps/${end}`)
            .then(checkStatus)
            .then(parseJSON) // calls .json
            .catch(error =>
              console.log("There was a problem fetching & parsing data!", error)
            )
        )
      ).then(fw => {
        this.setState({ deps: fw });
        // console.log("Dep Data: ");
        // console.log(this.state.deps);
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Aux>
        {this.state.scraped ? (
          <LastMonth
            react={this.state.scraped[0]}
            reactDeps={this.state.deps[0]}
            angular={this.state.scraped[1]}
            angularDeps={this.state.deps[1]}
            vue={this.state.scraped[2]}
            vueDeps={this.state.deps[2]}
            ember={this.state.scraped[3]}
            emberDeps={this.state.deps[3]}
          />
        ) : (
          <p>Loading...</p>
        )}
        <h1 style={{ textAlign: "center" }}>Lifetime Stats: </h1>
        <Cards frameworks={this.state.frameworks} />
        <Footer />
      </Aux>
    );
  }
}

export default DataLayer;

//------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function parseJSON(response) {
  return response.json();
}
