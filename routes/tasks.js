const express = require("express");
const router = express.Router();
const { getDB } = require("../db/mongo");

// GET: List all tasks
router.get("/", async (req, res) => {
    const tasks = await getDB().collection("tasks").find().toArray();
    res.json(tasks);
});

// POST: Add a new task
router.post("/", async (req, res) => {
    const newTask = {
        title: req.body.title,
        status: "todo",
        createdAt: new Date()
    };

    await getDB().collection("tasks").insertOne(newTask);
    res.json({ message: "Task added", task: newTask });
});

// PUT: Update task
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;

    const { ObjectId } = require("mongodb");

    await getDB()
        .collection("tasks")
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: { status: status } }
        );

    res.json({ message: "Task updated" });
});

module.exports = router;