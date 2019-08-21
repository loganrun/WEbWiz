import React from "react";
import Map from "./map";
import Navbar from "../layouts/mainNavBar";
import Drawer from "../layouts/drawer";
import { makeStyles } from "@material-ui/core/styles";
//import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';
//import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import BathList from "../maps/bathList";
const gridStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const bathMap = () => {
  const classes = gridStyles();
  return (
    <div>
      <Navbar />
      <Drawer />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <BathList />
        </Grid>
        <Grid item xs={9}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default bathMap;
