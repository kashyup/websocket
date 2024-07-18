const http = require("http");
const express =require("express");
const path = require('path')
const {Server} = require('socket.io')

const app = express();
const server = http.createServer(app);

const io = new Server(server);


//Socket.io
io.on('connection',(socket)=>{
        console.log('A new User has connected', socket.id)
        socket.on('disconnect',()=>{
            console.log('User Disconnected')
        })
})

app.use(express.static(path.resolve("./public")));

server.listen(3000, () => console.log(`Server started at: ${3000}`));

app.get("/",(req,res) => {
    res.sendFile('/public/index.html')
})
