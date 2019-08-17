import React, { Component } from "react";
import NavBar from "./navBar";
import Vid from "../../assets/images/twiz (1).mp4";
import Typography from "@material-ui/core/Typography";
import "./landing.css";
import VideoCover from "react-video-cover";

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
            opacity: 0.5,
            width: "120vw",
            height: "120vh",
            position: "fixed"
            //top: "-10vh",
            //left: "-10vw",
          }}
        >
          <Typography
            variant='h2'
            style={{ color: "white", marginLeft: "150", marginTop: "150" }}
          >
            TIRED OF PEEING IN A CUP?
          </Typography>
          <Typography variant='h3' style={{ color: "white" }}>
            SIGN UP here AND FIND A BATHROOM NEAR YOU
          </Typography>
        </div>
        <NavBar />

        <div style={{ marginLeft: "150", marginTop: "150", zIndex: "1000000" }}>
          <Typography
            variant='h2'
            style={{ color: "white", marginLeft: "150", marginTop: "150" }}
          >
            TIRED OF PEEING IN A CUP?
          </Typography>
          <Typography variant='h3' style={{ color: "white" }}>
            SIGN UP here AND FIND A BATHROOM NEAR YOU
          </Typography>
        </div>
      </div>
    );
  }
}

export default landing;
