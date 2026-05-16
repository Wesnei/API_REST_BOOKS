import request from 'supertest';
import app from '../index.js';

describe('🔥 Testes de Integração - API de Livros', () => {

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
        price: 49.90,
        quantity: 12,
        genre: "Tecnologia",
        description: "Aprenda DevOps com o Wesnei Paiva!",
        published_year: 2026
      });

    expect(res.statusCode).toEqual(201);
  });

});