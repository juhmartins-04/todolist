// backend/controllers/authController.js
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../db.js';

export async function register(req, res) {
  const { username, password } = req.body;
  const hashedPassword = await hash(password, 10);

  try {
    const [result] = await query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;

  try {
    const [user] = await query('SELECT * FROM users WHERE username = ?', [username]);

    if (!user) return res.status(401).json({ error: 'User not found' });

    const valid = await compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
