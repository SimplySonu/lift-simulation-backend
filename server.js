// create server
const app = require("express")();
const server = require("http").createServer(app);

//connecting server to socket.io to enable two way communication
const io = require("socket.io")(server, {
	cors: {
		origins: ["http://127.0.0.1:5500/", "https://lift-project.netlify.app/"],
	},
});

// open a connection using socket
io.on("connection", (socket) => {
	socket.on("addNewFloor", (args) => {
		// server emits to all end users who are connected
		io.emit("addNewFloor");
	});
});

app.get("/", (req, res) => {
	res.send("<p>Lift Simulation Backend!</p>");
});

server.listen(5000, () => {
	console.log("Lift Simulation backend starting...");
});