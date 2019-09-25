import React, { useEffect, useState } from "react";
import Map from "./map";
import Navbar from "../layouts/mainNavBar";
import Drawer from "../layouts/drawer";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../layouts/loading";
import Grid from "@material-ui/core/Grid";
import BathList from "../maps/bathList";
//import {usePosition} from '../../utils/position';
import * as actions from "../../actions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { mergeClasses } from "@material-ui/styles";

const gridStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(1)
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

const BathMap = ({ loadBathroom }) => {
  const [loading, setLoading] = useState({ loading: true });

  const initLocation = useSelector(
    state => state.location.initlocation.payload
  );

  const params = {
    page: 1,
    per_page: 30,
    lat: initLocation.latitude,
    lng: initLocation.longitude
  };

  useEffect(() => {
    const restRoom = axios.create({
      baseURL: "https://www.refugerestrooms.org/api/v1/restrooms",
      timeout: 40000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    const fetchData = async () => {
      const result = await restRoom.get("/by_location", { params });
      await loadBathroom(result);

      setLoading(false);
    };
    fetchData();
  }, []);

  const classes = gridStyles();

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <Drawer />
      <Grid container className={classes.container} spacing={1}>
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

const mapDispatchToProps = {
  loadBathroom: actions.loadBathrooms
};

export default connect(
  null,
  mapDispatchToProps
)(BathMap);
