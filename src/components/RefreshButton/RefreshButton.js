import React from "react";
import classes from "./RefreshButton.module.css";
import refreshSVG from "../../assets/images/refresharrowwhite.svg";

const refreshButton = props => (
  <div className={classes.RefreshButton}>
    <img src={refreshSVG} alt='github logo' />
  </div>
);

export default refreshButton;
