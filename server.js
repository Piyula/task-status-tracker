


const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// DB
const { connectDB } = require("./db/mongo");

// Connect to MongoDB ONE TIME
connectDB();

app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/api/tasks", require("./routes/tasks"));

// Socket.IO (Real-time)
io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("updateTask", () => {
        io.emit("taskUpdated");
    });
});

// Run server
http.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});