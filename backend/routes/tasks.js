// src/pages/Tasks.jsx
import TaskList from '../components/TaskList';
import { useNavigate } from 'react-router-dom';

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
      <button onClick={handleLogout} style={{ marginTop: '2rem' }}>Sair</button>
    </div>
  );
}
