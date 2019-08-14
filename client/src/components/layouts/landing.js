import React, { Component } from "react";
import NavBar from "./navBar";
import Vid from "../../assets/images/twiz (1).mp4";
//import Typography from "@material-ui/core/Typography";
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
            opacity: 0.3,
            width: "120vw",
            height: "120vh",
            position: "fixed"
            //top: "-10vh",
            //left: "-10vw",
          }}
        />
        <NavBar />
      </div>
    );
  }
}

export default landing;


