import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

let counter = 0;

function createData(
  name,
  dependentRepos,
  dependentPackages,
  activeIssues,
  closedIssues,
  newIssues,
  contributors,
  activePullReqs,
  unresolvedConversations
) {
  counter += 1;
  return {
    id: counter,
    name,
    dependentRepos,
    dependentPackages,
    activeIssues,
    closedIssues,
    newIssues,
    contributors,
    activePullReqs,
    unresolvedConversations
  };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Framework"
  },
  {
    id: "dependentRepos",
    numeric: true,
    disablePadding: false,
    label: "Dependent Repos"
  },
  {
    id: "dependentPackages",
    numeric: true,
    disablePadding: false,
    label: "Dependent Packages"
  },
  {
    id: "activeIssues",
    numeric: true,
    disablePadding: false,
    label: "Active Issues"
  },
  {
    id: "closedIssues",
    numeric: true,
    disablePadding: false,
    label: "Closed Issues"
  },
  {
    id: "newIssues",
    numeric: true,
    disablePadding: false,
    label: "New Issues"
  },
  {
    id: "contributors",
    numeric: true,
    disablePadding: false,
    label: "Active Contributors"
  },
  {
    id: "activePullReqs",
    numeric: true,
    disablePadding: false,
    label: "Active Pull Requests"
  },
  {
    id: "unresolvedConversations",
    numeric: true,
    disablePadding: false,
    label: "Unresolved Conversations"
  }
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  componentDidMount() {
    // console.log("Table DidMount()");
  }

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}>
                <Tooltip
                  title='Sort'
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}>
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },

  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
});

let EnhancedTableToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar className={classNames(classes.root)}>
      <div className={classes.title}>
        <Typography variant='h6' id='tableTitle'>
          Last Month On GitHub:
        </Typography>
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto",
    margin: "10px"
  }
});

class EnhancedTable extends React.Component {
  state = {
    order: "desc",
    orderBy: "dependentRepos",
    data: [
      createData(
        this.props.react.frameworkName,
        this.props.reactDeps.dependentRepos,
        this.props.reactDeps.dependentPkgs,
        this.props.react.activeIssues,
        this.props.react.closedIssues,
        this.props.react.newIssues,
        this.props.react.activeContributors,
        this.props.react.activePullReqs,
        this.props.react.unresolvedConversations
      ),
      createData(
        this.props.angular.frameworkName,
        this.props.angularDeps.dependentRepos,
        this.props.angularDeps.dependentPkgs,
        this.props.angular.activeIssues,
        this.props.angular.closedIssues,
        this.props.angular.newIssues,
        this.props.angular.activeContributors,
        this.props.angular.activePullReqs,
        this.props.angular.unresolvedConversations
      ),
      createData(
        this.props.vue.frameworkName,
        this.props.vueDeps.dependentRepos,
        this.props.vueDeps.dependentPkgs,
        this.props.vue.activeIssues,
        this.props.vue.closedIssues,
        this.props.vue.newIssues,
        this.props.vue.activeContributors,
        this.props.vue.activePullReqs,
        this.props.vue.unresolvedConversations
      ),
      createData(
        this.props.ember.frameworkName,
        this.props.emberDeps.dependentRepos,
        this.props.emberDeps.dependentPkgs,
        this.props.ember.activeIssues,
        this.props.ember.closedIssues,
        this.props.ember.newIssues,
        this.props.ember.activeContributors,
        this.props.ember.activePullReqs,
        this.props.ember.unresolvedConversations
      )
    ]
  };

  componentDidMount() {
    // console.log(this.props);
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { classes } = this.props;
    const { data, order, orderBy } = this.state;

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby='tableTitle'>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy)).map(n => {
                return (
                  <TableRow hover key={n.id}>
                    <TableCell component='th' scope='row' padding='none'>
                      {n.name.toUpperCase()}
                    </TableCell>
                    <TableCell align='right'>
                      {n.dependentRepos.toLocaleString("en")}
                    </TableCell>
                    <TableCell align='right'>
                      {n.dependentPackages.toLocaleString("en")}
                    </TableCell>
                    <TableCell align='right'>
                      {n.activeIssues.toLocaleString("en")}
                    </TableCell>
                    <TableCell align='right'>
                      {n.closedIssues.toLocaleString("en")}
                    </TableCell>
                    <TableCell align='right'>
                      {n.newIssues.toLocaleString("en")}
                    </TableCell>
                    <TableCell align='right'>
                      {n.contributors.toLocaleString("en")}
                    </TableCell>
                    <TableCell align='right'>
                      {n.activePullReqs.toLocaleString("en")}
                    </TableCell>
                    <TableCell align='right'>
                      {n.unresolvedConversations}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(EnhancedTable);
