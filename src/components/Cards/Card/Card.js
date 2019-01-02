import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import ReactLogo from "../../../assets/images/react.png";
import AngularLogo from "../../../assets/images/angular.svg";
import VueLogo from "../../../assets/images/Vue.js_Logo.svg";
import EmberLogo from "../../../assets/images/ember-tomster-logo-svg-vector.svg";
import Icon from "../../Icons/Icons";
import ForksIcon from "../../../assets/images/Code-fork-01.svg";
import StarsIcon from "../../../assets/images/Gold_Star.svg";
import WatchersIcon from "../../../assets/images/Octicons-eye.svg";
import OpenIssuesIcon from "../../../assets/images/Octicons-issue-opened.svg";
import { Badge } from "@material-ui/core";

const styles = theme => ({
  card: {
    margin: "3.5px",
    boxSizing: "border-box",
    maxWidth: "100%",
    height: "400px"
  },
  badge: {
    top: 0,
    right: -30,
    justifyContent: "left"
    // The border color match the background color.
  },
  title: {
    fontSize: 24
  },
  content: {
    textAlign: "center"
  },
  stat: {
    marginBottom: 10,
    display: "block"
  },
  media: {
    height: "100px",
    width: "100px",
    margin: "auto"
  },

  colorKey: {
    width: "100%",
    padding: "10px 0",
    marginBottom: "10px",
    justifyContent: "space-around",
    borderRadius: "5px 5px 0 0"
  }
});

const card = props => {
  const { classes } = props;

  let logo = null;
  let colorKey = null;

  switch (props.frameworkName) {
    case "react":
      logo = ReactLogo;
      colorKey = "#61DAFB";
      break;
    case "angular.js":
      logo = AngularLogo;
      colorKey = "#C3002F";
      break;
    case "vue":
      logo = VueLogo;
      colorKey = "#4DBA87";
      break;
    case "ember.js":
      logo = EmberLogo;
      colorKey = "#E24B31";
      break;
    default:
      logo = null;
  }

  return (
    <Card className={classes.card} key={props.key}>
      <div className={classes.logoView}>
        <div
          className={classes.colorKey}
          style={{ backgroundColor: colorKey }}
        />
        <CardMedia
          className={classes.media}
          image={logo}
          title='framework-logo'
          style={{ borderBottom: `2px solid ${colorKey}` }}
        />
      </div>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color='textPrimary' gutterBottom>
          {props.frameworkName
            .toString()
            .charAt(0)
            .toUpperCase() + props.frameworkName.substr(1)}
        </Typography>
        <Typography color='textSecondary' gutterBottom>
          {props.desc
            .toString()
            .charAt(0)
            .toUpperCase() + props.desc.substr(1)}
        </Typography>
        <Typography className={classes.stat} color='textSecondary'>
          <Badge badgeContent={props.forks} classes={{ badge: classes.badge }}>
            <Icon icon={ForksIcon} />
          </Badge>
        </Typography>
        <Typography className={classes.stat} color='textSecondary'>
          <Badge badgeContent={props.stars} classes={{ badge: classes.badge }}>
            <Icon icon={StarsIcon} />
          </Badge>
        </Typography>
        <Typography className={classes.stat} color='textSecondary'>
          <Badge
            badgeContent={props.watchers}
            classes={{ badge: classes.badge }}>
            <Icon icon={WatchersIcon} />
          </Badge>
        </Typography>
        <Typography className={classes.stat} color='textSecondary'>
          <Badge
            badgeContent={props.openIssues}
            classes={{ badge: classes.badge }}>
            <Icon icon={OpenIssuesIcon} />
          </Badge>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(card);
