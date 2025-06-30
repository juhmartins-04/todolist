import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { register, login } from './controllers/authController.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.post('/api/register', register);
app.post('/api/login', login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
