# Task Status Tracker

A simple real-time task status tracker using **Node.js**, **MongoDB**, and **Socket.IO**.

## Features

- Create and manage tasks with a status (e.g., Todo / In Progress / Done)
- Real-time updates across connected clients (Socket.IO)
- Persist tasks in MongoDB
- Simple web UI (HTML/CSS/JS)

## Tech Stack

- **Backend:** Node.js (JavaScript), Socket.IO (and typically Express)
- **Database:** MongoDB
- **Frontend:** HTML, CSS, Vanilla JavaScript

## Folder Structure

> Update names if your repo differs (for example `app.js` vs `server.js`).

```text
task-status-tracker/
├─ package.json
├─ package-lock.json
├─ README.md
├─ .gitignore
├─ .env                         # optional (MongoDB URI, PORT, etc.)
│
├─ server.js                    # or app.js / index.js (backend entry)
├─ config/
│  └─ db.js                     # MongoDB connection helper (optional)
│
├─ models/
│  └─ Task.js                   # Task schema/model (if using Mongoose)
│
├─ routes/
│  └─ tasks.js                  # REST endpoints for tasks (optional)
│
├─ sockets/
│  └─ index.js                  # Socket.IO event handlers (optional)
│
├─ public/                      # static frontend served by Node/Express
│  ├─ index.html
│  ├─ css/
│  │  └─ styles.css
│  └─ js/
│     └─ main.js
│
└─ views/                       # optional (if using templating like EJS)
   └─ *.ejs
```

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)
- MongoDB (local instance or MongoDB Atlas connection string)

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/Piyula/task-status-tracker.git
cd task-status-tracker
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables

Create a `.env` file in the project root (if your project uses env vars) and set:

```bash
MONGODB_URI=mongodb://localhost:27017/task-status-tracker
PORT=3000
```

### 4) Run the app

```bash
npm start
```

Then open:

- `http://localhost:3000`

## Usage

1. Open the app in your browser.
2. Add a new task.
3. Change a task’s status.
4. Watch updates sync in real-time across multiple browser tabs/windows.

## Troubleshooting

- **MongoDB connection errors:** verify `MONGODB_URI` and that MongoDB is running / IP allowlist is set (Atlas).
- **Port already in use:** change `PORT` in `.env` or stop the other process.
- **No real-time updates:** confirm Socket.IO client script is loading and server is running.

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-change`
3. Commit changes: `git commit -m "Add my change"`
4. Push: `git push origin feature/my-change`
5. Open a Pull Request

## License

Add a license if you plan to share or reuse this project widely (e.g., MIT).

---

