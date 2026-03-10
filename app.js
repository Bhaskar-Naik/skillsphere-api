const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/courses", (req, res) => {
  res.status(200).json([
    { id: 1, title: "Node.js Basics" },
    { id: 2, title: "React for Beginners" },
  ]);
});

app.post("/api/courses", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  res.status(201).json({ id: 3, title });
});

app.get("/api/users", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Alice", email: "alice@skillsphere.com" },
    { id: 2, name: "Bob", email: "bob@skillsphere.com" },
  ]);
});

app.get('/api/users', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Alice', email: 'alice@skillsphere.com' },
    { id: 2, name: 'Bob', email: 'bob@skillsphere.com' }
  ]);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });
  res.status(201).json({ id: 3, name, email });
});

app.get('/status', (req, res) => {
  res.status(200).json({ message: 'App is live' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
