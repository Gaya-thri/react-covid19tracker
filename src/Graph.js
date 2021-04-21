import React from "react";
import {MapContainer, TileLayer, useMap} from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

export default function Graph({ countries, casesType, center, zoom }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
      <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}> 
        <ChangeView center={center} zoom={zoom} /> 
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiZ2F5YXRocmljaGVlZGVsbGEiLCJhIjoiY2tuZTVmNWIyMjNlczJwbzAyZjB5emduOCJ9.0VEsnoNpv5aNfFzcQKOgag}"
          />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
      </div>
  )
}

