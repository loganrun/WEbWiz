import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import mapicon from "../../assets/images/bathicon2.png";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { useImmer } from "use-immer";

const GMap = ({ searchLocation }) => {
  const marker = useSelector(
    state => state.bathroom.bathrooms.payload.payload.data
  );
  const [intLocation, setIntLocation] = useImmer({
    longitude: "",
    latitude: ""
  });
  const loc = localStorage.getItem("initialPosition");
  const initLoc = JSON.parse(loc);

  const mapMark = mapicon;
  let map = null;

  const [selectedBath, setSelectedBath] = useState(null);

  //console.log(selectedBath)
  const initLocation = useSelector(
    state => state.location.initlocation.payload
  );

  const [newLocation, setNewLocation] = useImmer({
    longitude: "",
    latitude: ""
  });

  //  const updateLocation = (map) => {
  //   setNewLocation( longitude =>{...longitude, longitude:  map.getCenter().lng()})
  //   setNewLocation({...latitude, latitude: map.getCenter().lat()});
  //    console.log(newLocation);
  //  };

  const updateLatitude = newLat => {
    setNewLocation(draft => {
      draft.latitude = newLat;
    });
  };

  const updateLongitude = newLng => {
    setNewLocation(draft => {
      draft.longitude = newLng;
    });
    newSearch();
  };

  const newSearch = () => {
    searchLocation(newLocation);
  };
  //   const updateLongitude = (newLng) =>{
  //    setNewLocation(draft => {
  //      draft.longitude = newLng
  //    })
  //  }

  // }

  console.log(newLocation);
  return (
    <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{
          lat: initLoc.latitude,
          lng: initLoc.longitude
        }}
        defaultOptions={{ styles: mapStyles }}
        ref={ref => {
          map = ref;
        }}
        onDragEnd={() => {
          //console.log(map.getBounds());

          const newLat = map.getCenter().lat();
          const newLng = map.getCenter().lng();
          updateLongitude(newLng);
          updateLatitude(newLat);
        }}
      >
        {marker.map(bath => (
          <Marker
            key={bath.id}
            position={{ lat: bath.latitude, lng: bath.longitude }}
            icon={mapMark}
            onClick={() => {
              setSelectedBath(bath);
            }}
          />
        ))}

        {selectedBath && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedBath(null);
            }}
            position={{
              lat: selectedBath.latitude,
              lng: selectedBath.longitude
            }}
          >
            <div>
              <Typography variant='h6'>{selectedBath.name}</Typography>
              <Typography>{selectedBath.street}</Typography>
              <Typography>{selectedBath.city}</Typography>
            </div>
          </InfoWindow>
        )}
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
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

const mapDispatchToProps = {
  searchLocation: actions.searchLocation
};

export default connect(
  null,
  mapDispatchToProps
)(Map);
