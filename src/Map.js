import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={20}
    defaultCenter={{ lat: -37.8187243, lng: 144.95927229999998 }}
  >
    <Marker position={{ lat: -37.8187243, lng: 144.95927229999998 }} />
  </GoogleMap>
))

export default Map
