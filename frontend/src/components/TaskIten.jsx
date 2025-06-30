// src/components/TaskList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const token = localStorage.getItem('token');
  const api = axios.create({
    baseURL: 'http://localhost:3001', // ou a URL da sua API
    headers: { Authorization: `Bearer ${token}` }
  });

  // Carregar tarefas
  useEffect(() => {
    api.get('/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = () => {
    if (!text.trim()) return;

    api.post('/tasks', { text })
      .then(res => {
        setTasks([...tasks, res.data]);
        setText('');
      });
  };

  const toggleComplete = (id) => {
    api.patch(`/tasks/${id}/complete`)
      .then(() => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
      });
  };

  const handleDelete = (id) => {
    api.delete(`/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(t => t.id !== id));
      });
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    api.put(`/tasks/${id}`, { text: editText })
      .then(() => {
        setTasks(tasks.map(t => t.id === id ? { ...t, text: editText } : t));
        setEditingId(null);
        setEditText('');
      });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="task-list">
      <div className="form">
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Adicionar</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editingId === task.id ? (
              <>
                <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => saveEdit(task.id)}>Salvar</button>
                <button onClick={cancelEdit}>Cancelar</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleComplete(task.id)}>
                  {task.text}
                </span>
                <button onClick={() => startEditing(task)}>Editar</button>
                <button onClick={() => handleDelete(task.id)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
