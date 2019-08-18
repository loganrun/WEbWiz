import React, { Component } from "react";
import NavBar from "./navBar";
import Vid from "../../assets/images/twiz (1).mp4";
import Typography from "@material-ui/core/Typography";
import "./landing.css";
import VideoCover from "react-video-cover";
import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export class landing extends Component {
  render() {
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
          //top: "0",
          //left: "0",
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
        >
          
          {/* <Typography
            variant='h2' align='center' 
            style={{ color: "white", marginLeft: 150, marginTop: 150,zIndex: 1000000 }}
          >
            TIRED OF PEEING IN A CUP?
          </Typography>
          <Typography variant='h3' style={{ color: "white" }} align='center'>
            SIGN UP here AND FIND A BATHROOM NEAR YOU
          </Typography> */}
        </div>
        <NavBar />
        <Container style={{overflow:'hidden', }}> 
          <div style={{}}>
          <Typography
            variant='h2' align='center'
            paragraph
            style={{ color: "white", position: 'relative', marginTop: 200, marginBottom: 100  }}
          >
            Are you visiting a new city? 
            A rideshare driver looking for a place to "go"? Click 
            <Link
            to='signup'
            variant='body2'
            style={{ color: "white"}}
          ><Button variant='outlined'size ='large' style={{backgroundColor:'white', opacity: .9, marginLeft: 10, marginRight: 10 }}>HERE</Button></Link> 
            and WHIZZ will find you the closest place too find relief!
          </Typography>
          <Typography variant='h4' style={{ color: "white", position: 'relative', margintop: 50}} align='center'>
            Add your business to our growing community by clicking
            <Link
            to='signup'
            variant='body2'
            style={{ color: "white"}}
          ><Button variant='outlined'size ='small' style={{backgroundColor:'white', opacity: .9, marginLeft: 10, marginRight: 10 }}>HERE</Button></Link> 
          </Typography> */}
        </div>
        </Container>

       
      </div>
    );
  }
}

export default landing;
