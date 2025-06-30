import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Importando o CSS global

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = { email, password };

    // Salvando usuário no localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister} className="form">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <p onClick={() => navigate('/login')}>Já tem conta? Faça login</p>
      </form>
    </div>
  );
}
