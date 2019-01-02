import React, { Component } from "react";
import Layout from "./HOC/Layout/Layout";
import DataLayer from "./containers/DataLayer/DataLayer";

class App extends Component {
  render() {
    return (
      <Layout>
        <DataLayer />
      </Layout>
    );
  }
}

export default App;
