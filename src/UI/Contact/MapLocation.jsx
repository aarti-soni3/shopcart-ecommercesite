import { Stack, Typography } from "@mui/material";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapLocation() {
  const defaultProps = {
    center: {
      lat: 22.3,
      lng: 70.8,
    },
    zoom: 11,
  };

  return (
    <Stack style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDdFgOr9HYNftdEhRmuS2QNSKnKofazT6U" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      />
    </Stack>
  );
}
