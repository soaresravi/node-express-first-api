# API de Tarefas — Node.js + Express + Firebase 🔥

API REST desenvolvida em Node.js para gerenciamento de tarefas, com autenticação JWT e persistência de dados no Firebase Firestore (NoSQL).

Este projeto foi criado com foco em aprendizado prático de backend, boas práticas de arquitetura e segurança.

---

## 🚀 Funcionalidades

- Autenticação de usuário com JWT
- CRUD completo de tarefas
- Proteção de rotas com middleware de autenticação
- Integração com banco NoSQL (Firebase Firestore)
- Arquitetura organizada (routes, controllers, services)
- Tratamento básico de erros
- Versionamento com Git e GitHub

---

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Firebase Admin SDK**
- **Firebase Firestore (NoSQL)**
- **JWT (JSON Web Token)**
- **Git / GitHub**

---

## 🔐 Autenticação

A API utiliza **JWT** para proteger as rotas.

---

## ▶️ Como Executar o Projeto
Pré-requisitos

- Node.js (v18 ou superior)
- Conta no Firebase com Firestore ativado

Passos

1. npm install
2. npm run dev

Servidor rodando em:

**http://localhost:3000**

### 🧪 Testes via PowerShell (exemplo)

Invoke-RestMethod `
  -Uri "http://localhost:3000/tasks" `
  -Method POST `
  -Headers @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer SEU_TOKEN"
  } `
  -Body '{ "title": "Estudar Node.js" }'

---

## 🔒 Segurança
- Credenciais do Firebase não são versionadas
- Arquivo sensível protegido via .gitignore
- Autenticação obrigatória para rotas críticas

---

## 🎯 Objetivo do Projeto
Projeto desenvolvido com fins educacionais para consolidar conhecimentos em backend, APIs REST, autenticação, banco NoSQL e boas práticas de desenvolvimento com Node.js.

---

## 👨‍💻 Autor
**Ravi Soares**

Desenvolvedor em início de carreira, focado em backend, APIs e tecnologia aplicada à educação.
