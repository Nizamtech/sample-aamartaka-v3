import {
  GoogleMap,
  StreetViewService,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React from "react";

const GoogleMapCard = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "350px",
  };

  const center = {
    lat: 23.775438,
    lng: 90.4031033,
  };

  const onLoad = (streetViewService) => {
    streetViewService.getPanorama(
      {
        location: center,
        radius: 50,
      },
      (data, status) =>
        console.log("StreetViewService results", { data, status })
    );
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAKkmoH E5VSamY14T7_xF-ZPDdUtZnVmws">
        <GoogleMap
          id="circle-example"
          mapContainerStyle={mapContainerStyle}
          zoom={18}
          center={center}
        >
          <StreetViewService onLoad={onLoad}>
            <Marker
              onLoad={onLoad}
              position={center}
              text="Hello World!"
              icon={"https://i.ibb.co/RDgZ0DQ/marker.png"}
            />
          </StreetViewService>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapCard;
