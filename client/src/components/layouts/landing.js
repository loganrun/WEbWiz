import React from "react";
import NavBar from "./navBar";
import Vid from "../../assets/images/twiz (1).mp4";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./landing.css";
import VideoCover from "react-video-cover";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { usePosition } from "../../utils/position";
import { connect } from "react-redux";
import * as actions from "../../actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  landing: {
    align: "center",
    color: "white",
    position: "relative",
    marginTop: 180,
    marginBottom: 100,
    fontSize: 65
  },

  "@media (max-width: 600px)": {
    landing: {
      marginTop: 100,
      fontSize: 35
    }
  }
}));

const Landing = ({ initialLocation, searchLocation }) => {
  //const UsePositionDemo = () => {

  const classes = useStyles();
  const position = usePosition(true);
  initialLocation(position);
  searchLocation(position);
  //console.log(position);
  // useEffect(() =>{const fetchLocation = async ()=>{
  //    if (usePosition()) {
  //       const location = await navigator.geolocation.getCurrentPosition(showPosition);
  //   //   console.log(location)
  //   // } else {
  //   //   console.log("Geolocation is not supported by this browser.")
  //   const {latitude, longitude, error} = usePosition();
  //   console.log(latitude, longitude)
  //   }, []);

  const videoOptions = {
    src: Vid,
    autoPlay: true,
    loop: true,
    muted: true
  };

  return (
    <div
      style={{
        overflow: "hidden"
      }}
    >
      <VideoCover
        videoOptions={videoOptions}
        style={{ overflow: "hidden", position: "absolute" }}
      />
      <div
        style={{
          backgroundColor: "black",
          opacity: 0.55,
          width: "100vw",
          height: "100vh",
          position: "fixed"
          //top: "-10vh",
          //left: "-10vw",
        }}
      ></div>
      <NavBar />
      <Container style={{ overflow: "hidden" }}>
        <div style={{}}>
          <Typography
            variant='h2'
            className={classes.landing}
            // align='center'
            paragraph
            // style={{
            //   color: "white",
            //   position: "relative",
            //   marginTop: 200,
            //   marginBottom: 100
            // }}
          >
            Are you visiting a new city? A rideshare driver looking for a place
            to "go"? Click
            <Link to='signup' variant='body2' style={{ color: "white" }}>
              <Button
                variant='outlined'
                size='large'
                style={{
                  backgroundColor: "white",
                  opacity: 0.9,
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                HERE
              </Button>
            </Link>
            and WHIZZ will show you the closest place to find relief!
          </Typography>
          <Typography
            variant='h4'
            style={{ color: "white", position: "relative" }}
            align='center'
          >
            Add your business to our growing community by clicking
            <Link
              to='signup'
              variant='body2'
              className='invite'
              style={{ color: "white" }}
            >
              <Button
                variant='outlined'
                size='small'
                style={{
                  backgroundColor: "white",
                  opacity: 0.9,
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                HERE
              </Button>
            </Link>
          </Typography>{" "}
          */}
        </div>
      </Container>
    </div>
  );
};

const mapDispatchToProps = {
  initialLocation: actions.initialLocation,
  searchLocation: actions.searchLocation
};
export default connect(
  null,
  mapDispatchToProps
)(Landing);
