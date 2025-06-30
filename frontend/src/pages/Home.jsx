// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Importando estilos

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Bem-vindo à Home!</h2>
      <button onClick={() => navigate('/tasks')}>Ver Tarefas</button>
      <button onClick={() => {
        localStorage.removeItem('token');
        navigate('/login');
      }}>Sair</button>
    </div>
  );
}
