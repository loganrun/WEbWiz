import React from 'react';
import {GoogleMap, withScriptjs,withGoogleMap} from 'react-google-maps';
import mapStyles from './mapStyles'
import {connect} from 'react-redux'
//import { connect } from 'formik';




const GMap = (props)=>{
return(
    <div>
    <GoogleMap defaultZoom={12}  defaultCenter={{lat:  33.986014, lng:-118.3668194}} defaultOptions={{styles: mapStyles}}>

        {/* {props.marker.map((bath) => (
            <Marker key={bath.id} position={{lat: bath.latitude, lng: bath.longitude}}/>

        ))} */}

    </GoogleMap>
    </div>
)



}

const WrappedMap = withScriptjs(withGoogleMap(GMap))

const Map = () =>{

    return(
        <div style={{height: '100vh', width: '100vw', padding: 0, position: "fixed",  marginTop: 60}}>
            <WrappedMap
            googleMapURL= {"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAGb4bJ_GV4G3UeUAAJ2cuU06P7cFKftJQ"}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
        </div>
    )
}
 const mapStateToProps = state =>({
     //latitude: state.location.position.latitude,
     //longitude: state.location.position.longitude,
     //marker: state.bathroom.payload.data
 })

export default connect(mapStateToProps)(Map)