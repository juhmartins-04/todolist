// backend/controllers/taskController.js
import { query } from '../db.js';

export async function getTasks(req, res) {
  const tasks = await query('SELECT * FROM tasks WHERE user_id = ?', [req.user.userId]);
  res.json(tasks);
}

export async function createTask(req, res) {
  const { title } = req.body;
  const task = await query(
    'INSERT INTO tasks (title, user_id) VALUES (?, ?)',
    [title, req.user.userId]
  );
  res.json(task);
}

export async function updateTask(req, res) {
  const { completed } = req.body;
  const updated = await query(
    'UPDATE tasks SET completed = ? WHERE id = ? AND user_id = ?',
    [completed, req.params.id, req.user.userId]
  );
  res.json(updated);
}

export async function deleteTask(req, res) {
  await query('DELETE FROM tasks WHERE id = ? AND user_id = ?', [req.params.id, req.user.userId]);
  res.json({ message: 'Deleted' });
}
