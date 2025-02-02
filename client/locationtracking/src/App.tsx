import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const App = () => {
  // Create a custom marker icon
  const customIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  return (
    <div>
      <MapContainer
        center={[28.6139, 77.209]} // Coordinates of New Delhi, India
        zoom={13} // Initial zoom level
        style={{ height: '100vh', width: '100%' }} // Fullscreen map size
      >
        {/* Tile layer to display the map background */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Add a Marker */}
        <Marker position={[28.6139, 77.209]} icon={customIcon}>
          <Popup><h2>New Delhi, India</h2></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
