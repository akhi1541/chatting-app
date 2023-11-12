const socket = io()

const joineeName = prompt("enter you name");
socket.emit("new-user-joined", joineeName);
socket.on("user-joined", (name) => {
  console.log(`hey user joined ${name}`);
});
