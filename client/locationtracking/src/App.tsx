import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { connectSocket, disconnectSocket, socket } from './socket';
import Mapnavigate from './Mapnavigate';

interface User{
  id:string;
  latitude:number;
  longitude:number;

}
const App = () => {
  const [position, setPosition] = useState<[number, number]>([20.5937, 78.9629])
  const [users, setUsers] = useState<User[]>([])

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
      socket.on("updated-users", (updatedusers:User[]) => {
        setUsers(updatedusers)
      })
      socket.on("receive-location", (location) => {
        console.log("receive location ", location);
        setPosition([location.latitude, location.longitude])
      })
    }

    return (() => {
      disconnectSocket()
    })

  }, [])

  return (
    <div>
      <MapContainer
        center={position}
        zoom={1}
        style={{ height: '100vh', width: '100%' }}
      >
        <Mapnavigate coords={position} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


        {users.map((user) => {
          return <Marker
            position={[user.latitude, user.longitude]}
            key={user.id}
            icon={customIcon}>
            <Popup>
              <h2>User: {user.id}</h2>
              <p>Latitude: {user.latitude}</p>
              <p>Longitude: {user.longitude}</p>
            </Popup>
          </Marker>
        })}
      </MapContainer>
    </div>
  );
};

export default App;
