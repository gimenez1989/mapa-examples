import React, { useEffect } from "react";
import { Map } from "maplibre-gl";

const Raster = () => {
  useEffect(() => {
    new Map({
      container: "map", // container ID
      style: {
        version: 8,
        sources: {
          capabase_1: {
            type: "raster",
            scheme: "tms",
            tiles: [
              "https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "simple-tiles",
            type: "raster",
            source: "capabase_1",
            minzoom: 0,
            maxzoom: 22,
          },
        ],
      }, // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });
  }, []);
  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default Raster;
