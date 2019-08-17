import React from "react";
import Map from "./map";
import Navbar from "../layouts/mainNavBar";
import Drawer from "../layouts/drawer";

const bathMap = () => {
  return (
    <div>
      <Navbar />
      <Drawer />
      <Map />
    </div>
  );
};

export default bathMap;
