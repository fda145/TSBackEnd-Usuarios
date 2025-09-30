# 🚗 API de Usuários / Livros

Este projeto é uma API RESTful construída com **Node.js + Express + TypeScript + MongoDB + Mongoose**, que permite gerenciar usuarios (listar, buscar por ID, criar, atualizar parcial/completa e deletar) e livros (listar, buscar por ID e deletar).
A documentação interativa está disponível via **Swagger/OpenAPI**.

---

## 📌 Funcionalidades
- Listar todos os usuários
- Buscar carro por **ID**
- Criar um novo usuário
- Atualizar parcial/completa o usuário por **ID**
- Deletar um carro por **ID**
- Documentação interativa com **Swagger**
- Listar todos os livros
- Buscar livros por **ID**
- Deletar um livro por **_ID**

---

## 🛠️ Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [Express Validator](https://express-validator.github.io/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)

---

## 📂 Estrutura de Pastas
> .vscode
> dist
> docs
> node_modules
> src

## 🚀 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/fda145/BackendTypescript-DBCarro.git
cd nome-do-repo
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Rodar em modo desenvolvimento
```bash
npm run dev
```

### 4️⃣ Acessar a API
- Procedimentos para consultar a API de usuários
    - Configurar o arquivo .env com os parâmetros necessários para conectar no banco de dados MongoDB
      - API_KEY=SUA_CHAVE_KEY
      - MONGO_DB_KEY=mongodb+srv://flavioagapito_db_user:<SUA_SENHA_DE_ACESSO>@cluster0.7mj7wrs.mongodb.net/
      - DATABASE=dbusers
      - DB_OPTIONS=retryWrites=true&w=majority&appName=Cluster0
      - Loco após criar o banco de dados é necessário criar a entidade de usuários
      - Rodar o arquivo .src/3infra/repositorios/users.json para definir o primeiro acesso.
      - Para criar a entidade de livros, pode-se criar uma livro pelo endPoint criar, que sua estrutura será definida.
- Swagger Docs: [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)
- Para consultar um EndPont é necessário configurar a forma de acesso:
    - O projeto usa autorização tipo Basica
        . Username : master
        . Password : master%123
 - Para validar os EndPont's utilizar o software Postman
    - Importar o arquivo TSBackEnd Usuarios.postman_collection.json
      Neste arquivo já estão configurados todas as rotas do projeto.
---

## 📖 Exemplo de Endpoints

### Listar usuários
```http
GET /usuarios
```

### Buscar carro por ID
```http
GET /usuarios/1
```

### Criar usuario
```http
POST /carros
Content-Type: application/json

{
    "nome": "Nome do Usuário",
    "ativo": true
}
```
### Criar livros
```http
POST /livros
Content-Type: application/json

{
    "nome": "Produção"
}
```

---

## 📜 Licença
Este projeto é distribuído sob a licença **MIT**.
