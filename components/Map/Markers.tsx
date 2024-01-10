import React from "react";
import { Map, Marker } from "react-map-gl";
import { userLocationContext } from "@/context/UserLocationContext";
import "mapbox-gl/dist/mapbox-gl.css";
import { useContext } from "react";

const Markers = () => {
const { userLocation, setUserLocation } = useContext(userLocationContext);

  return (
    <div>
        {/* {User Marker} */}
      <Marker
        longitude={userLocation?.lng}
        latitude={userLocation?.lat}
        anchor="bottom"
      >
        <img src="./pin.png" className="w-10 h-10" />
      </Marker>
    {/* Source marker */}
          
    {/* Destination Marker */}
    </div>
  );
};

export default Markers;
