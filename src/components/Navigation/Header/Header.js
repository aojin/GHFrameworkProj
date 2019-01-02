import React from "react";
import classes from "./Header.module.css";
import GitHubLogo from "../../../assets/images/GitHub_logo_2013_padded.svg";
import Logo from "../../Logo/Logo";
import RefreshButton from "../../RefreshButton/RefreshButton";

const header = props => {
  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <Logo logoPath={GitHubLogo} />
      </div>
      <div className={classes.Title}>
        <h2>
          <span>GitHub Data: </span>
          <span>War of the Web Frameworks</span>
        </h2>
      </div>
      <nav className={classes.DesktopOnly}>
        <RefreshButton />
      </nav>
    </header>
  );
};

export default header;
