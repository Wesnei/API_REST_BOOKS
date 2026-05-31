
# **API de Livros - Node.js, Express, PostgreSQL e Sequelize**

Este projeto implementa uma API para gerenciamento de livros utilizando Node.js e Express, com um banco de dados PostgreSQL e Sequelize como ORM.

## **Tecnologias Utilizadas 🛠**

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criação de APIs em Node.js.
- **PostgreSQL**: Banco de dados relacional.
- **Sequelize**: ORM para comunicação com o banco de dados.
- **Joi**: Validação de dados.

## **Instalação 🚀**

### **1. Clonar o repositório**

Clone este repositório em seu computador:
```bash
git clone https://github.com/Wesnei/API_REST_BOOKS
cd API_REST_BOOKS
```

### **2. Instalar as dependências**

Instale todas as dependências necessárias para rodar o projeto:
```bash
npm install
```

### **3. Configuração do Banco de Dados**

1. Certifique-se de ter o PostgreSQL instalado e em execução.
2. Crie um banco de dados no PostgreSQL.
3. Configure as variáveis de ambiente no arquivo `.env` (ou crie um a partir do `.env.example`):
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=<seu-usuario>
    DB_PASSWORD=<sua-senha>
    DB_NAME=<nome-do-banco-de-dados>

    ```

### **4. Rodar o Projeto**

Execute o servidor de desenvolvimento com o comando:
```bash
npm start
```

Isso iniciará o backend na porta `3001` por padrão.

---

## **Rotas da API 📚**

### **1. Mostrar todos os livros**
- **Método**: `GET`
- **Endpoint**: `http://localhost:3001/api/book`
- **Descrição**: Retorna todos os livros cadastrados na base de dados.

### **2. Obter um livro por ID**
- **Método**: `GET`
- **Endpoint**: `http://localhost:3001/api/book/:id`
- **Descrição**: Retorna um livro específico a partir do ID fornecido.

### **3. Cadastrar um livro**
- **Método**: `POST`
- **Endpoint**: `http://localhost:3001/api/book`
- **Descrição**: Cadastra um novo livro no banco de dados.
- **Corpo da requisição**:
    ```json
    {
        "title": "Novo Livro",
        "price": 120,
        "quantity": 10,
        "author": "Autor Exemplo",
        "genre": "Ficção",
        "description": "Descrição do livro",
        "published_year": 2024
    }
    ```

### **4. Editar um livro**
- **Método**: `PUT`
- **Endpoint**: `http://localhost:3001/api/book/:id`
- **Descrição**: Edita um livro existente, enviando os atributos a serem alterados.

### **5. Deletar um livro**
- **Método**: `DELETE`
- **Endpoint**: `http://localhost:3001/api/book/:id`
- **Descrição**: Deleta um livro específico pelo ID.

## **Testando a API com Postman 📝**

Para testar a API, você pode utilizar o [Postman](https://www.postman.com/) ou qualquer outra ferramenta de testes de API. Abaixo estão os exemplos de como testar as rotas principais:

1. **Mostrar todos os livros**:
   - **Método**: `GET`
   - **URL**: `http://localhost:3001/api/book`
   - **Sem corpo de requisição**.

2. **Obter um livro por ID**:
   - **Método**: `GET`
   - **URL**: `http://localhost:3001/api/book/1` (Substitua `1` pelo ID do livro desejado).

3. **Cadastrar um livro**:
   - **Método**: `POST`
   - **URL**: `http://localhost:3001/api/book`
   - **Corpo**:
     ```json
     {
         "title": "Novo Livro",
         "price": 120,
         "quantity": 10,
         "author": "Autor Exemplo",
         "genre": "Ficção",
         "description": "Descrição do livro",
         "published_year": 2024
     }
     ```

4. **Editar um livro**:
   - **Método**: `PUT`
   - **URL**: `http://localhost:3001/api/book/1` (Substitua `1` pelo ID do livro a ser alterado).
   - **Corpo**: Informe os campos a serem atualizados.

5. **Deletar um livro**:
   - **Método**: `DELETE`
   - **URL**: `http://localhost:3001/api/book/1` (Substitua `1` pelo ID do livro a ser deletado).

## **Considerações Finais**

Este projeto foi criado para fornecer uma API eficiente para gerenciamento de livros. Com a configuração do PostgreSQL e Sequelize, você pode facilmente manipular os dados e expandir a API conforme necessário.
