import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'teste@teste.com' && password === '1234') {
      localStorage.setItem('token', 'fake-token');
      navigate('/home');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form">
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
        <button type="submit">Entrar</button>
        <p onClick={() => navigate('/register')}>Não tem conta? Cadastre-se</p>
      </form>
    </div>
  );
}
