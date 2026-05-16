import request from 'supertest';
import app from '../index.js';

describe('🔥 Testes de Integração - API de Livros', () => {

  it('Deve retornar status 200 na rota raiz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('Deve retornar status 500 na rota de debug do Sentry', async () => {
    const res = await request(app).get('/debug-sentry');
    expect(res.statusCode).toEqual(500);
  });

  it('Deve retornar 201 ao criar um livro com sucesso', async () => {
    const res = await request(app)
      .post('/api/book') 
      .send({
        title: "DevOps no IFCE",
        author: "Wesnei Paiva",
        price: 50.00,
        quantity: 12,
        genre: "Tecnologia",
        description: "Um guia completo sobre DevOps no IFCE",
        published_year: 2026
      });

    expect(res.statusCode).toEqual(201);
  });

});