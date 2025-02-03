  import express from "express";
  import http from "http";
  import {Server} from "socket.io";

  const app = express();
  const PORT = 8080;

  const server = http.createServer(app);

   const users={}

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
      users[socket.id]= {id:socket.id,
        latitude:location.latitude,
        longitude:location.longitude}

    io.emit("updated-users", Object.values(users))
    io.emit("receive-location",{id:socket.id, ...location})
    })


    socket.on("disconnect", () => {
      console.log("A user disconnected");
      delete users[socket.id]

      io.emit("updated-users", Object.values(users)) 
    });
  });

