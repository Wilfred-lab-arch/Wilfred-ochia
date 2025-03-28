const express = require('express');
const router = express.Router();

// Sample user data
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

module.exports = router;