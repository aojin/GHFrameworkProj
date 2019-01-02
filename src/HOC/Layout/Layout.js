import React from "react";
import Aux from "./../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Header from "../../components/Navigation/Header/Header";

const layout = props => {
  return (
    <Aux>
      <Header />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
