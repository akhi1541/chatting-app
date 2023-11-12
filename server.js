const expres = require('express')
const { Server } = require("socket.io");
const {createServer} = require('http')
const app=expres()

const server = createServer(app);
const io = new Server(server);// initialize a new instance of socket.io by passing the server (the HTTP server) object. Then I listen on the connection event for incoming sockets and log it to the console.

// express is for middleware handling only in this project
app.use(expres.static("client"))
app.get('/chat-room',(req,res)=>{
    res.sendFile(__dirname + "/client/index.html");
})
const users = {}
io.on('connection', (socket) => {
  socket.on('new-user-joined',name=>{
    users[socket.id]= name;
    console.log(users)
    socket.emit('user-joined',name)
  })
});



server.listen(8000, () => {
  console.log('server running at http://localhost:3000');
});