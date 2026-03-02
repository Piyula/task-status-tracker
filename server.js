


const express = require("express"); // Express framework for building the server
const app = express(); // Create an Express application 
const http = require("http").Server(app); // Create on HTTP server usin the Express app
const io = require("socket.io")(http); // Integrate Socket.IO for real-time communication

// DB
const { connectDB } = require("./db/mongo"); // Import the function to connect to MongoDB

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