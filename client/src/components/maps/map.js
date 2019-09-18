import React, {useState} from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker, InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import mapicon from "../../assets/images/bathicon2.png"



const GMap = () => {
  const marker = useSelector(
    state => state.bathroom.bathrooms.payload.payload.data
  );

  // const newLat = onCenterChange()
  // console.log(newLat)

  const mapMark = mapicon

  const bounds = new window.google.maps.LatLngBounds();
  console.log(bounds)

 const onBoundsChange = (coord) => {
    console.log(coord);
    //console.log(map)
    
  }

  const onDragEnd = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat)
    console.log(lng)
  }

  const centerMoved = (event) =>  {
    console.log(event);
    //console.log(map)
  }

  const [selectedBath, setSelectedBath] = useState(null);
  console.log(selectedBath)
  const initLocation = useSelector(
    state => state.location.initlocation.payload
    
  )
  return (
    <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: initLocation.latitude, lng: initLocation.longitude }}
        defaultOptions={{ styles: mapStyles }}
        // ref={map => map && map.fitBounds(bounds)}
        // onDragEnd={(t, map, coord) => onDragEnd(coord)}
        // onDragEnd={(t, map, coord) => onBoundsChange(coord)}
        onDragEnd={centerMoved}
      >
        {marker.map(bath => (
          <Marker
            key={bath.id}
            position={{ lat: bath.latitude, lng: bath.longitude }}
            icon= {mapMark}
            onClick={()=>{
              setSelectedBath(bath)
              
            }}
          />
        ))}

        {selectedBath && (
          <InfoWindow
          onCloseClick= {()=>{
            setSelectedBath(null);
          }}
          position={{
            lat:  selectedBath.latitude,
            lng:  selectedBath.longitude
          }}>
            <div>
            <Typography variant="h6">{selectedBath.name}</Typography>
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
        googleMapURL={
          `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`
        }
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default Map;
