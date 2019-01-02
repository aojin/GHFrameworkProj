import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./GraphHero.module.css";

// this functional compoenent will receive props to build a d3.js graph from data sent from the DataLayer

const graphHero = props => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      height='40vh'
      style={{ minHeight: "320px" }}>
      <Grid item>
        <div className={classes.GraphHero}>Graph</div>
      </Grid>
    </Grid>
  );
};

export default graphHero;
