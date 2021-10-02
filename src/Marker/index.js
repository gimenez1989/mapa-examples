import { useEffect } from "react";
import { Marker } from "maplibre-gl";

const MarkerComponent = ({ map }) => {
  useEffect(() => {
    new Marker().setLngLat([-58.45, -34.59]).addTo(map);
  }, [map]);

  return null;
};

export default MarkerComponent;
