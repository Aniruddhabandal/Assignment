const Task = require('../models/task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newTask = new Task({ title, description, userId: req.user.id });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );
        if (!updatedTask) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};
