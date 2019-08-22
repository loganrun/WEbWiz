import React, {useEffect, useState} from "react";
import Map from "./map";
import Navbar from "../layouts/mainNavBar";
import Drawer from "../layouts/drawer";
import { makeStyles } from "@material-ui/core/styles";
//import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';
//import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import BathList from "../maps/bathList";
import {usePosition} from '../../utils/position';
import *as actions from '../../actions'
import { connect } from "react-redux";
import axios from "axios";




const gridStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(0)
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

    //initialLocation(position)

const BathMap = ({initialLocation}) => {

  const [data, setData] = useState({ bathrooms: [] });

  
  const position = usePosition(true);
    console.log(position)
    initialLocation(position)

  
  useEffect( (position) => {
    const params = {
      page: 1,
      per_page: 30,
      lat: 33.986014,
      lng: -118.3668194
    };

    const restRoom = axios.create({
      baseURL: 'https://www.refugerestrooms.org/api/v1/restrooms',
      timeout: 40000,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      } 
    });

    const fetchData = async () => {
    const result = await restRoom.get("/by_location", { params })
    console.log(result)
  setData(result.data);
      }
    fetchData()}, []);

  const classes = gridStyles();
  return (
    <div>
      <Navbar />
      <Drawer />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <BathList />
        </Grid>
        <Grid item xs={9}>
          <Map/>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = {
  initialLocation: actions.initialLocation
}

export default connect(null,mapDispatchToProps)(BathMap);
