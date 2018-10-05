module.exports = io => {
  const lobby = io.of("/lobbyChat");

  const users = {};
  lobby.on("connection", socket => {
    // console.log(`${socket.id} logged into server`);

    socket.on("username", name => {
      socket.username = name;
      users[socket.username] = socket.username;
      lobby.emit("userList", users);
    });

    socket.on("chatMessage", msg => {
      lobby.emit("chatMessage", {
        username: socket.username,
        msg
      });
      // console.log(`${socket.username}: ${msg}`);
    });

    socket.on("disconnect", () => {
      delete users[socket.username];
      lobby.emit("userList", users);
      // console.log(socket.username, "disconnecting from server");
    });
  });
};
