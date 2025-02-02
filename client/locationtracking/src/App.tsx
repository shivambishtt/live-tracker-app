import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { connectSocket, disconnectSocket, socket } from './socket';

const App = () => {

  const [position, setPosition] = useState<[number, number]>([28.6139, 77.209])

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  useEffect(() => {
    connectSocket()
    if (socket) {
      socket.on("send-location", (location: { latitude: number; longitude: number }) => {
        setPosition([location.latitude, location.longitude]);
      });
    }

    return (() => {
      disconnectSocket()
    })

  }, [])

  return (
    <div>
      <MapContainer
        center={position} // Coordinates of New Delhi, India
        zoom={13} // Initial zoom level
        style={{ height: '100vh', width: '100%' }} // Fullscreen map size
      >
        {/* Tile layer to display the map background */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Add a Marker */}
        <Marker position={position} icon={customIcon}>
          <Popup>
            <h2>Current Location</h2>
            <p>{`Latitude: ${position[0]}, Longitude: ${position[1]}`}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
