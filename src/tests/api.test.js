import request from 'supertest';
import app from '../../index.js';
import createBookTable from '../data/createBookTable.js';

describe('🔥 Testes de Integração - API de Livros', () => {

  beforeAll(async () => {
    await createBookTable();
  });

  it('Deve retornar status 200 na rota raiz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('Deve retornar 201 ao criar um livro com sucesso', async () => {
    const res = await request(app)
      .post('/api/book') 
      .send({
        title: "DevOps no IFCE",
        author: "Wesnei Paiva",
        price: 49.99,
        quantity: 10,
        genre: "Tecnologia",
        description: "Um guia completo sobre DevOps no IFCE.",
        published_year: 2024
      });

    expect(res.statusCode).toEqual(201);
  });

});