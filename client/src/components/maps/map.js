import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import mapStyles from "./mapStyles";
import { useSelector } from "react-redux";

const GMap = () => {
  const marker = useSelector(
    state => state.bathroom.bathrooms.payload.payload.data
  );

  const initLocation = useSelector(
    state => state.location.initlocation.payload
    
  )
  //console.log(initLocation);
  return (
    <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: initLocation.latitude, lng: initLocation.longitude }}
        defaultOptions={{ styles: mapStyles }}
      >
        {marker.map(bath => (
          <Marker
            key={bath.id}
            position={{ lat: bath.latitude, lng: bath.longitude }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(GMap));

const Map = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        padding: 0,
        position: "fixed",
        marginTop: 60
      }}
    >
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAGb4bJ_GV4G3UeUAAJ2cuU06P7cFKftJQ"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
