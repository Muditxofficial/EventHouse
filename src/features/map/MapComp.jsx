import React from "react";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
export default function MapComp() {
  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/alex982/ckp28hpdf65qd18oa7jejbcaa/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
        />
        <Marker position={[38.88219, -77.019503]} />
      </MapContainer>
    </div>
  );
}
