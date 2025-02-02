import { io, Socket } from "socket.io-client"


export let socket: Socket
// socket io connection to backend 
const connectSocket = () => {
    socket = io("http://localhost:8080/")

    socket.on("connect", () => {
        console.log("Connected to socket io server")
    })
    socket.on("test", () => {
        console.log("test init from the client");

    })
}

const disconnectSocket = () => {
    if (socket) {
        socket.disconnect()
        console.log("Disconnected from socket io server");

    }
}


if (window.navigator.geolocation) {
    navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords
        socket.emit("send-location",
            { latitude, longitude },
            (error: string) => {
                if (error) console.log(error)
            }
        )
    }, (error) => {
        console.log("Error retrieving the location", error)
    },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0, //caching
        }

    )
    console.log("Browser supports geo location");

}

export { connectSocket, disconnectSocket }