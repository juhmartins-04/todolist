# 📝 ToDoList Full Stack

Um projeto completo de lista de tarefas, com **login e cadastro**, desenvolvido com:

- ⚛️ **Front-end**: React.js + Vite
- 🚀 **Back-end**: Node.js + Express
- 🛢 **Banco de Dados**: MySQL

---

## 📸 Preview

![preview](./preview.png) <!-- (adicione uma imagem da tela depois se quiser) -->

---

## 🚧 Funcionalidades

- Cadastro e login de usuário (com senha criptografada)
- Autenticação via JWT
- Criar, listar, editar e excluir tarefas
- Interface moderna e responsiva

---

## 🛠 Tecnologias

| Frontend        | Backend         | Banco de Dados |
|-----------------|------------------|----------------|
| React.js        | Node.js + Express | MySQL          |
| Vite            | JWT + Bcrypt      |                |
| React Router    | dotenv + CORS     |                |
| Axios           | Nodemon           |                |

---

## 🚀 Como rodar localmente

### 🔧 Pré-requisitos

- Node.js v18 ou superior
- MySQL instalado e rodando
- Git

### 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/juhmartins-04/todolist.git
cd todolist
```

#### 🔙 Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` com o seguinte conteúdo:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=todolist
JWT_SECRET=sua_chave_secreta
```

Crie o banco de dados com o script abaixo (ver seção Banco de Dados).

Rode o servidor:

```bash
npm run dev
```

#### 💻 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🗄️ Script SQL para MySQL

Copie e execute no seu MySQL (via Workbench ou terminal):

```sql
CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 📂 Estrutura de pastas

```
todolist/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── db.js
│   ├── index.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── vite.config.js
└── README.md
```

---

## 📄 Licença

MIT © [Julia Martins](https://github.com/juhmartins-04)
