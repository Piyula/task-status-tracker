const socket = io();

// Fetch all tasks on load
window.onload = () => {
    loadTasks();
};

// GET all tasks
async function loadTasks() {
    const res = await fetch("/api/tasks");
    const tasks = await res.json();

    renderTasks(tasks);
}

// Render tasks into 3 lists
function renderTasks(tasks) {
    document.getElementById("todoList").innerHTML = "";
    document.getElementById("doingList").innerHTML = "";
    document.getElementById("doneList").innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerText = task.title;

        li.onclick = () => updateTask(task._id, task.status);

        if (task.status === "todo") {
            document.getElementById("todoList").appendChild(li);
        } else if (task.status === "doing") {
            document.getElementById("doingList").appendChild(li);
        } else {
            document.getElementById("doneList").appendChild(li);
        }
    });
}

// Add task
async function addTask() {
    const title = document.getElementById("taskInput").value;
    if (!title) return;

    await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    });

    socket.emit("updateTask", {});
}

// Update task status
async function updateTask(id, status) {
    let next = "doing";
    if (status === "doing") next = "done";
    if (status === "done") next = "todo";

    await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next })
    });

    socket.emit("updateTask", {});
}

// Real-time update
socket.on("taskUpdated", () => {
    loadTasks();
});