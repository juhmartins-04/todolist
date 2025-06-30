// src/pages/Tasks.jsx
import { useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskIten';
import '../styles.css'; // Importando estilos globais

export default function Tasks() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Minhas Tarefas</h2>
      <TaskList />
      <button onClick={handleLogout} style={{ marginTop: '2rem' }}>
        Sair
      </button>
    </div>
  );
}
