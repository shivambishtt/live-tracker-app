import express from "express";
import http from "http";
import {Server} from "socket.io";

const app = express();
const PORT = 8080;

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*"
    }
})

app.get("/", (req, res) => {
  res.send("working");
});

server.listen(PORT, () => {
  console.log("Server is listening at port", PORT);
});

// Handling socket connections
io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);


  socket.on("send-location",(location)=>{
    console.log(location,"location");
    
    const {latitude,longitude}= location
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  })


  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

