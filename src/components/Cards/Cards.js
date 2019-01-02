import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Card/Card";
import classes from "./Cards.module.css";

const cards = props => {
  const frameworkList = Object.keys(props.frameworks).map(framework => {
    return [...Array(props.frameworks)].map((_, i) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={props.frameworks[i].id}>
          <Card
            frameworkName={props.frameworks[framework].name}
            forks={props.frameworks[framework].forks}
            desc={props.frameworks[framework].description}
            stars={props.frameworks[framework].stargazers_count}
            watchers={props.frameworks[framework].subscribers_count}
            openIssues={props.frameworks[framework].open_issues_count}
          />
        </Grid>
      );
    });
  });

  return (
    <div className={classes.Cards}>
      <Grid container direction='row' justify='center' alignItems='center'>
        {frameworkList}
      </Grid>
    </div>
  );
};

export default cards;
