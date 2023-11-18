import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface Location {
  latitude: number;
  longitude: number;
  label: string;
  activity: number;
}

interface MapProps {
  locations: Location[];
}

const Map: React.FC<MapProps> = ({ locations }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibXNhbHZhdHRpIiwiYSI6ImNsbm91NDViOTAzNGkya3BrMXQ1bGRjY3oifQ.wYUbNAyQD9gJ8yPJ3RHSKw";

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.006, 40.7128],
      zoom: 9,
    });

    locations.forEach((location) => {
      const popupContent = document.createElement("div");

      popupContent.classList.add("custom-popup");

      popupContent.innerHTML = `
        <h3>${location.label}</h3>
        <p>Activity: ${location.activity}</p>
      `;

      new mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .setPopup(new mapboxgl.Popup().setDOMContent(popupContent))
        .addTo(map);
    });

    return () => map.remove();
  }, [locations]);

  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
