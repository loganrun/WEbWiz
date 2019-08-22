import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            WHIZZ
          </Typography>
          <Typography variant='h6'>
          Business Partners Sign in
          </Typography>
          <Link
            to='login'
            variant='body2'
            style={{ color: "white", fontSize: 20 }}
          >
            <Button variant='outlined' size ='medium' style={{backgroundColor:'white', opacity: .9, marginLeft: 10 }}>Here</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

