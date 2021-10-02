import React, { useEffect, useState } from "react";
import { Map } from "maplibre-gl";
import MarkerComponent from "../Marker";
import Route from "../Route";

const MapUnico = () => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    setMap(
      new Map({
        container: "mapContainer", // container id
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
            capabase_2: {
              type: "raster",
              tiles: [
                "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
              ],
              tileSize: 256,
              attribution:
                'Map tiles by <a target="_top" rel="noopener" href="http://stamen.com">Stamen Design</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_top" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
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
        }, // style URL        center: [-58.45, -34.59], // starting position [lng, lat]
        zoom: 3, // starting zoom
      })
    );
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }} id="mapContainer"></div>
      {/* {map && <MarkerComponent map={map} />} */}
      {map && <Route map={map} />}
    </div>
  );
};

export default MapUnico;
