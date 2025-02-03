# Real-time Location Sharing App with Socket.IO

This is a real-time location sharing app built using **React.js** and **Socket.IO**. The app allows users to share their location in real-time with others and see the locations of other users on a map. When a user updates their location, other users will immediately see the new position on the map.

## Features

- Real-time location sharing using **Socket.IO**
- **React.js** frontend with **Leaflet.js** for map rendering
- Custom marker for user locations on the map
- Real-time updates of user locations
- Responsive and mobile-friendly design
- Basic user authentication and socket connection management

## Installation

To get started with this project, you need to clone this repository and install the required dependencies.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/socket-io-location-sharing.git
   cd socket-io-location-sharing
### How it works
Backend:
The backend is powered by Express.js and Socket.IO. It listens for socket events to update and send users' location data in real-time.
When a user connects, their location is tracked, and the send-location event is emitted to update all connected users.
The backend emits updated user data via the updated-users event and the new location via receive-location event.
Frontend:
The frontend is built using React.js and Leaflet.js for rendering the interactive map.
Socket.IO client is used to connect to the backend, listen for location updates, and display markers for each user.
The user's location is updated in real-time, and markers on the map update accordingly.

### Technologies Used
React.js - Frontend JavaScript library for building user interfaces
Socket.IO - Library for real-time web applications
Leaflet.js - Library for interactive maps
Express.js - Web framework for Node.js
Node.js - JavaScript runtime for the backend

### Contributions
Feel free to fork the repository and submit a pull request with improvements, bug fixes, or new features.

### Issues
If you encounter any issues or bugs, please open an issue in the Issues section of this repository.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
